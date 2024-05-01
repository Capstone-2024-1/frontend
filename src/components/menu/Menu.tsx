import { useUser } from '@/hook/useUser';
import MenuNavigationBar from '@/components/menu/MenuNavigationBar'
import { Box } from '@mui/material'
import React from 'react'
import Foods from './Foods';

const Menu = () => {
  const {menuSort} = useUser();
  const handleContent = () => {
    if(menuSort === 'can eat'){
      return <Foods sort={'can eat'}/>
    }else if(menuSort === 'ambiguous'){
      return <Foods sort={'ambiguous'}/>
    }else if(menuSort === 'cannot eat'){
      return <Foods sort={'cannot eat'}/>
    }
  }
  return (
    <Box>
      <MenuNavigationBar/>
      {handleContent()}
    </Box>
  )
}

export default Menu