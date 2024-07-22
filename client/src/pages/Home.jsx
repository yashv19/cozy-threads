import React, { useEffect, useState } from 'react'
import Page from '../components/base/Page'
import ProductCard from '../components/Products/ProductCard'
import { Grid, Typography } from '@mui/joy';
import axios from 'axios';
// import catalog from '../../../server/src/catalog';

const Home = () => {

  const [catalog, setCatalog] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('/api/get-products')
      .then(res => {
        console.log(res);
        setCatalog(res.data)
      })
      .catch(err => {
        console.log('Failed to fetch products')
        console.error(err)
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
      {error && <Typography sx={{ m: '4rem' }}>🙁 Failed to fetch products</Typography>}
    </Page>
  )
}

export default Home