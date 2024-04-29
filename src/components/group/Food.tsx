import { Box } from '@mui/material'
import React from 'react'
import IngredientsBox from '../common/ingredients/IngredientsBox';

const Food = () => {
  return (
    <Box sx={containerStyle}>
      <IngredientsBox tag={'cannot eat'}/>
    </Box>
  )
}

export default Food;

const containerStyle = {
  width: '100%',
};

