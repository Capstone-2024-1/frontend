import Header from '@/components/common/Header';
import { setColor } from '@/utils/setColor';
import { Box, TextField } from '@mui/material';
import React from 'react'

const nickname = () => {
  return (
    <>
    <Header title={'NickName'}/>
    <Box sx={container}>
    <TextField sx={textFieldStyle} id='outlined-basic' label='NickName' variant='outlined'/>
    </Box>
    </>
  )
}

export default nickname;

const container = {
    display: 'flex',
    // justifyContent: 'center',
    padding: '2rem',
}

const textFieldStyle = {
  width: '70%',
  marginBottom: '10px',
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