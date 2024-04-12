import { Box } from '@mui/material'
import React from 'react'

const MyButton = ({name}:{name: string}) => {
  return (
    <Box sx={buttonStyle}>
      {name}
    </Box>
  )
}

export default MyButton;

const buttonStyle = {
  bgcolor: 'white',
  width: '90%',
  height: '55px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '15px',
  fontFamily: 'Blinker',
  fontSize: '17px',
  fontWeight: '700',

  cursor: 'pointer',
};