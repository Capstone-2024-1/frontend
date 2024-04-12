import { Box } from '@mui/material'
import React from 'react'
import MyButton from './buttons/MyButton'

const Service = () => {
  return (
    <Box sx={serviceStyle}>
      <MyButton name={"Contact To Us"}/>
      <MyButton name={"Log Out"}/>
    </Box>
  )
}

export default Service;

const serviceStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}