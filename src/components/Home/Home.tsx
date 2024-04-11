import { Box } from '@mui/material';
import React from 'react';
import NavigationBar from '../common/navigationBar/NavigationBar';
import { useUser } from '@/hook/useUser';
import Main from './Main';
import Group from './Group';
import My from './My';

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
      <Box style={{ backgroundColor: 'yellow', }}>
        {renderContent()}
      </Box>
      <NavigationBar/>
    </Box>
  )
};

export default home;
