import { Box, Button, CardMedia } from '@mui/material'
import React from 'react'
import LoginButton from './LoginButton';

const Main = () => {
  return (

    <Box sx={{bgcolor: '#937062', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

      <Box sx={{ //logo
        width: '200px', 
        height: '200px', 
        bgcolor: '#EFDCD4', 
        borderRadius: '100px',
        margin: '50px'}}/>

      <CardMedia
        component="img"
        image={'/images/slogan.png'}
        title="slogan"
        sx={{
          width: '150px',
          marginBottom: '100px',
        }}
      />

      <LoginButton/>
    </Box>
  )
}

export default Main;
