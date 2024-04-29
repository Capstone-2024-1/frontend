import { Box, CardMedia } from '@mui/material'
import { useRouter } from 'next/router';
import React from 'react'

interface GroupProps {
  profile: string,
  name: string,
  num: number,
  creater: string,
}

const GroupBox: React.FC<GroupProps> = ({profile, name, num, creater}) => {
  const router = useRouter();
  const handleClick= () => {
    router.push(`/group?name=${name}`);
  }

  return (
    <Box sx={boxStyle} onClick={handleClick}>
      <CardMedia
        component="img"
        image={profile}
        title="profile"
        sx={profileStyle}
      />
      <Box sx={groupStyle}>
        <Box sx={nameStyle}>
          {name}
        </Box>
        <Box sx={infoStyle}>
          {num} people · {creater}
        </Box>
        
      </Box>
        
    </Box>
  )
}

export default GroupBox;

const boxStyle = {
    width: '93%',
    height: '90px',
    bgcolor: '#FFFFFF',

    marginBottom: '15px',
    borderBottom: '1px solid #D9D9D9',
    
    display: 'flex',
    cursor: 'pointer',
};

const profileStyle = {
  width: '80px',
  margin: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bgcolor: 'grey',
  borderRadius: '40%',
};

const groupStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '10px',
};

const nameStyle = {
  fontSize: '1.375rem',
  fontFamily: 'Inter',
  fontWeight: 'bold',
  marginTop: '14px',
};

const infoStyle = {
  color: '#938787',
  fontFamily: 'Inter',
  fontSize: '0.85rem',
}