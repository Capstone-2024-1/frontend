import Header from '@/components/common/Header'
import Progress from '@/components/common/Progress'
import { useUser } from '@/hook/useUser'
import { setColor } from '@/utils/setColor'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import IngredientsList from './IngredientsList'
import { getTempIngredientData, getTempIngredientData2 } from '@/utils/tempData'

const Ingredient = () => {
  const {user} = useUser();
  const [step, setStep] = useState<number>(2);
  const router = useRouter();
  const type = Array.isArray(router.query.type) ? router.query.type[0] : router.query.type;

  const handleClick = () => {
    console.log(user.name);
    if(step<4){
      setStep(step+1);
    }
    else {
      router.push('/register/nickname');
    }
  };

  const handleIngredient = () => {
    if(step == 2) return getTempIngredientData;
    else if(step == 3) return getTempIngredientData2;
    else return getTempIngredientData;
  };
  return (
    <>
    <Header title={type || "Ingredient"}/>
    <Box sx={container}>
      <IngredientsList data={handleIngredient()}/>
    </Box>
    <Progress num={step} onClick={handleClick}/>
    </>
  )
}

export default Ingredient;

const container = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    width: '100%',
    height: '100%',
    bgcolor: setColor('lightGrey') || 'grey',
}