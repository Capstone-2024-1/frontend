import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import NavigationButton from './NavigationButton';
import { useUser } from '@/hook/useUser';
import { useRouter } from 'next/router';

const NavigationBar = () => {
  const router = useRouter();
  const {navigationName} = useUser();
  useEffect(()=>{
    if(router.pathname !=='/home' && navigationName !== 'camera'){
      router.push('/home');
    }
  },[navigationName]);
  return (
    <Box sx={navigationBarStyle}>
      <NavigationButton name={"camera"} active={navigationName === 'camera'}/>
      <NavigationButton name={"group"} active={navigationName === 'group'}/>
      <NavigationButton name={"my"} active={navigationName === 'my'}/>
    </Box>
  )
}

export default NavigationBar;

const navigationBarStyle = {
  position: 'fixed',
  bottom: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 3,

  width: '100%',
  bgcolor: 'white',
  '@media (min-width: 560px)': {
    width: '500px',
  },
  height: '90px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
}