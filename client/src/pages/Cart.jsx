import React from 'react'
import Page from '../components/base/Page'
import CartCard from '../components/Cart/CartCard'
import { useSelector } from 'react-redux'
import { Box, Divider, Typography, Link } from '@mui/joy'
import Button from '../components/base/Button'
import axios from 'axios'

const Cart = () => {
  const itemsInCart = useSelector(state => state.cart.itemsInCart);
  const totalCost = useSelector(state => state.cart.totalCost);

  const checkoutHandler = async () => {
      
      try {
        const res = await axios.post('/api/create-checkout-session', {cartItems: itemsInCart}, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log(res);
  
        const redirectUrl = res.data.redirectUrl;
  
        window.location.href = redirectUrl;
      }
      catch(err) {
        console.log(`Error creating checkout session. ${err}`)
      }

  }

  return (
    <Page>
      <h1>Cart Summary</h1>
      {itemsInCart.length === 0 && <Typography>No items in your cart</Typography>}
      {itemsInCart.length > 0 &&
        <Box sx={{ maxWidth: '40rem', width: '100%', }}>
          {itemsInCart.map((item) => {
            return (
              <Box key={item.id}>
                <CartCard key={item.id} itemData={item} />
                <Divider sx={{ alignSelf: 'center' }} />
              </Box>
            )
          })}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: '1rem' }}>
              <Button onClick={checkoutHandler}>Checkout</Button>
            <Typography level="h3">{`Cart total: $${totalCost.toFixed(2)}`}</Typography>
          </Box>
        </Box>}

    </Page>
  )
}

export default Cart
