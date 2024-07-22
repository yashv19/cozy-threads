import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Layout from './pages/Layout'
import TransactionCancelled from './pages/TransactionCancelled'
import TransactionSuccessful from './pages/TransactionSuccessful'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/cart', element: <Cart /> },
      { path: '/transaction-cancelled', element: <TransactionCancelled /> },
      { path: '/transaction-successful', element: <TransactionSuccessful /> }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
