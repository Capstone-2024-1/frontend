import { useUser } from '@/hook/useUser';
import { Box, CardMedia, TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Main = () => {
  const router = useRouter();
  const { setIsExistedMenuList } = useUser();
  const [menu, setMenu] = useState<string>('');

  const handleButton = () => {
    setIsExistedMenuList(true);
    // router.push('/camera');
    router.push('/selectGroup');
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMenu(event.target.value);
  };

  const handleMenu = () => {
    setIsExistedMenuList(false);
    router.push(`/menu/detail?name=${menu}`);
  };

  return (
    <Box sx={boxStyle}>
      <Box sx={searchStyle}>
        <TextField
          sx={textFieldStyle}
          id='outlined-basic'
          label='food name'
          variant='outlined'
          onChange={handleNicknameChange}
        />
        <CardMedia
          component="img"
          image={'/images/search.png'}
          title="profile"
          sx={searchButtonStyle}
          onClick={handleMenu}
        />
      </Box>
      <CardMedia
        component="img"
        image={'/images/cameraButton.png'}
        title="profile"
        sx={cameraStyle}
        onClick={handleButton}
      />
    </Box>
  );
};

export default Main;

const boxStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

const cameraStyle = {
  width: '200px',
  height: '200px',
  cursor: 'pointer',
};

const searchStyle = {
  width: '60%',
  height: '40px',
  display: 'flex',
  marginBottom: '50px',
  alignItems: 'center',
};

const searchButtonStyle = {
  width: '30px',
  height: '30px',
  marginLeft: '10px',
  cursor: 'pointer',
};

const textFieldStyle = {
  width: '90%',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'red',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
  '& .MuiInputBase-input': {
    padding: '10px',
  },
  '& .MuiInputLabel-root': {
    transform: 'translate(14px, 14px) scale(1)',
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -15px) scale(0.75)',
    },
  },
};