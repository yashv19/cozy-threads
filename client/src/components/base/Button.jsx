import React from 'react'
import { Button as JoyButton } from '@mui/joy'

const Button = ({children, ...rest}) => {
  return (
    <JoyButton
        variant='outlined'
        {...rest}
    >
        {children}
    </JoyButton>
  )
}

export default Button
