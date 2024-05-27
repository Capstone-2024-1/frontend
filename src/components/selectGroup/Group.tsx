import { Box, Typography } from '@mui/material';
import React from 'react';

const Group = ({id, profile, name}: {id: number, profile: string, name: string}) => {
  return (
    <Box sx={containerStyle}>
      <Box
        component="img"
        src={profile}
        alt={`${name}'s profile`}
        sx={profileStyle}
      />
      <Typography sx={nameStyle}>{name}</Typography>
    </Box>
  );
}

export default Group;

const containerStyle = {
  minWidth: '70px',
  height: '100px',
  bgcolor: 'yellow',
  margin: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const profileStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  objectFit: 'cover',
};

const nameStyle = {
  marginTop: '5px',
  fontSize: '12px',
  textAlign: 'center',
};
