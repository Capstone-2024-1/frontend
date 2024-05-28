import React from 'react'
import Title from './Title'
import { Box } from '@mui/material'
import { setColor } from '@/utils/setColor'
import Orders from './Orders'
import Cannot from './Cannot'

const OrderList = () => {
  return (
    <Box sx={boxStyle}>
    <Title/>
    <Orders/>
    <Cannot/>
    </Box>
    
  )
}

export default OrderList;

const boxStyle = {
  bgcolor: setColor('lightGrey'),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: 'calc(100% - 90px)',
  color: 'black',
}