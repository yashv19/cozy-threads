import { IconButton } from '@mui/joy'
import { ShoppingCart } from '@phosphor-icons/react'
import React from 'react'

const CartButton = () => {
  return (
    <IconButton>
        <ShoppingCart size={36} weight="thin" />
    </IconButton>
  )
}

export default CartButton
