import { setColor } from '@/utils/setColor';
import { Box } from '@mui/material'
import { useRouter } from 'next/router';
import React from 'react'

interface Ingredient {
  id: number;
  englishName: string;
  koreanName: string;
  imageUrl: string;
}

interface FoodProp {
  koreanName: string;
  englishName: string;
  isFood: boolean;
  isAmbiguous: boolean;
  canEatCategories: Ingredient[];
  cannotEatCategories: Ingredient[];
  canEat: boolean;
}

const Food = ({food}:{food: FoodProp}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/menu/detail?name=${name}`)
  }
  return (
    <Box sx={containerStyle} onClick = {handleClick}>
      {food.koreanName}
    </Box>
  )
}

export default Food;

const containerStyle = {
  width: '100%',
  height: '70px',
  paddingLeft: '3%',
  fontSize: '1.5rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',

  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #D9D9D9',
  cursor: 'pointer',
  ':hover':{
    bgcolor: setColor("main"),
    color: 'white',
  }
}