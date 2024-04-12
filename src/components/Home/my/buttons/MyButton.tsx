import { setColor } from '@/utils/setColor'
import { Box } from '@mui/material'
import { useRouter } from 'next/router';
import React from 'react'

const MyButton = ({name}:{name: string}) => {
  const router = useRouter();
  const handleClick = () => {
    if(name === "My Ingredient List"){
      router.push('/my/list');
    }else if(name === "modify - Vegeterianism"){
      router.push('/my/modify?type=vegeterianism');
    }else if(name === "modify - Allergy"){
      router.push('/my/modify?type=allergy');
    }else if(name === "modify - religion"){
      router.push('/my/modify?type=religion');
    }else if(name === "Contact To Us"){

    }else if(name === "Log Out"){

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
  width: '90%',
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