import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import NavigationBar from './navigationBar/NavigationBar';
import { useUser } from '@/hook/useUser';
import Main from './Main';
import Group from './Group';
import My from './my/My';
import { getMyProfile } from '@/apis/my';

const home = () => {
  const { navigationName, user, setName, setImage } = useUser();

  useEffect(()=>{
    const fetchData = async () => {
      const data = await getMyProfile(user.accessToken);
      if(data){
        setName(data.nickName);
        setImage(data.profileImageUrl);
      };
    }
    fetchData();
  }, []);

  const renderContent = () => {
    switch (navigationName) {
      case 'camera':
        return <Main/>
      case 'group':
        return <Group/>
      case 'my':
        return <My/>
      default:
        return <Main/>
    }
  }

  return (
    <Box>
      <Box sx={{ width: '100%', height: 'calc(100vh - 90px)' }}>
        {renderContent()}
      </Box>
      <NavigationBar/>
    </Box>
  )
};

export default home;
