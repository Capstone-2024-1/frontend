import { Box } from '@mui/material'
import React from 'react'
import EatTag from './EatTag'
import IngredientCard from './IngredientCard'

const IngredientsBox = ({tag}:{tag: string}) => {
  return (
    <Box sx={containerStyle}>
      <EatTag tag={tag}/>
      <Box sx={ingredientStyle}>
        <IngredientCard name={'shrimp'} type={'seafood'}/>
        <IngredientCard name={'shrimp'} type={'seafood'}/>
        <IngredientCard name={'shrimp'} type={'seafood'}/>
        <IngredientCard name={'shrimp'} type={'seafood'}/>
      </Box>
    </Box>
  )
}

export default IngredientsBox;

const ingredientStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
};

const containerStyle = {
  bgcolor: '#FFFFFF',
  marginBottom: '30px',
  padding: '10px',
}