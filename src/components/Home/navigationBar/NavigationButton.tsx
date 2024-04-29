import { useUser } from '@/hook/useUser';
import { setColor } from '@/utils/setColor';
import { Box, CardMedia } from '@mui/material';
import React from 'react'

const NavigationButton = ({name, active}:{name: string, active: boolean}) => {
  const { setNavigationName } = useUser();
  const handleClick = () => {
    setNavigationName(name);
  };

  const handleButtonImage = () => {
    if(active){
      return `/images/${name}Black.png`;
    }else{
      return `/images/${name}Grey.png`;
    }
  };

  return (
    <Box sx={buttonStyle(active)} onClick={handleClick}>
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

const buttonStyle = (active: boolean) => ({
  color: active ? 'black' : setColor('middleGrey'),
  ':hover':{
    color: 'black',
  },
  fontWeight: 'bold',
  font: 'pretendard',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  cursor: 'pointer',
});