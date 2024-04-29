import { setColor } from '@/utils/setColor';
import { Box, CardMedia } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import Member from './Member';
import { useRouter } from 'next/router';

const Group = () => {
  const router = useRouter();
  const params = useSearchParams();
  const groupName = params.get('name');

  const handleBack = () => {
    router.push('/home');
  }
  return (
    <Box sx={containerStyle}>
      <Box sx={backBoxStyle}>
        <CardMedia
          component="img"
          image={'/images/arrow-left.png'}
          title="profile"
          sx={backStyle}
          onClick={handleBack}
          />
      </Box>
      <Box sx={groupNameStyle}>
        {groupName}
      </Box>

      <Box sx={centerAlignBoxStyle}>
        <Box sx={memberBoxStyle}>
          <Member profile={'/images/myBlack.png'} name={'전영은'}/>
          <Member profile={'/images/myBlack.png'} name={'전영은'}/>
          <Member profile={'/images/myBlack.png'} name={'전영은'}/>
          <Member profile={'/images/myBlack.png'} name={'전영은'}/>
          <Member profile={'/images/myBlack.png'} name={'전영은'}/>
        </Box>
      </Box>
    </Box>
  )
}

export default Group;

const containerStyle = {
  bgcolor: setColor('lightGrey'),
  width: '100%',
  height: '100%',
};

const backBoxStyle = {
  width: '100%',
};

const backStyle = {
  width: '40px',
  height: '40px',
};

const groupNameStyle = {
  width: '100%',
  height: '50px',
  bgcolor: 'white',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Inter',
  fontSize: '1.875rem',
  fontWeight: 'bold',
  paddingLeft: '1rem',
  marginBottom: '2rem',
};

const memberBoxStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  width: '85%',
};

const centerAlignBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}