import React from 'react'
import { Box } from '@mui/joy'

const Page = ({children, sx, ...rest}) => {
  return (
    <Box
        sx={{
            paddingTop: '6rem',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            ...sx,
        }}
        {...rest}
    >
        {children}
    </Box>
  )
}

export default Page
