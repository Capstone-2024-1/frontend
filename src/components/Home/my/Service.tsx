import { Box } from '@mui/material'
import React from 'react'
import MyButton from './components/MyButton'
interface ServiceProps {
  setLogoutOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setContactOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Service = ({ setLogoutOpen, setContactOpen }: ServiceProps) => {
  return (
    <Box sx={serviceStyle}>
      <MyButton name={"Contact To Us"} click={()=>setContactOpen(true)}/>
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