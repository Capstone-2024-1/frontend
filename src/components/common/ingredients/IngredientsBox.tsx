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

interface IngredientsBoxProps {
  tag: string;
  ingredients?: Ingredient[]; // 여기서 '?'를 사용하여 ingredients를 선택적으로 만듭니다.
}

const IngredientsBox = ({tag, ingredients = []}:IngredientsBoxProps) => {
  return (
    <Box sx={containerStyle}>
      <Tag tag={tag}/>
      <Box sx={ingredientStyle}>
        {ingredients ? ingredients.map(ingredient => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} />
          )) : <p>No ingredients found</p>}
      </Box>
    </Box>
  )
}

export default IngredientsBox;

const ingredientStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  // justifyContent: 'flex-start',
  justifyContent: 'space-evenly',
};

const containerStyle = {
  bgcolor: '#FFFFFF',
  marginBottom: '30px',
  padding: '10px',
}