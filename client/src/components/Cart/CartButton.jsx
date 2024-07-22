import { IconButton, Badge } from '@mui/joy'
import { ShoppingCart } from '@phosphor-icons/react'
import React from 'react'
import { useSelector } from 'react-redux'

const CartButton = () => {
  const cartCount = useSelector(state => state.cart.totalItemsInCart);

  return (
    <Badge badgeContent={cartCount} size="md" anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}>
      <IconButton>
        <ShoppingCart size={36} weight="thin" />
      </IconButton>

    </Badge>
  )
}

export default CartButton
