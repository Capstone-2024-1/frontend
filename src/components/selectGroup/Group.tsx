import { useUser } from '@/hook/useUser';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { setColor } from '@/utils/setColor';

const Group = ({ id, profile, name }: { id: number, profile: string, name: string }) => {
  const { setCurrentGroup, currentGroup } = useUser();
  const handleClick = () => {
    setCurrentGroup(id);
  };

  const isSelected = currentGroup === id;

  return (
    <Box
      sx={{
        ...containerStyle,
        backgroundColor: isSelected ? setColor('main') : 'transparent',
        color: isSelected ? '#fff' : '#000',
      }}
      onClick={handleClick}
    >
      <Box
        component="img"
        src={profile}
        alt={`${name}'s profile`}
        sx={profileStyle}
      />
      <Typography sx={{ ...nameStyle, color: isSelected ? '#fff' : '#000' }}>{name}</Typography>
    </Box>
  );
}

export default Group;

const containerStyle = {
  minWidth: '70px',
  height: '100px',
  margin: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
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
