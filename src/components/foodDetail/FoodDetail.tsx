import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'
import Title from './Title';
import { setColor } from '@/utils/setColor';
import IngredientContainer from '../register/ingredient/IngredientContainer';
import IngredientsBox from '../common/ingredients/IngredientsBox';

const FoodDetail = () => {
  const router = useRouter();
  const foodName = Array.isArray(router.query.name) ? router.query.name[0] : router.query.name;
  return (
    <Box sx={containerStyle}>
      <Title name = {foodName ? foodName : '김치찌개'}/>

      <IngredientsBox tag={'cannot eat'}/>
      <IngredientsBox tag={'can eat'}/>
    </Box>
  )
}

export default FoodDetail;

const containerStyle = {
  width: '100%',
  height: '100%',
  bgcolor: setColor('lightGrey'),
}