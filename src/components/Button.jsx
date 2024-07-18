import React from 'react'
import { Button as JoyButton } from '@mui/joy'

const Button = ({children, sx, ...rest}) => {
  return (
    <JoyButton
        sx={{
            borderRadius: 0,
            ...sx,
        }}
        {...rest}
    >
        {children}
    </JoyButton>
  )
}

export default Button
