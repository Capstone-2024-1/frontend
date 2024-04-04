import React from 'react'
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
  const renderCategory = (category: Category) => (
  <IngredientContainer 
  english={category.englishName || "ingredient"} korean={category.koreanName || "재료"}>
    {category.childCategories.length > 0 &&
      <>
      {category.childCategories.map(renderCategory)}
      </>
    }
  </IngredientContainer>
  );
  return (
    data.map((renderCategory))
  )
}

export default IngredientsList