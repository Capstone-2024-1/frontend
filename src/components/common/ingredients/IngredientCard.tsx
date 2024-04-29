import { setColor } from '@/utils/setColor';
import { Box, CardMedia } from '@mui/material'
import React from 'react'

const IngredientCard = ({name, type}: {name: string, type: string}) => {
  const handleType = () => {
    if(type === 'seafood')return '/images/seafood.png';
    else if(type === 'meal')return '/images/meal.png';
    else return '/images/seafood.png';
  }

  return (
    <Box sx={cardStyle}>
      <Box sx={typeStyle}>
        <CardMedia
            component="img"
            image={handleType()}
            title="profile"
            sx={imageStyle}
            />
      </Box>
      <Box sx={nameStyle}>
        {name}
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
  fontSize: '1.375rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
};