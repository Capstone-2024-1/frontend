import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import NavigationBar from './navigationBar/NavigationBar';
import { useUser } from '@/hook/useUser';
import Main from './Main';
import Group from './Group';
import My from './my/My';
import { getMyProfile } from '@/apis/my';

const Home = () => {
  const { navigationName, user, setName, setImage, setAccessToken } = useUser();

  useEffect(() => {
    if (user.accessToken === "") {
      const token = localStorage.getItem('accessToken');
      if (token) {
        setAccessToken(token);
      }
    }

    const fetchData = async () => {
      const token = user.accessToken || localStorage.getItem('accessToken');
      if(token){
        setAccessToken(token);
      }
      if (token) {
        const data = await getMyProfile(token);
        if (data) {
          setName(data.nickName);
          setImage(data.profileImageUrl);
        }
      }
    }
    fetchData();
  }, [user.accessToken, setAccessToken, setName, setImage]);

  const renderContent = () => {
    switch (navigationName) {
      case 'camera':
        return <Main />;
      case 'group':
        return <Group />;
      case 'my':
        return <My />;
      default:
        return <Main />;
    }
  }

  return (
    <Box>
      <Box sx={{ width: '100%', height: 'calc(100vh - 90px)' }}>
        {renderContent()}
      </Box>
      <NavigationBar />
    </Box>
  )
};

export default Home;
