import React from 'react'
import Page from '../components/base/Page'
import { Link } from '@mui/joy'
import { Link as RouterLink } from 'react-router-dom'
import Button from '../components/base/Button'

const TransactionSuccessful = () => {
  return (
    <Page>
      <h1>Order Placed!</h1>
      <Link component={RouterLink} to="/">
        <Button>Return Home</Button>
      </Link>
    </Page>
  )
}

export default TransactionSuccessful