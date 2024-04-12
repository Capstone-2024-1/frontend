import { Box } from '@mui/material'
import React from 'react'
import MyButton from './components/MyButton'

const Service = ({setLogoutOpen}: {setLogoutOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const handleLogout = () => {
    setLogoutOpen(true);
  }
  return (
    <Box sx={serviceStyle}>
      <MyButton name={"Contact To Us"}/>
      <MyButton name={"Log Out"} click = {()=>setLogoutOpen(true)}/>
    </Box>

  )
}

export default Service;

const serviceStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}