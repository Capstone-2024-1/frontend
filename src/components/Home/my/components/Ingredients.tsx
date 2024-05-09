import { useUser } from '@/hook/useUser'
import { setColor } from '@/utils/setColor'
import { Box, CardMedia } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getTempAllergy, getTempReligion, getTempVegetarian } from '@/utils/tempData'
import { getAllergy, getCategory, getReligion, getVegetarian } from '@/apis/ingredients'
import IngredientsList from '@/components/register/ingredient/IngredientsList'
import Header from './Header'

interface Category {
  id: number;
  englishName: string;
  koreanName: string;
  flatChildIds: number[];
  childCategories: Category[];
}

const Ingredient = ({list}:{list?: boolean}) => {
  const {user} = useUser();
  const [data, setData] = useState<Category[]>([]);
  const [step, setStep] = useState<number>(1);
  const router = useRouter();
  const type = Array.isArray(router.query.type) ? router.query.type[0] : router.query.type;

  const handleBack = () => {
    router.push('/home');
  };

  const handleIngredient = () => {
    if(step == 1) return getVegetarian();
    else if(step == 2) return getReligion();
    else if(step == 3) return getAllergy();
    else return getCategory();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await handleIngredient();
      if(response !==undefined){
        setData(response);
      }else{
        if(step == 1)setData(getTempVegetarian);
        else if(step == 2)setData(getTempReligion);
        else if(step == 3)setData(getTempAllergy);
      }
    };
    fetchData();
  },[step]);

  return (
    <>
    <Header title={type || "Ingredient"} handleBack={handleBack}/>
    
    <Box sx={container}>
      <IngredientsList data={data !== null ? data : getTempVegetarian}/>
    </Box>
    </>
  )
}

export default Ingredient;

const container = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    width: '100%',
    height: '100%',
    bgcolor: setColor('lightGrey') || 'grey',
};

