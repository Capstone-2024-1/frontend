import EatTag from '@/components/common/ingredients/EatTag';
import { Box } from '@mui/material'
import React from 'react'

const MenuNavigationBar = () => {
  return (
    <Box sx={containerStyle}>
      <EatTag tag={'can eat'}/>
      <EatTag tag={'ambiguous'}/>
      <EatTag tag={'cannot eat'}/>
    </Box>

  )
}

export default MenuNavigationBar;

const containerStyle = {
  width: '100%',
  height: '90px',
  
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
  borderBottom: '1px solid #D9D9D9',
  padding: '10px',
}