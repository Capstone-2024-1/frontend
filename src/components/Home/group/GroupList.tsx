import { setColor } from '@/utils/setColor';
import { Box } from '@mui/material';
import { Roboto_Flex } from 'next/font/google';
import React from 'react'

const GroupList = () => {
  return (
    <Box sx={{...myStyle, bgcolor: setColor('lightGrey')}}>
      <Box sx={textStyle}>
        My Group List
      </Box>
    </Box>
  )
}

export default GroupList;

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

const textStyle = {
  width: '100%',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '30px',
  fontFamily: 'pretendard',
}