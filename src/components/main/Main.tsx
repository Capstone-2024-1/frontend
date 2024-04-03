import { Box, CardMedia } from '@mui/material'
import React, { useEffect } from 'react'
import LoginButton from './LoginButton';
import { postLogin } from '@/apis/login';
import { setColor } from '@/utils/setColor';
import { useRouter } from 'next/router';

const Main = () => {
  const router = useRouter();
  useEffect(()=>{
    const fetchCode = async () => {
      const {code} = router.query;
      if(code && typeof code === 'string'){
        const response = await postLogin(code);
        if(response){
          if(response.isRegistered === true){
            router.push('/home');
          }
          else{
            router.push('/register');
          }
        }
      }
    }
    fetchCode();
  }, [router.query]);

  const tempMove = () => {
    router.push('/register/nickname');
  }
  return (
    <Box sx={container}>

      <Box sx={{ //logo
        width: '200px',
        height: '200px', 
        bgcolor: '#EFDCD4', 
        borderRadius: '100px',
        margin: '50px'}}
        onClick={tempMove}
        />
      
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

const container = {
    bgcolor: setColor('main')||'black',
    width: '100%',
    height: '100%',
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
};