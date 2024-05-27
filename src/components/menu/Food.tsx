import { useUser } from '@/hook/useUser';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

interface FoodProp {
  food: {
    koreanName: string;
    englishName: string;
    isFood: boolean;
    isAmbiguous: boolean;
    canEatCategories: Ingredient[];
    cannotEatCategories: Ingredient[];
    canEat: boolean;
  };
}

interface Ingredient {
  id: number;
  englishName: string;
  koreanName: string;
  imageUrl: string;
}

const Food = ({ food }: FoodProp) => {
  const router = useRouter();
  const {setCanEatCategories, setCannotEatCategories, setIsExistedMenuList} = useUser();
  const handleClick = () => {
    setIsExistedMenuList(true);
    setCanEatCategories(food.canEatCategories);
    setCannotEatCategories(food.cannotEatCategories);
    router.push(`/menu/detail?name=${food.koreanName}`);
  }
  return (
    <Box sx={foodContainerStyle} onClick = {handleClick}>
      <Typography variant="h6">{food.koreanName}</Typography>
      <Typography variant="body2">{food.englishName}</Typography>
    </Box>
  );
};

export default Food;

const foodContainerStyle = {
  padding: '1rem',
  borderBottom: '1px solid #ccc',
  cursor: 'pointer',
};
