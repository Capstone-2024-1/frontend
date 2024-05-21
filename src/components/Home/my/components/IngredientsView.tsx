import { useUser } from '@/hook/useUser'
import { setColor } from '@/utils/setColor'
import { Box, CardMedia } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getTempAllergy, getTempReligion, getTempVegetarian } from '@/utils/tempData'
import { getAllergy, getCategory, getReligion, getVegetarian } from '@/apis/ingredients'
import IngredientsList from '@/components/register/ingredient/IngredientsList'
import Header from './Header'
import IngredientsBox from '@/components/common/ingredients/IngredientsBox'
import { postGroupIngredients } from '@/apis/group'
import { getMyIngredients } from '@/apis/my'

interface Ingredient {
  "id": number;
  "englishName": string;
  "koreanName": string;
  "imageUrl": string;
};


const IngredientsView = ({list}:{list?: boolean}) => {
  const router = useRouter();
  const [ingredients, setIngredients] = useState<Ingredient[]>();
  const {currentGroup, user} = useUser();
  const handleBack = () => {
    router.push('/home');
  };
  useEffect(()=>{
    const fetchData = async() => {
      const data = await getMyIngredients(user.accessToken);
      if(data){
        setIngredients(data);
      }
    }
    fetchData();
  }, [currentGroup, user.accessToken]);

  return (
    <>
    <Header title={"My Ingredients"} handleBack={handleBack}/>
    
    <Box sx={container}>
      <IngredientsBox tag={'cannot eat'} ingredients={ingredients}/>
    </Box>
    </>
  )
}

export default IngredientsView;

const container = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    width: '100%',
    height: '100%',
    bgcolor: setColor('lightGrey') || 'grey',
    overflow: 'scroll',
};

