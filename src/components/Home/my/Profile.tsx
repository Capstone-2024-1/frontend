import { useUser } from '@/hook/useUser';
import { getProfile } from '@/utils/tempData';
import { Box, CardMedia } from '@mui/material'
import React, { useEffect } from 'react'

const Profile = ({handleNicknameOpen}: {handleNicknameOpen: () => void}) => {
  const {user, setName, setImage} = useUser();

  useEffect(() => {
    const fetchData = async () => {
      if(user.image === ""){
        const profile = await getProfile;
        setName(profile.name);
        setImage(profile.image);
      }
    };
    fetchData();
  }, [setName]);

  return (
    <Box sx={profileStyle}>
      <CardMedia
        component="img"
        image={user.image}
        title="profile"
        sx={{
          width: '140px',
          height: '140px',
          margin: '10px',
          borderRadius: '50%',
        }}
      />
      <Box sx={nameStyle} onClick={handleNicknameOpen}>
        {user.name}
      </Box>
    </Box>
  )
}

export default Profile;

const profileStyle = {
  width: '100%',
  height: '150px',
  margin: '10px',
  display: 'flex',
  justifyContent: 'space-evenly',
};

const nameStyle = {
  fontFamily: 'Pretendard',
  height: '100%',
  width: '30%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '20px',
  whiteSpace: 'normal',
  wordBreak: 'break-all',
  cursor: 'pointer',
}