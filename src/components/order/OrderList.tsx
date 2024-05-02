import React from 'react'
import Title from './Title'
import { Box } from '@mui/material'
import { setColor } from '@/utils/setColor'
import Orders from './Orders'

const OrderList = () => {
  return (
    <Box sx={boxStyle}>
    <Title/>
    <Orders/>
    </Box>
    
  )
}

export default OrderList;

const boxStyle = {
  bgcolor: setColor('lightGrey'),
}