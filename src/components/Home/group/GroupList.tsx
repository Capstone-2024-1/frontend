import { setColor } from '@/utils/setColor';
import { Box, CardMedia } from '@mui/material';
import { Roboto_Flex } from 'next/font/google';
import React from 'react'
import GroupBox from './GroupBox';

const GroupList = () => {
  const handleAdd = () => {
    return 'images/add1.png';
  }
  return (
    <Box sx={{...myStyle, bgcolor: setColor('lightGrey')}}>
      <Box sx={textStyle}>
        My Group List
      </Box>
      <GroupBox profile={`/images/groupGrey.png`} name={'대박'} num={3} creater={'전영은'}/>
      <GroupBox profile={`/images/groupGrey.png`} name={'대박'} num={3} creater={'전영은'}/>
      <CardMedia
            component="img"
            image={handleAdd()}
            title="profile"
            sx={imageStyle}
            />
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
};

const imageStyle = {
  width: '50px',
  position: 'absolute',
  bottom: 110,
  right: '5%',
  '@media (min-width: 560px)': {
    right: 'calc(50% - 230px)', // 화면 너비가 560px 이상일 때 오른쪽에서 30px 떨어진 위치에 고정
  }
}