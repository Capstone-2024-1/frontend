import { setColor } from '@/utils/setColor';
import { Box } from '@mui/material';
import { Roboto_Flex } from 'next/font/google';
import React from 'react'
import GroupBox from './GroupBox';

const GroupList = () => {
  return (
    <Box sx={{...myStyle, bgcolor: setColor('lightGrey')}}>
      <Box sx={textStyle}>
        My Group List
      </Box>
      <GroupBox profile={`/images/groupGrey.png`} name={'대박'} num={3} creater={'전영은'}/>
      <GroupBox profile={`/images/groupGrey.png`} name={'대박'} num={3} creater={'전영은'}/>
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
  marginBottom: '30px',
}