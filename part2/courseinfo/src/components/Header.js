import { Typography } from '@mui/material'
import React from 'react'

const Header = ({header}) => {
  return (
    <Typography variant='h5' paddingTop='20px'>{header}</Typography>
  )
}

export default Header