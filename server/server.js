import express from 'express';
import catalog from './catalog.js';
import Stripe from 'stripe';
import path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const DOMAIN_URL = process.env.NODE_ENV === 'production' ? process.env.EXTERNAL_URL : process.env.DOMAIN_URL;

const app = express();

app.use(express.json());

//Serve static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../client/dist')));


//Serve catalog data
app.get('/api/get-products', (req, res) => {
    const products = [];
    catalog.forEach((value, key) => {
        products.push(value)
    })
    res.send(products);
})

//Stripe checkout
app.post('/api/create-checkout-session', async (req, res) => {
    console.log(req.body);
    const lineItems = [];
    const cart = req.body.cartItems;
    cart.forEach((item) => {
        const product = catalog.get(item.id);
        lineItems.push({
            price_data: {
                product_data: {
                    name: product.title,
                    description: product.description,
                    images: [product.imageURL]
                },
                currency: 'USD',
                unit_amount: product.price * 100
            },
            quantity: item.quantity
        })
    })
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `${DOMAIN_URL}/transaction-successful`,
        cancel_url: `${DOMAIN_URL}/transaction-cancelled`,
    });
    console.log(`Session created. URL: ${session.url}`)

    res.send({redirectUrl: session.url});
})

// Serve react app for non API requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening on port ${port}`);