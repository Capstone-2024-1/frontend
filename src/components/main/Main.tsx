'use client';
import React from 'react'
import { Box, CardMedia } from '@mui/material';
import LoginButton from './LoginButton';
import { usePathname, useRouter } from 'next/navigation';

const Main = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handleHome = () => {
    router.push('/home');
  };
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
    <Box sx={{width: '10px', height: '10px', bgcolor: 'red'}} onClick={handleHome}/>
  </Box>
  )
}

export default Main;
