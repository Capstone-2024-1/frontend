import React from 'react'
import Button from './Button'
import { Box } from '@mui/material'

const Buttons = ({handleParticipate, handleCreate}: {handleParticipate: ()=>void, handleCreate:()=>void}) => {
  return (
    <Box sx={boxStyle}>
      <Button title={'Participate the Team'} onClick={handleParticipate}/>
      <Button title={'Create the Team'} onClick={handleCreate}/>
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
  zIndex: 3,
}