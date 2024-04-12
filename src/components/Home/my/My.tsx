import { setColor } from '@/utils/setColor';
import { Box } from '@mui/material'
import React from 'react'
import Profile from './Profile';

const My = () => {
  return (
    <Box sx={myStyle}>
      <Profile/>

    </Box>
  )
}

export default My;

const myStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  bgcolor: setColor('lightGrey'),
}