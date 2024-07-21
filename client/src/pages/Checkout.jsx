import React from 'react'
import Page from '../components/Page'
import { Grid } from '@mui/joy'

const Checkout = () => {
  return (
    <Page>
      <Grid
        container
      >
        <Grid>
          Cart Items
        </Grid>
        <Grid>
          Checkout
        </Grid>
      </Grid>
    </Page>
  )
}

export default Checkout
