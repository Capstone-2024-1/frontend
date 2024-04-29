import { Box, CardMedia } from '@mui/material'
import React from 'react'

const Member = ({profile, name}: {profile:string, name: string}) => {
  return (
    <Box sx={memberContainer}>
      <CardMedia
          component="img"
          image={profile}
          title="profile"
          sx={profileStyle}
          />
      {name}
    </Box>
  )
}

export default Member;

const memberContainer = {
  width: '40%',
  height: '120px',
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
}