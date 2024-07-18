import React from 'react'
import ProductCard from './ProductCard'
import catalog from '../../utils/catalog';
import { Grid } from '@mui/joy';

const cardData = {
  id: "1",
  title: 'White Cardigan',
  description: 'Wool cardigan made from authentic Merino wool',
  imageURL: 'https://plus.unsplash.com/premium_photo-1661521278428-9f308df2fa60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyZGlnYW58ZW58MHx8MHx8fDA%3D',
  price: 45.99,
}

const ProductCatalog = () => {

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      rowSpacing={4}
      columnSpacing={2}
      sx={{
        maxWidth: "1400px"
      }}
    >
      {catalog.map((product) => {
        return (
          <Grid 
            key={product.id} 
            xs={3}
            display="flex"
            justifyContent="center"
            direction="column"
          >
            <ProductCard productData={product} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ProductCatalog
