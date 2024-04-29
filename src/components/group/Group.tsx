import { setColor } from '@/utils/setColor';
import { Box, CardMedia } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import Member from './Member';
import { useRouter } from 'next/router';
import NavigationBar from './navigationBar/NavigationBar';
import { useUser } from '@/hook/useUser';
import Home from './Home';
import Food from './Food';
import Setting from './Setting';

const Group = () => {
  const {navigationGroupName} = useUser();
  const router = useRouter();
  const params = useSearchParams();
  const groupName = params.get('name');

  const renderContent = () => {
    switch (navigationGroupName) {
      case 'home':
        return <Home/>
      case 'food':
        return <Food/>
      case 'setting':
        return <Setting/>
      default:
        return <Home/>
    }
  }
  const handleBack = () => {
    router.push('/home');
  }
  return (
    <Box sx={containerStyle}>
      <Box sx={contentStyle}>
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

        {renderContent()}

      </Box>
      <NavigationBar/>
    </Box>
  )
}

export default Group;

const containerStyle = {
  width: '100%',
  height: '100%',
};

const backBoxStyle = {
  width: '100%',
  padding: '4px',
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

// const memberBoxStyle = {
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   justifyContent: 'flex-start',
//   width: '85%',
// };

// const centerAlignBoxStyle = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// };

const contentStyle = {
  bgcolor: setColor('lightGrey'),
  width: '100%',
  height: 'calc(100vh - 90px)'
}