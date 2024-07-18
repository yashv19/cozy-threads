import React from 'react'
import Page from '../components/Page'
import ProductCatalog from '../features/Products/ProductCatalog'

const Home = () => {
  return (
    <Page
    >
      <h1>Shop All</h1>
      <ProductCatalog />
    </Page>
  )
}

export default Home