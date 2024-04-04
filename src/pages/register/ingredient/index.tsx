import Header from '@/components/common/Header'
import Progress from '@/components/common/Progress'
import { useUser } from '@/hook/useUser'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const index = () => {
  const {user} = useUser();

  const router = useRouter();
  const type = Array.isArray(router.query.type) ? router.query.type[0] : router.query.type;

  const handleClick = () => {
    console.log(user.name);
  }
  return (
    <>
    <Header title={type || "Ingredient"}/>
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