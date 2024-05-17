import { postExpelMember } from '@/apis/group';
import { useUser } from '@/hook/useUser';
import { setColor } from '@/utils/setColor';
import { Box, CardMedia } from '@mui/material'
import React from 'react'

const Member = ({id, profile, name}: {id: number, profile:string, name: string}) => {
  const {creater, user, currentGroup} = useUser();
  
  const handleExpel = async () => {
    const response = await postExpelMember(currentGroup, id, user.accessToken);
    console.log(response);
  };

  return (
    <Box sx={memberContainer}>
      <CardMedia
          component="img"
          image={profile}
          title="profile"
          sx={profileStyle}
          />
      {name}
      {
      creater === user.name && name !== user.name &&
        <Box sx={expelStyle} onClick={handleExpel}>
          expel
        </Box>
      }
    </Box>
  )
}

export default Member;

const memberContainer = {
  width: '40%',
  height: '140px',
  bgcolor: 'white',
  margin: '3%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  borderRadius: '0.9375rem',

  fontFamily: 'Inter',
  fontSize: '1.2rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
}

const profileStyle = {
width: '60px',
height: '60px',
margin: '10px',
};

const expelStyle = {
  width: '40%',
  height: '27px',
  bgcolor: setColor('main'),
  color: 'white',
  borderRadius: '30px',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '3px',
  cursor: 'pointer',
}