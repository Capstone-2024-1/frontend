import { Box } from '@mui/material';
import React from 'react';
import NavigationButton from './NavigationButton';
import { useUser } from '@/hook/useUser';

const NavigationBar = () => {
  const {navigationGroupName} = useUser();
  return (
    <Box sx={navigationBarStyle}>
      <NavigationButton name={"home"} active={navigationGroupName === 'home'}/>
      <NavigationButton name={"food"} active={navigationGroupName === 'food'}/>
      <NavigationButton name={"setting"} active={navigationGroupName === 'setting'}/>
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
  '@media (min-width: 560px)': {
    width: '550px',
  },
  height: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  paddingBottom: '45px',
}