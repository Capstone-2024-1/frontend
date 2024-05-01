import { setColor } from '@/utils/setColor';
import { Box, CardMedia } from '@mui/material';
import React, { useState } from 'react'
import GroupBox from './GroupBox';
import Buttons from './Buttons';

const GroupList = () => {
  const [click, setClick] = useState<boolean>(false);
  const handleAdd = () => {
    if(click)return 'images/add2.png';
    return 'images/add1.png';
  }
  const changeClick = () => {
    setClick(!click);
  }
  return (
    <Box sx={{...myStyle, bgcolor: setColor('lightGrey')}}>
      <Box sx={textStyle}>
        My Group List
      </Box>
      <GroupBox profile={`/images/groupGrey.png`} name={'대박'} num={3} creater={'전영은'}/>
      <GroupBox profile={`/images/groupGrey.png`} name={'대박'} num={3} creater={'전영은'}/>
      {click &&
        <Buttons/>
      }
      <CardMedia
            component="img"
            image={handleAdd()}
            title="profile"
            sx={imageStyle}
            onClick={changeClick}
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