import Header from '@/components/common/Header'
import Progress from '@/components/common/Progress'
import { useUser } from '@/hook/useUser'
import { setColor } from '@/utils/setColor'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import IngredientsList from './IngredientsList'
import { getTempIngredientData } from '@/utils/tempData'

const Ingredient = () => {
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
      <IngredientsList data={getTempIngredientData}/>
    </Box>
    <Progress num={"2"} onClick={handleClick}/>
    </>
  )
}

export default Ingredient;

const container = {
    display: 'flex',
    padding: '2rem',
    width: '100%',
    height: '100%',
    bgcolor: setColor('lightGrey'),
}