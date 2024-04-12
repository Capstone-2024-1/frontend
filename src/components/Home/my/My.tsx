import { setColor } from '@/utils/setColor';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import Profile from './Profile';
import MyInformation from './MyInformation';
import Service from './Service';

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
      <Dialog open={logoutOpen} onClose={handleClose}>
        <DialogTitle>{"Log Out"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLogout} autoFocus>
            Log Out
          </Button>
        </DialogActions>
      </Dialog>
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