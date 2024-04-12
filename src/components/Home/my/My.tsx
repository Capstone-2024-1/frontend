import { setColor } from '@/utils/setColor';
import { Box } from '@mui/material'
import React from 'react'
import Profile from './Profile';
import MyInformation from './MyInformation';
import Service from './Service';

const My = () => {
  return (
    <Box sx={{...myStyle, bgcolor: setColor('lightGrey')}}>
      <Profile/>
      <MyInformation/>
      <Service/>
    </Box>
  )
}

export default My;

const myStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowY: 'scroll',
  overflowX: 'hidden',
  gap: '35px',
};