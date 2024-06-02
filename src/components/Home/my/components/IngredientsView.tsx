import { useUser } from '@/hook/useUser';
import { setColor } from '@/utils/setColor';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import IngredientsBox from '@/components/common/ingredients/IngredientsBox';
import { getMyIngredients } from '@/apis/my';

interface Ingredient {
  id: number;
  englishName: string;
  koreanName: string;
  imageUrl: string;
}

const IngredientsView = ({ list }: { list?: boolean }) => {
  const router = useRouter();
  const [ingredients, setIngredients] = useState<Ingredient[]>();
  const { currentGroup, user, setAccessToken } = useUser();

  const handleBack = () => {
    router.push('/home');
  };

  useEffect(() => {
    if (user.accessToken === "") {
      const token = localStorage.getItem('accessToken');
      if (token) {
        setAccessToken(token);
      }
    }

    const fetchData = async () => {
      const token = user.accessToken || localStorage.getItem('accessToken');
      if (token) {
        const data = await getMyIngredients(token);
        if (data) {
          setIngredients(data);
        }
      }
    }
    fetchData();
  }, [currentGroup, user.accessToken, setAccessToken]);

  return (
    <>
      <Header title={"My Ingredients"} handleBack={handleBack} />
      <Box sx={container}>
        <IngredientsBox tag={'cannot eat'} ingredients={ingredients} />
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
  color: 'black',
};
