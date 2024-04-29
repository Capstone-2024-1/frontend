import { setColor } from '@/utils/setColor'
import { Box } from '@mui/material'
import { useRouter } from 'next/router';
import React from 'react'

const MyButton = ({name, click}:{name: string, click?:()=>void}) => {
  const router = useRouter();
  const handleClick = () => {
    if(name === "My Ingredient List"){
      router.push('/my/list');
    }else if(name === "Leave the Group"){
      if(click){
        click();
      }
    }else if(name === "Remove the Member"){
      if(click){
        click();
      }
    }
  }
  return (
    <Box sx={buttonStyle} onClick = {handleClick}>
      {name}
    </Box>
  )
}

export default MyButton;

const buttonStyle = {
  bgcolor: 'white',
  width: '97%',
  height: '55px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '15px',
  fontFamily: 'Blinker',
  fontSize: '17px',
  fontWeight: '700',

  cursor: 'pointer',
  ':hover':{
    bgcolor: setColor("sub"),
    color: 'white',
  }
};