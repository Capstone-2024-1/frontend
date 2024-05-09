import { setColor } from '@/utils/setColor';
import { Box, CardMedia } from '@mui/material'
import React from 'react'

interface Ingredient {
  "id": number;
  "englishName": string;
  "koreanName": string;
  "imageUrl": string;
};
interface IngredientCardProps {
  ingredient: Ingredient;
}

const IngredientCard = ({ingredient}: IngredientCardProps) => {
  // const handleType = () => {
  //   if(type === 'seafood')return '/images/seafood.png';
  //   else if(type === 'meal')return '/images/meal.png';
  //   else return '/images/seafood.png';
  // }

  return (
    <Box sx={cardStyle}>
      <Box sx={typeStyle}>
        <CardMedia
            component="img"
            image={ingredient.imageUrl!==""?ingredient.imageUrl : '/images/seafood.png'}
            title="type"
            sx={imageStyle}
            />
      </Box>
      <Box sx={nameStyle}>
        <Box>
        {ingredient.englishName}
        </Box>
        <Box>
        {ingredient.koreanName}
        </Box>
      </Box>

    </Box>
  )
}

export default IngredientCard;

const cardStyle = {
  width: '33.3%',
  height: '8.125rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

};

const typeStyle = {
  marginTop: '10px',
  marginBottom: '10px',
  
  
};

const imageStyle = {
  width: '60px',
  height: '60px',
  bgcolor: setColor('lightGrey'),
  borderRadius: '30px',
}

const nameStyle = {
  fontFamily: 'Inter',
  fontSize: '1.1rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
};