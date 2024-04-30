import { setColor } from '@/utils/setColor';
import { Box } from '@mui/material'
import React from 'react'

const Button = ({title}: {title: string}) => {
  return (
    <Box sx={boxStyle}>
      {title}
    </Box>
  )
}

export default Button;

const boxStyle = {
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '20px',
  paddingTop: '25px',
  paddingBottom: '25px',
  borderRadius: '20px',
  ':hover':{
    bgcolor: setColor("sub"),
    color: 'white',
  }
}