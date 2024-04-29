import { Box } from '@mui/material';
import React from 'react';
import NavigationButton from './NavigationButton';
import { useUser } from '@/hook/useUser';

const NavigationBar = () => {
  const {navigationName} = useUser();
  return (
    <Box sx={navigationBarStyle}>
      <NavigationButton name={"home"} active={navigationName === 'home'}/>
      <NavigationButton name={"food"} active={navigationName === 'food'}/>
      <NavigationButton name={"setting"} active={navigationName === 'setting'}/>
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