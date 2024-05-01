import { setColor } from '@/utils/setColor';
import { Box } from '@mui/material';
import React, { useState } from 'react'

const SelectBox = () => {
  const [click, setClick] = useState<boolean>(false);
  const handleClick = () => {
    setClick(!click);
  }
  return (
    <Box>
      
      <Box>
      {
        !click &&
        <Box sx={boxStyle} onClick={handleClick}>
        SELECT
        </Box>
      }
      {
          click &&
          <Box sx={boxStyle} onClick={handleClick}>
        ADD
        </Box>
      }
      
      </Box>
      
    </Box>
  )
}

export default SelectBox;

const boxStyle = {
  width: '50%',
  height: '3.25rem',
  position: 'fixed',
  left: '25%',
  bottom: '30px',
  bgcolor: setColor('main'),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1.6rem',
  borderRadius: '0.625rem',
  
};