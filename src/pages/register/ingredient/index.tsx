import Header from '@/components/common/Header'
import Progress from '@/components/common/Progress'
import { Box } from '@mui/material'
import React from 'react'

const index = () => {
  const handleClick = () => {
    console.log('1');
  }
  return (
    <>
    <Header title={'Ingredient'}/>
    <Box sx={container}>

    </Box>
    <Progress num={"2"} onClick={handleClick}/>
    </>
  )
}

export default index;

const container = {
    display: 'flex',
    margin: '2rem',
}