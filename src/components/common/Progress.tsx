import { Box } from '@mui/material'
import React from 'react'

const Progress = ({num, onClick} : {num: string, onClick: ()=>void}) => {
  return (
    <Box sx={{
      backgroundImage: `url(/images/progress${num}.png)`,
      width: '105px', height: '103px',
      position: 'fixed',
      bottom: '5%',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 3}}
      onClick={onClick}/>
  )
}

export default Progress;