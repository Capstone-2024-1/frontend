import { Box, CardMedia } from '@mui/material'
import React, { useState } from 'react'
import NavigationBar from '../Home/navigationBar/NavigationBar';

const Food = ({name}:{name: string}) => {
  const [num, setNum] = useState<number>(0);
  
  const handlePlus = () => {
    setNum(num + 1);
  }
  const handleMinus = () => {
    if(num>0)setNum(num - 1);
  }

  return (
    <Box sx={boxStyle}>
      <Box sx={titleStyle}>
        {name}
      </Box>
      <Box sx={{...addBoxStyle, marginTop: '30px'}}>
        <CardMedia
          component="img"
          image={'/images/addLeft.png'}
          title="profile"
          sx={addImageStyle}
          onClick={handleMinus}
        />
        <CardMedia
          component="img"
          image={'/images/addRight.png'}
          title="profile"
          sx={addImageStyle}
          onClick={handlePlus}
          />
      </Box>
      <Box sx={{...numStyle, marginTop: '30px'}}>
        {num}
      </Box>
      <NavigationBar/>
    </Box>
  )
}

export default Food;

const boxStyle = {
  width: '100%',
  height: '6.2rem',
  boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.05)',
  display: 'flex',
  flexDirection: 'row',
  bgcolor: 'white',
  position: 'relative',  // 이 설정이 중요
};

const titleStyle = {
  width: '100%',
  fontFamily: 'Jua',
  fontSize: '1.75rem',
  fontStyle: 'normal',
  fontWeight: 'bold',
  lineHeight: 'normal',
  padding: '15px',
};

const addBoxStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '20px',
};

const addImageStyle = {
  width: '70px',
  height: '50px',
  cursor: 'pointer',
};

const numStyle = {
  position: 'absolute', 
  top: 0, 
  right: 'calc(50% - 170px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '30px',
  height: '50px',
  zIndex: 2,
  '@media (max-width: 600px)': {
    right: '75px',
  },
};