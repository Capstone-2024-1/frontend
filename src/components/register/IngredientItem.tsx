import { useUser } from '@/hook/useUser';
import { setColor } from '@/utils/setColor';
import { Box } from '@mui/material'
import React, { useState } from 'react'

interface IngredientContainerProps {
  english: string;
  korean: string;
  children?: React.ReactNode;
  depth: number;
  open: boolean;
  setOpen: (value: boolean) => void;
  id: number;
}

const IngredientItem: React.FC<IngredientContainerProps> = ({ english, korean, children, depth, open, setOpen, id }) => {
  const {user} = useUser();
  const [check, setCheck] = useState<boolean>(false);
  const handleToggle = () => {
    console.log(open);
    setOpen(!open);
  }

  const handleCheck = () => {
    if(check){
      //체크 제거
      
    }else{

    }
    setCheck(!check);
  }

  const handleColor = () => {
    if(check)return setColor('main');
    else return setColor('grey');
  }

  const handleArrow = () => {
    if(open)return `url(/images/arrow-down.png)`;
    else return `url(/images/arrow-left.png)`;
  }

  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <Box sx={{display: 'flex', alignItems: 'center', paddingRight: '10px'}}>
      <Box sx={{width: '10px', height: '10px', bgcolor: handleColor(),marginRight: '10px', borderRadius: '10px'}} onClick={handleCheck}></Box>
        {english} ({korean}) 
      </Box>
      {
        (depth === 0 || depth === 1 && children) && 
        <Box sx={{
          backgroundImage: handleArrow(),
          width: '30px', height: '30px', backgroundPosition: 'center'}}
          onClick={handleToggle}/>
        }
        
      </Box>
  )
}

export default IngredientItem