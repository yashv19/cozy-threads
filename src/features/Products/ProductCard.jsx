import { AspectRatio, Card, CardContent, Typography } from '@mui/joy'
import Button from '../../components/Button'
import React from 'react'



const ProductCard = ({productData}) => {
  return (
    <Card 
      sx={{
        borderRadius: 0, 
        p: 0, 
        maxWidth: 320, 
        border: '0px',
        backgroundColor: 'transparent'
      }}
    >
        <AspectRatio ratio="1/1">
            <img
                src={productData.imageURL}
                loading="lazy"
                alt={productData.title}
            />
        </AspectRatio>
        <CardContent>
            <Typography level="h3">{productData.title}</Typography>
            <Typography>{productData.description}</Typography>
            <Typography sx={{mt: '0.5rem'}}>{`$${productData.price}`}</Typography>
            <Button sx={{width: '50%', my: '0.5rem'}}>Add to Cart</Button>
        </CardContent>
    </Card>
  )
}

export default ProductCard