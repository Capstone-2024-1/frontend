import React, { useState } from 'react'
import IngredientContainer from './IngredientContainer';
import { Box } from '@mui/material';

interface Category {
  id: number;
  englishName: string;
  koreanName: string;
  childCategories: Category[];
}

interface IngredientsListProps{
  data: Category[];
}

const IngredientsList: React.FC<IngredientsListProps> = ({data}) => {

  const renderCategory = (category: Category, depth: number): JSX.Element => (
  <IngredientContainer 
  english={category.englishName || "ingredient"} korean={category.koreanName || "재료"} depth={depth}>
    {category.childCategories.length > 0 &&
      <>
      {category.childCategories.map(childCategory => renderCategory(childCategory, depth + 1))}
      </>
    }
  </IngredientContainer>
  );
  return (
    data.map(category => renderCategory(category, 0))
  )
}

export default IngredientsList;