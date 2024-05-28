import { Box } from '@mui/material';
import React from 'react';
import Food from './Food';
import { setColor } from '@/utils/setColor';
import { useRouter } from 'next/router';
import { useUser } from '@/hook/useUser';

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

const Foods = ({ sort }: { sort: string }) => {
  const router = useRouter();
  const { canEatList, cannotEatList, ambiguousList } = useUser();

  const handleClick = () => {
    router.push('/order');
  };

  const renderFoodList = (list: FoodProp[]) => {
    return list.map((food, index) => <Food key={index} food={food} />);
  };

  return (
    <Box sx={containerStyle}>
      {sort === 'can eat' && renderFoodList(canEatList)}
      {sort === 'ambiguous' && renderFoodList(ambiguousList)}
      {sort === 'cannot eat' && renderFoodList(cannotEatList)}
      <Box
        sx={{
          ...boxStyle,
          right: '15%',
          '@media (min-width: 560px)': {
            right: 'calc(50% - 200px)',
          },
        }}
        onClick={handleClick}
      >
        Go To Order List
      </Box>
    </Box>
  );
};

export default Foods;

const boxStyle = {
  width: '70%',
  maxWidth: '400px',
  height: '3.25rem',
  position: 'fixed',
  '@media (max-width: 560px)': {
    left: '15%',
  },
  bottom: '40px',
  bgcolor: setColor('main'),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1.6rem',
  borderRadius: '0.625rem',
  cursor: 'pointer',
  zIndex: 3,
};

const containerStyle = {
  overflow: 'scroll',
  color: 'black',
};