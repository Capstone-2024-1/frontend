import React from 'react'
import Button from './Button'
import { Box } from '@mui/material'

const Buttons = () => {
  return (
    <Box sx={boxStyle}>
      <Button title={'Participate the Team'}/>
      <Button title={'Create the Team'}/>
    </Box>
  )
}

export default Buttons;

const boxStyle = {
  width: '200px',
  position: 'absolute',
  bottom: 165,
  right: '5%',
  '@media (min-width: 560px)': {
    right: 'calc(50% - 230px)',
  },
  bgcolor: 'white',
  borderRadius: '20px',
}