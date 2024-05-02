import { setColor } from '@/utils/setColor';
import { Box } from '@mui/material'
import React from 'react'

const Cannot = () => {
  return (
    <Box sx={boxStyle}>
      <Box sx={titleStyle}>
        Cannot Eat
      </Box>
      <Box sx={listStyle}>
        <Box sx={ingredientStyle}>
          고구마구마
        </Box>
        <Box sx={ingredientStyle}>
          호박고구마
        </Box>
      </Box>
    </Box>
  )
}

export default Cannot;

const boxStyle = {
  marginTop: '50px',
  width: '100%',
  // bgcolor: '#FFFFFF',
  bgcolor: setColor('lightGrey'),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const titleStyle = {
  width: '50%',
  height: '50px',
  bgcolor: setColor('main'),
  color: 'white',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '30px',
  fontWeight: 'bold',
  borderRadius: '30px',
};

const listStyle = {
  width: '80%',
  bgcolor: 'white',
  borderRadius: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '10px',
  padding: '30px',
  gap: '10px',
};

const ingredientStyle = {
  fontWeight: 'bold',
  fontSize: '20px',
}