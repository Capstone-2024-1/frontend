import Header from '@/components/common/Header'
import Progress from '@/components/common/Progress'
import { useUser } from '@/hook/useUser'
import { setColor } from '@/utils/setColor'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import IngredientsList from './IngredientsList'
import { getTempAllergy, getTempReligion, getTempVegetarian } from '@/utils/tempData'
import { getAllergy, getCategory, getReligion, getVegetarian } from '@/apis/ingredients'
import { postRegister } from '@/apis/login'

interface Category {
  id: number;
  englishName: string;
  koreanName: string;
  flatChildIds: number[];
  childCategories: Category[];
}

const Ingredient = ({list}:{list?: boolean}) => {
  const {user, setAccessToken} = useUser();
  const [data, setData] = useState<Category[]>([]);
  const [step, setStep] = useState<number>(1);
  const router = useRouter();
  const type = Array.isArray(router.query.type) ? router.query.type[0] : router.query.type;

  const handleClick = async () => {
    if(step<4){
      if(step==1){
        router.push('/register/ingredient?type=religions');
      }else if(step==2){
        router.push('/register/ingredient?type=allergy');
      }else if(step==3){
        router.push('/register/ingredient?type=Category');
      }else if(step==4){
        router.push('/register/ingredient?type=categories')
      };
      setStep(step+1);
    }
    else {
      let token = user.accessToken;
      if (token === "" || !token) {
        token = localStorage.getItem('accessToken') || "";
        setAccessToken(token);
      }
      const response = await postRegister(user.name, user.banIngredient, token);
      console.log(response);
      router.push('/home');
    }
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
    <Header title={type || "Ingredient"}/>
    <Box sx={container}>
      <IngredientsList data={data !== null ? data : getTempVegetarian}/>
    </Box>
    <Progress num={list? 0 : step} onClick={handleClick}/>
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
}