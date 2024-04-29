import { Box } from '@mui/material'
import React, { useState } from 'react'
import Profile from './components/Profile'
import LeaveModal from './components/LeaveModal';
import MyButton from './components/MyButton';
import RemoveModal from './components/RemoveModal';

const Setting = () => {
  const [leaveOpen, setLeaveOpen] = useState<boolean>(false);
  const [removeOpen, setRemoveOpen] = useState<boolean>(false);
  const handleLeaveClose = () => {
    setLeaveOpen(false);
  }
  const handleLeave = () => {
    handleLeaveClose();
  }
  const handleRemoveClose = () => {
    setRemoveOpen(false);
  }
  const handleRemove = () => {

  }
  
  return (
    <Box>
      <Profile/>
      <Box sx={numberStyle}>
        030717
      </Box>
      <Box sx={buttonStyle}>
        <MyButton name={"Leave the Group"} click = {()=>setLeaveOpen(true)}/>
        <MyButton name={"Remove the Member"} click = {()=>setRemoveOpen(true)}/>
        <Box>
          <LeaveModal leaveOpen={leaveOpen} handleClose={handleLeaveClose} handleLeave={handleLeave}/>
          <RemoveModal removeOpen={removeOpen} handleClose={handleRemoveClose} handleRemove={handleRemove}/>
        </Box>
      </Box>
    </Box>
  )
}

export default Setting;

const numberStyle = {
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'JejuGothic',
  fontSize: '3.125rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  letterSpacing: '0.0625rem',
  margin: '30px',
};

const buttonStyle = {
display: 'flex',
flexDirection: 'column',
alignItems: 'center',

};

