import { Box, CardMedia } from '@mui/material'
import React, { useEffect } from 'react'
import LoginButton from './LoginButton';
import { postLogin } from '@/apis/login';
import { setColor } from '@/utils/setColor';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useUser } from '@/hook/useUser';

// interface LoginResponse {
//   id: number;
//   accessToken: string;
//   isRegistered: boolean;
// }

const Main = () => {
  const router = useRouter();
  const {setAccessToken, setUserId} = useUser();

  useEffect(()=>{
    if(router.isReady){
      const fetchCode = async () => {
        const {code} = router.query;
        if(code && typeof code === 'string'){
          const response = await postLogin(code);
          console.log(response);
          if(response){
            console.log(response.accessToken);
            setAccessToken(response.accessToken);
            setUserId(response.id);
            if(response.isRegistered === true){
              router.push('/home');
            }
            else{
              router.push('/register/nickname');
            }
          }
        }
      }
      fetchCode();
    }
  }, [router.query]);

  const tempMove = () => {
    router.push('/register/nickname');
  }
  return (
    <Box sx={container}>

        <CardMedia
            component="img"
            image={'/images/logo.png'}
            title="profile"
            sx={logoStyle}
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

const logoStyle = {
  width: '200px',
  height: '200px', 
  bgcolor: '#EFDCD4', 
  borderRadius: '100px',
  margin: '50px'
}