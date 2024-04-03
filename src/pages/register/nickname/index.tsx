import Header from '@/components/common/Header';
import Progress from '@/components/common/Progress';
import { setColor } from '@/utils/setColor';
import { Box, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const nickname = () => {
  const router = useRouter();
  const [nickName, setNickName] = useState('');

  const handleClick = () => {
    console.log(nickName);
    router.push('/register/ingredient');
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(event.target.value);
  };

  return (
    <>
    <Header title={'NickName'}/>
    <Box sx={container}>
    <TextField sx={textFieldStyle} id='outlined-basic' label='NickName' variant='outlined' onChange={handleNameChange}/>
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