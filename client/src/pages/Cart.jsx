import React from 'react'
import Page from '../components/Page'
import CartCard from '../features/Cart/CartCard'
import { useSelector } from 'react-redux'
import { Box, Divider, Typography, Link } from '@mui/joy'
import Button from '../components/Button'
import { Link as RouterLink } from 'react-router-dom'

const Cart = () => {
  const itemsInCart = useSelector(state => state.cart.itemsInCart);
  const totalCost = useSelector(state => state.cart.totalCost);

  return (
    <Page>
      <h1>Cart Summary</h1>
      {itemsInCart.length === 0 && <Typography>No items in your cart</Typography>}
      {itemsInCart.length > 0 &&
        <Box sx={{ maxWidth: '40rem', width: '100%', }}>
          {itemsInCart.map((item) => {
            return (
              <>
                <CartCard key={item.id} itemData={item} />
                <Divider sx={{ alignSelf: 'center' }} />
              </>
            )
          })}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: '1rem' }}>
            <Link component={RouterLink} to="/checkout">
              <Button>Checkout</Button>
            </Link>
            <Typography level="h3">{`Cart total: $${totalCost.toFixed(2)}`}</Typography>
          </Box>
        </Box>}

    </Page>
  )
}

export default Cart
