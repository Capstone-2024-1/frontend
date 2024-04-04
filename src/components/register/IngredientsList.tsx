import React from 'react'

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
    <li key={category.id}>
      {category.englishName} ({category.koreanName})
    
    {category.childCategories.length > 0 && (
      <ul>{category.childCategories.map(renderCategory)}</ul>
    )}
  </li>
  );
  return (
    data.map((renderCategory))
  )
}

export default IngredientsList