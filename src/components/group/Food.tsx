import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import IngredientsBox from '../common/ingredients/IngredientsBox';
import { useUser } from '@/hook/useUser';
import { postGroupIngredients } from '@/apis/group';

interface Ingredient {
  "id": number;
  "englishName": string;
  "koreanName": string;
  "imageUrl": string;
};

const Food = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>();
  const {currentGroup, user} = useUser();
  useEffect(()=>{
    const fetchData = async() => {
      const data = await postGroupIngredients(currentGroup, user.accessToken);
      if(data){
        setIngredients(data);
      }
    }
    fetchData();
  }, [currentGroup, user.accessToken]);
  return (
    <Box sx={containerStyle}>
      <IngredientsBox tag={'cannot eat'} ingredients={ingredients}/>
    </Box>
  )
}

export default Food;

const containerStyle = {
  width: '100%',
  height: 'calc( 100% - 130px )',
  overflow: 'scroll',
};

