import { setColor } from '@/utils/setColor';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import Profile from './Profile';
import MyInformation from './MyInformation';
import Service from './Service';
import LogoutModal from './components/LogoutModal';

const My = () => {
  const [logoutOpen, setLogoutOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setLogoutOpen(true);
  }
  const handleClose = () => {
    setLogoutOpen(false);
  }

  const handleLogout = () => {
    handleClose();
  }

  return (
    <Box sx={{...myStyle, bgcolor: setColor('lightGrey')}}>
      <Profile/>
      <MyInformation/>
      <Service setLogoutOpen={setLogoutOpen}/>

      <LogoutModal logoutOpen={logoutOpen} handleClose={handleClose} handleLogout={handleLogout}/>

    </Box>
  )
}

export default My;

const myStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowY: 'scroll',
  overflowX: 'hidden',
  gap: '35px',
};