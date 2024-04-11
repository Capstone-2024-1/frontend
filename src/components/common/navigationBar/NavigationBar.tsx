import { Box } from '@mui/material';
import React, { useState } from 'react';
import NavigationButton from './NavigationButton';

const NavigationBar = () => {
  const [activeButton, setActiveButton] = useState<string>('camera');
  const handleClick = () => {
    setActiveButton(activeButton);
  }
  return (
    <Box sx={navigationBarStyle}>
      <NavigationButton name={"camera"} active={activeButton === 'camera'} onClick={handleClick}/>
      <NavigationButton name={"group"} active={activeButton === 'group'} onClick={handleClick}/>
      <NavigationButton name={"my"} active={activeButton === 'my'} onClick={handleClick}/>
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

  width: '500px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
}