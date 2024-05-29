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
  width: '99px',
  height: '9rem',

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
  fontSize: '0.8rem',
  fontStyle: 'normal',
  fontWeight: 'bold',
  lineHeight: 'normal',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
};