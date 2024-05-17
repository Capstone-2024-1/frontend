import { setColor } from '@/utils/setColor';
import { Box } from '@mui/material'
import React, { useState } from 'react'
import Profile from './Profile';
import MyInformation from './MyInformation';
import Service from './Service';
import LogoutModal from './components/LogoutModal';
import ContactModal from './components/ContactModal';
import NicknameModal from './components/NicknameModal';

const My = () => {
  const [logoutOpen, setLogoutOpen] = useState<boolean>(false);
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [nicknameOpen, setNicknameOpen] = useState<boolean>(true);
  const handleLogoutOpen = () => {
    setLogoutOpen(true);
  }
  const handleLogoutClose = () => {
    setLogoutOpen(false);
  }
  const handleLogout = () => {
    handleLogoutClose();
  }
  const handleContactClose = () => {
    setContactOpen(false);
  }

  const handleContact = () => {
    handleContactClose();
  }

  const handleNicknameOpen = () => {
    setNicknameOpen(!nicknameOpen);
  }

  return (
    <Box sx={{...myStyle, bgcolor: setColor('lightGrey')}}>
      <Profile handleNicknameOpen={handleNicknameOpen}/>
      <MyInformation/>
      <Service setLogoutOpen={setLogoutOpen} setContactOpen={setContactOpen}/>

      <LogoutModal logoutOpen={logoutOpen} handleClose={handleLogoutClose} handleLogout={handleLogout}/>
      <ContactModal contactOpen={contactOpen} handleClose={handleContactClose} handleContact={handleContact}/>
      <NicknameModal nicknameOpen={nicknameOpen} handleNicknameClose={handleNicknameOpen}/>

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