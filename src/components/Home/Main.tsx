import { Box, CardMedia } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const Main = () => {
  const router = useRouter();
  const handleButton = () => {
    router.push('/menu');
  }
  return (
    <Box sx={boxStyle}>
      <CardMedia
        component="img"
        image={'/images/cameraButton.png'}
        title="profile"
        sx={cameraStyle}
        onClick={handleButton}
      />
    </Box>
  )
}

export default Main;

const boxStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const cameraStyle = {
  width: '200px',
  height: '200px',
}