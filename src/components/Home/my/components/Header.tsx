import { setColor } from '@/utils/setColor';
import { Box, CardMedia } from '@mui/material'
import React from 'react'

const Header = ({title, handleBack}:{title: string, handleBack:()=>void}) => {
  return (
    <Box sx={headerStyle}>
      <CardMedia
        component="img"
          image={'/images/arrow-left.png'}
          title="profile"
          sx={backStyle}
          onClick={handleBack}
      />
      {title}
    </Box>
  )
}

export default Header;

const headerStyle = {
  width: '100%',
  height: '3.75rem',
  bgcolor: setColor('main'),
  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
  padding: '0.8rem',

  font: 'Inter',
  color: 'white',
  fontSize: '30px',
  fontWeight: 'bold',

  display: 'flex',
  alignItems: 'center',
};

const backStyle = {
  width: '40px',
  height: '40px',
};