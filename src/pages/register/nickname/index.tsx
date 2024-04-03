import Header from '@/components/common/Header';
import Progress from '@/components/common/Progress';
import { setColor } from '@/utils/setColor';
import { Box, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'

const nickname = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/register/ingredient');
  }
  return (
    <>
    <Header title={'NickName'}/>
    <Box sx={container}>
    <TextField sx={textFieldStyle} id='outlined-basic' label='NickName' variant='outlined'/>
    </Box>
    <Progress num={"1"} onClick={handleClick}/>
    </>
  )
}

export default nickname;

const container = {
    display: 'flex',
    margin: '2rem',
}

const textFieldStyle = {
  width: '100%',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: setColor('main'),
    },
    '&:hover fieldset': {
      borderColor: setColor('emphasize'),
    },
    '&.Mui-focused fieldset': {
      borderColor: setColor('main'),
    },
  },
}