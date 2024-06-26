import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Title from './Title';
import { setColor } from '@/utils/setColor';
import IngredientsBox from '../common/ingredients/IngredientsBox';
import SelectBox from './SelectBox';
import { useUser } from '@/hook/useUser';
import { getFoodFiltering, getFoodGenerating } from '@/apis/ingredients';

interface Ingredient {
  id: number;
  englishName: string;
  koreanName: string;
  imageUrl: string;
  isFood?: boolean | null;
};

const FoodDetail = () => {
  const router = useRouter();
  const { user, setAccessToken, isExistedMenuList, canEatCategories, cannotEatCategories, setCanEatCategories, setCannotEatCategories, menuSort, } = useUser();
  const foodName = Array.isArray(router.query.name) ? router.query.name[0] : router.query.name;

  const [caneats, setCaneats] = useState<Ingredient[]>(canEatCategories);
  const [cannoteats, setCannoteats] = useState<Ingredient[]>(cannotEatCategories);
  const [loading, setLoading] = useState<boolean>(true);
  const [english, setEnglish] = useState<string>('');
  const [isFood, setIsFood] = useState<boolean>(true);

  useEffect(() => {
    const token = user.accessToken || localStorage.getItem('accessToken');
    if (user.accessToken ==="" && token) {
      setAccessToken(token);
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getFoodFiltering(foodName ? foodName : "김치볶음밥", token as string);
        if (data) {
          if(data.isFood === null){
            setIsFood(false);
          }else{
            setCaneats(data.canEatCategories);
            setCannoteats(data.cannotEatCategories);
            setCanEatCategories(data.canEatCategories);
            setCannotEatCategories(data.cannotEatCategories);
            setEnglish(data.englishName);
          }
          
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    const fetchDataAmbiguous = async () => {
      setLoading(true);
      try {
        const data = await getFoodGenerating(foodName ? foodName : "김치볶음밥", token as string);
        if (data) {
          setCaneats(data.canEatCategories);
          setCannoteats(data.cannotEatCategories);
          setCanEatCategories(data.canEatCategories);
          setCannotEatCategories(data.cannotEatCategories);
          setEnglish(data.englishName);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    if (token) {
      if (!isExistedMenuList) {
        fetchData();
      } else if (menuSort === "ambiguous") {
        fetchDataAmbiguous();
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [user.accessToken, foodName, isExistedMenuList, menuSort, setAccessToken]);

  return (
    <Box sx={containerStyle}>
      <>
        <Title name={foodName ? foodName : '김치찌개'} english={english}/>
        {
          isFood &&
          <>
          <IngredientsBox tag={'cannot eat'} ingredients={cannoteats} />
          <IngredientsBox tag={'can eat'} ingredients={caneats} />
          {
            isExistedMenuList &&
            <SelectBox />
          }
          {loading && <Box sx={loadingStyle}>Loading...</Box>}
          </>
        }
        {
          !isFood &&
          <Box sx={notFoodStyle}>
            It Is Not Food
          </Box>
        }
      </>
    </Box>
  );
}

export default FoodDetail;

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
  bgcolor: setColor('lightGrey'),
  overflow: 'scroll',
  color: 'black',
  paddingBottom: '80px',
};

const loadingStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  fontSize: '24px',
  color: 'gray',
};

const notFoodStyle = {
  width: '100%',
  height: '100%',
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
}