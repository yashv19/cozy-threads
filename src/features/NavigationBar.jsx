import React from 'react'
import { Link } from '@mui/joy';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography
} from '@mui/joy';
import CartButton from './Cart/CartButton';

const NavigationBar = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: '0 4px 8px 0 rgb(0,0,0,0.1)',
        borderBottom: '1px solid rgb(0,0,0,0.1)',
        height: '72px',
        backgroundColor: '#EAE2D5',
      }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: '0 2rem',
        }}
      >
        <Link component={RouterLink} to="/">
          <Typography
            level="h1"
            sx={{
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            Cozy Threads
          </Typography>
        </Link>
        <Link component={RouterLink} to="/cart">
            <CartButton />
        </Link>
      </Box>
    </Box>
  )
}

export default NavigationBar;