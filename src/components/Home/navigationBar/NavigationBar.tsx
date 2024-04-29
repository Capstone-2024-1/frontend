import { Box } from '@mui/material';
import React from 'react';
import NavigationButton from './NavigationButton';
import { useUser } from '@/hook/useUser';

const NavigationBar = () => {
  const {navigationName} = useUser();
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

  width: {
    xs: '100%',
    md: '500px',
  },
  height: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  paddingBottom: '45px',
}