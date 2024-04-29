import { Box, CardMedia } from '@mui/material'
import React from 'react'
import Member from './Member'
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  return (
    <>
    <Box sx={centerAlignBoxStyle}>
      <Box sx={memberBoxStyle}>
        <Member profile={'/images/myBlack.png'} name={'전영은'}/>
        <Member profile={'/images/myBlack.png'} name={'전영은'}/>
        <Member profile={'/images/myBlack.png'} name={'전영은'}/>
        <Member profile={'/images/myBlack.png'} name={'전영은'}/>
        <Member profile={'/images/myBlack.png'} name={'전영은'}/>
      </Box>
    </Box>
    </> 
  )
}

export default Home;

const memberBoxStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  width: '85%',
};

const centerAlignBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};