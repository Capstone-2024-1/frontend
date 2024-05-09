import { Box } from '@mui/material'
import React from 'react'
import Tag from './Tag'
import IngredientCard from './IngredientCard'

interface Ingredient {
  "id": number;
  "englishName": string;
  "koreanName": string;
  "imageUrl": string;
};

const IngredientsBox = ({tag, ingredients}:{tag: string, ingredients: Ingredient[]|undefined}) => {
  return (
    <Box sx={containerStyle}>
      <Tag tag={tag}/>
      <Box sx={ingredientStyle}>
        {ingredients ? ingredients.map(ingredient => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} />
          )) : <p>No ingredients found</p>}
        {/* <IngredientCard name={'shrimp'} type={'seafood'}/>
        <IngredientCard name={'shrimp'} type={'seafood'}/>
        <IngredientCard name={'shrimp'} type={'seafood'}/>
        <IngredientCard name={'shrimp'} type={'seafood'}/> */}
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