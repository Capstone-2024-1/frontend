import Header from '@/components/common/Header'
import Progress from '@/components/common/Progress'
import { useUser } from '@/hook/useUser'
import { Box } from '@mui/material'
import React from 'react'

const index = () => {
  const {user} = useUser();
  const handleClick = () => {
    console.log(user.name);
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