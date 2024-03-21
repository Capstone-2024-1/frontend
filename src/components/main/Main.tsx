'use client';
import React, { useEffect } from 'react'
import { Box, CardMedia } from '@mui/material';
import LoginButton from './LoginButton';
import { useRouter, useSearchParams } from 'next/navigation';
import { postLogin } from '@/apis/login';
import { setColor } from '@/utils/setColor';

const Main = () => {
  const router = useRouter();
  
  const params = useSearchParams();

  // const handleHome = () => {
  //   router.push('/home');
  // };
  useEffect(()=>{
    const fetchCode = async () => {
      const code = params?.get('code') ;
      if(code && code!==null && code!==undefined){
        console.log(code);
        const response = await postLogin(code);
        if(response){
          if(response.isRegistered === true){
            router.push('page/home');
          }
          else{
            router.push('page/register');
          }
        }
      }
    }
    fetchCode();
  }, []);
  
  return (
    <Box sx={{bgcolor: setColor("main"), width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

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
    {/* <Box sx={{width: '10px', height: '10px', bgcolor: 'red'}} onClick={handleHome}/> */}
  </Box>
  )
}

export default Main;
