import React from 'react'
import ProductCard from './ProductCard'
import catalog from '../../utils/catalog';
import { Grid } from '@mui/joy';

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
