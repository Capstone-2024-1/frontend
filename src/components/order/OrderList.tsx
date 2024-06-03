import React from 'react'
import Title from './Title'
import { Box } from '@mui/material'
import { setColor } from '@/utils/setColor'
import Orders from './Orders'
import Cannot from './Cannot'
import NavigationBar from '../Home/navigationBar/NavigationBar'

const OrderList = () => {
  return (
    <Box sx={boxStyle}>
    <Title/>
    <Box sx={containerStyle}>
      <Orders/>
      <Cannot/>
    </Box>
    <NavigationBar/>
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
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  overflow: 'scroll',
}