import { setColor } from '@/utils/setColor';
import { Box, CardMedia } from '@mui/material';
import React, { useState } from 'react'

const NavigationButton = ({name, active, onClick}:{name: string, active: boolean, onClick: () => void}) => {
  const [click, setClick] = useState<string>('camera');
  const handleClick = () => {
    onClick();
    setClick(name);
    //클릭했을 때 화면 내용 바뀌는 내용 넣기

  };

  const handleButtonImage = () => {
    if(active){
      return `/images/${name}Black.png`;
    }else{
      return `/images/${name}Grey.png`;
    }
  };

  return (
    <Box sx={buttonStyle} onClick={handleClick}>
      <CardMedia
      component="img"
      image={handleButtonImage()}
      title="slogan"
      sx={{
        width: '25px',
        margin: '5px'
      }}
    />
      <Box>
        {name}
      </Box>
    </Box>
  )
}

export default NavigationButton;

const buttonStyle = {
  color: setColor('middleGrey'),
  ':hover':{
    color: 'black',
  },
  fontWeight: 'bold',
  font: 'pretendard',

  cursor: 'pointer',
}