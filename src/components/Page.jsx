import React from 'react'
import { Box } from '@mui/joy'

const Page = ({children, sx, ...rest}) => {
  return (
    <Box
        sx={{
            marginTop: '72px',
            boxSizing: 'border-box',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            ...sx,
        }}
        {...rest}
    >
        {children}
    </Box>
  )
}

export default Page
