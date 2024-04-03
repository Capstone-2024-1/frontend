import { setColor } from '@/utils/setColor';
import { Box } from '@mui/material'
import React from 'react'

const Header = ({title}:{title: string}) => {
  return (
    <Box sx={headerStyle}>{title}</Box>
  )
}

export default Header;

const headerStyle = {
  width: '100%',
  height: '3.75rem',
  bgcolor: setColor('main'),
  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
  padding: '0.5rem',

  font: 'Inter',
  color: 'white',
  fontSize: '30px',
  fontWeight: 'bold',

  display: 'flex',
  alignItems: 'center',
};