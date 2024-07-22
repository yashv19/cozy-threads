import { AspectRatio, Card, Typography, CardContent, ButtonGroup, IconButton, Input, Box } from '@mui/joy'
import Button from '../../components/base/Button'
import { Minus, Plus } from '@phosphor-icons/react'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { CartActions } from './CartSlice'

const cardData = {
    id: "1",
    title: 'White Cardigan',
    description: 'Wool cardigan made from authentic Merino wool',
    imageURL: 'https://target.scene7.com/is/image/Target/GUEST_ecf5aea6-a424-490b-9e5c-ab1520c5a993?wid=1200&hei=1200&qlt=80&fmt=webp',
    price: 45.99,
}

const CartCard = ({itemData}) => {

    const dispatch = useDispatch();

    return (
        <Card
            orientation="horizontal"
            sx={{
                borderRadius: 0,
                p: '1rem',
                
                minHeight: '8rem',
                border: '0px',
                backgroundColor: 'transparent',
                m: '0.5rem'
            }}
        >
            <AspectRatio ratio="1/1" sx={{ width: '8rem', borderRadius: '1rem' }}>
                <img
                    src={itemData.imageURL}
                    loading="lazy"
                    alt={itemData.title}
                />
            </AspectRatio>
            <CardContent orientation="horizontal" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box>
                    <Typography sx={{ fontWeight: 'bold' }}>{itemData.title}</Typography>
                    <Typography sx={{ color: '#666' }}>{`$${itemData.price}/each`}</Typography>
                    <ButtonGroup size='sm' sx={{ mt: '1rem' }}>
                        <IconButton
                            onClick={() => { dispatch(CartActions.removeItemFromCart({id: itemData.id})) }}
                        >
                            <Minus weight='light' />
                        </IconButton>
                        <Input
                            value={itemData.quantity}
                            sx={{ width: '3rem', textAlign: 'center' }}
                        >
                        </Input>
                        <IconButton
                            onClick={() => { dispatch(CartActions.addItemToCart(itemData)) }}
                        >
                            <Plus weight='light' />
                        </IconButton>
                    </ButtonGroup>
                </Box>
                <Box>
                    <Typography sx={{fontWeight: 'bold'}}>Total price</Typography>
                    <Typography sx={{ color: '#666' }}>{`$${(itemData.price * itemData.quantity).toFixed(2)}`}</Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default CartCard
