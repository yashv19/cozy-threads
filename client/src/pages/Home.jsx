import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import ProductCard from '../features/Products/ProductCard'
import { Grid, Typography } from '@mui/joy';
// import catalog from '../../../server/src/catalog';

const Home = () => {

  const [catalog, setCatalog] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {

    fetch('/api/get-products')
      .then(response => response.json())
      .then(data => setCatalog(data))
      .catch(err => {
        console.error(err);
        console.log('failed to fetch products');
        setError(true);
      })

  }, []);

  return (
    <Page
    >
      <h1>Shop All</h1>
      {catalog && <Grid
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
      </Grid>}
      {error && <Typography sx={{m: '4rem'}}>🙁 Failed to fetch products</Typography>}
    </Page>
  )
}

export default Home