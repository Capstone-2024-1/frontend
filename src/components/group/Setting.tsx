import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Profile from './components/Profile'
import LeaveModal from './components/LeaveModal';
import MyButton from './components/MyButton';
import RemoveModal from './components/RemoveModal';
import { useUser } from '@/hook/useUser';
import { useRouter } from 'next/router';
import { leaveGroup, removeGroup } from '@/apis/group';

const Setting = () => {
  const router = useRouter();
  const {currentGroup, user, creater} = useUser();
  const [leaveOpen, setLeaveOpen] = useState<boolean>(false);
  const [removeOpen, setRemoveOpen] = useState<boolean>(false);
  const handleLeaveClose = () => {
    setLeaveOpen(false);
  }
  const handleLeave = () => {
    const data =  leaveGroup(currentGroup, user.accessToken);
    handleLeaveClose();
    router.push('/home');
  }
  const handleRemoveClose = () => {
    setRemoveOpen(false);
  }
  const handleRemove = () => {
    const response = removeGroup(currentGroup, user.accessToken);
  };

  useEffect(() =>{
    console.log(creater);
    console.log(user.name);
    console.log(creater === user.name)
  }, []);
  
  return (
    <Box>
      <Profile/>
      <Box sx={numberStyle}>
        {currentGroup}
      </Box>
      <Box sx={buttonStyle}>
        <MyButton name={"Leave the Group"} click = {()=>setLeaveOpen(true)}/>
        {
        creater === user.name &&
          <MyButton name={"Remove the Group"} click = {()=>setRemoveOpen(true)}/>
        }
        <Box>
          <LeaveModal leaveOpen={leaveOpen} handleClose={handleLeaveClose} handleLeave={handleLeave}/>
          {
          creater === user.name &&
            <RemoveModal removeOpen={removeOpen} handleClose={handleRemoveClose} handleRemove={handleRemove}/>
          }
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

