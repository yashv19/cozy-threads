import express from 'express';
import catalog from './catalog.js';
import cors from 'cors';
import Stripe from 'stripe';
import * as dotenv from 'dotenv';
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors())
app.use(express.json());

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
        lineItems.push({
            price_data: {
                product_data: {
                    name: item.title,
                    description: item.description,
                    images: [item.imageURL]
                },
                currency: 'USD',
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        })
    })
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `${process.env.DOMAIN_URL}/transaction-successful`,
        cancel_url: `${process.env.DOMAIN_URL}/transaction-cancelled`,
    });
    console.log(`Session created. URL: ${session.url}`)

    res.send({redirectUrl: session.url});
})

app.listen(3000);
console.log('Server listening on port 3000');