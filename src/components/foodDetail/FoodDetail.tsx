import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Title from './Title';
import { setColor } from '@/utils/setColor';
import IngredientsBox from '../common/ingredients/IngredientsBox';
import SelectBox from './SelectBox';
import { useUser } from '@/hook/useUser';
import { getFoodFiltering } from '@/apis/ingredients';

interface Ingredient {
  "id": number;
  "englishName": string;
  "koreanName": string;
  "imageUrl": string;
};

const FoodDetail = () => {
  const router = useRouter();
  const {user,isExistedMenuList, canEatCategories, cannotEatCategories, setCanEatCategories, setCannotEatCategories} = useUser();
  const foodName = Array.isArray(router.query.name) ? router.query.name[0] : router.query.name;

  // const [ingredients, setIngredients] = useState<Ingredient[]>();
  const [caneats, setCaneats] = useState<Ingredient[]>(canEatCategories);
  const [cannoteats, setCannoteats] = useState<Ingredient[]>(cannotEatCategories);

  useEffect(()=>{
    const fetchData = async() => {
      const data = await getFoodFiltering(foodName ? foodName : "김치볶음밥", user.accessToken);
      if(data){
        console.log(data);
        setCaneats(data.canEatCategories);
        setCannoteats(data.cannotEatCategories);
        setCanEatCategories(data.canEatCategories);
        setCannotEatCategories(data.cannotEatCategories);
      }
    }
    if(!isExistedMenuList){
      fetchData();
    }
  }, [user.accessToken, foodName]);

  return (
    <Box sx={containerStyle}>
      <Title name = {foodName ? foodName : '김치찌개'}/>

      <IngredientsBox tag={'cannot eat'} ingredients={cannoteats}/>
      <IngredientsBox tag={'can eat'} ingredients={caneats}/>
      <SelectBox />
    </Box>
  )
}

export default FoodDetail;

const containerStyle = {
  width: '100%',
  height: '100%',
  bgcolor: setColor('lightGrey'),
  overflow: 'scroll',
}