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
};

const FoodDetail = () => {
  const router = useRouter();
  const { user, isExistedMenuList, canEatCategories, cannotEatCategories, setCanEatCategories, setCannotEatCategories, menuSort } = useUser();
  const foodName = Array.isArray(router.query.name) ? router.query.name[0] : router.query.name;

  const [caneats, setCaneats] = useState<Ingredient[]>(canEatCategories);
  const [cannoteats, setCannoteats] = useState<Ingredient[]>(cannotEatCategories);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getFoodFiltering(foodName ? foodName : "김치볶음밥", user.accessToken);
        if (data) {
          console.log(data);
          setCaneats(data.canEatCategories);
          setCannoteats(data.cannotEatCategories);
          setCanEatCategories(data.canEatCategories);
          setCannotEatCategories(data.cannotEatCategories);
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
        const data = await getFoodGenerating(foodName ? foodName : "김치볶음밥", user.accessToken);
        if (data) {
          console.log(data);
          setCaneats(data.canEatCategories);
          setCannoteats(data.cannotEatCategories);
          setCanEatCategories(data.canEatCategories);
          setCannotEatCategories(data.cannotEatCategories);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    if (!isExistedMenuList) {
      fetchData();
    } else if (menuSort === "ambiguous") {
      fetchDataAmbiguous();
    } else {
      setLoading(false); // 추가: 데이터 로딩이 필요하지 않으면 로딩 상태를 false로 설정
    }
  }, [user.accessToken, foodName, isExistedMenuList, menuSort]);

  return (
    <Box sx={containerStyle}>
      <>
        <Title name={foodName ? foodName : '김치찌개'} />
        <IngredientsBox tag={'cannot eat'} ingredients={cannoteats} />
        <IngredientsBox tag={'can eat'} ingredients={caneats} />
        <SelectBox />
        {loading && <Box sx={loadingStyle}>Loading...</Box>}
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
