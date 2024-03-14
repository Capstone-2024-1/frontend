import { Button, CardMedia } from '@mui/material'
import React from 'react'

const LoginButton = () => {
  const handleLogin = () => {
    // console.log('hi');
  };
  return (
    <Button 
      sx={buttonStyle()}
      >
    <CardMedia
      component="img"
      image={'/images/google.png'}
      title="slogan"
      sx={{
        width: '25px',
        margin: '5px'
      }}
    />
    Log in with Google

  </Button>
  )
}

export default LoginButton;

const buttonStyle = () => ({
  width: '300px', height: '55px', bgcolor: 'white',
  borderRadius: '10px', 
  font: 'pretendard',
  color: '#75574B',
  fontWeight: 'bold',
  justifyContent: 'flex-start',
  textTransform: 'none',
  ':hover':{
    bgcolor: '#EFDCD4',
  }
})