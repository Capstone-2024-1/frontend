import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const Main = () => {
  const router = useRouter();
  const handleButton = () => {
    router.push('/menu');
  }
  return (
    <Box onClick={handleButton} sx={boxStyle}></Box>
  )
}

export default Main;

const boxStyle = {
  width: '100px',
  height: '100px',
  bgcolor: 'black',
}