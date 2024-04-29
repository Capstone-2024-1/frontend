import { Box } from '@mui/material';
import React from 'react';
import NavigationBar from './navigationBar/NavigationBar';
import { useUser } from '@/hook/useUser';
import Main from './Main';
import Group from './Group';
import My from './my/My';

const home = () => {
  const { navigationName } = useUser();

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
