import { useUser } from '@/hook/useUser';
import { Box, CardMedia } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Profile = () => {
  //그룹 사진으로 변경
  const {user, setName, setImage} = useUser();
  const router = useRouter();
  const groupName = router.query.name;

  return (
    <Box sx={profileStyle}>
      <CardMedia
        component="img"
        image={'/images/groupBlack.png'}
        title="profile"
        sx={{
          width: '140px',
          height: '140px',
          margin: '10px',
          borderRadius: '50%',
        }}
      />
      <Box sx={nameStyle}>
        {groupName}
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
}