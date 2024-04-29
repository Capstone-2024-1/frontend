import { Box } from '@mui/material'
import React from 'react'
import EatTag from '../common/ingredients/EatTag';
import IngredientCard from '../common/ingredients/IngredientCard';

const Food = () => {
  return (
    <Box sx={containerStyle}>
      <EatTag tag={'cannot eat'}/>
      <Box sx={ingredientStyle}>
        <IngredientCard name={'shrimp'} type={'seafood'}/>
        <IngredientCard name={'shrimp'} type={'seafood'}/>
        <IngredientCard name={'shrimp'} type={'seafood'}/>
        <IngredientCard name={'shrimp'} type={'seafood'}/>
      </Box>
    </Box>
  )
}

export default Food;

const containerStyle = {
  width: '100%',
  bgcolor: '#FFFFFF',
  padding: '10px',

};

const ingredientStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
}