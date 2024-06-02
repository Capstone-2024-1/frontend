import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useUser } from '@/hook/useUser';
import { setColor } from '@/utils/setColor';
import { postGroupIngredients } from '@/apis/group';
import { getMyIngredients } from '@/apis/my';

interface Ingredient {
  id: number;
  englishName: string;
  koreanName: string;
  imageUrl: string;
};

const Cannot = () => {
  const { user, currentGroup, setAccessToken } = useUser();
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  
  useEffect(() => {
    const fetchIngredients = async () => {
      let token = user.accessToken;
      if (token === "" || !token) {
        token = localStorage.getItem('accessToken') || "";
        setAccessToken(token);
      }

      if (currentGroup !== -1 && token) {
        const data = await postGroupIngredients(currentGroup, token);
        console.log(data);
        if (data) {
          setIngredients(data);
        }
      }else if(currentGroup === -1 && token){
        const data = await getMyIngredients(token);
        if (data) {
          setIngredients(data);
        }
      }
    };
    fetchIngredients();
  }, [currentGroup, user.accessToken]);

  return (
    <Box sx={boxStyle}>
      <Box sx={titleStyle}>
        Cannot Eat
      </Box>
      <Box sx={listStyle}>
        {ingredients.map((ingredient) => (
          <Box sx={ingredientStyle} key={ingredient.id}>
            {ingredient.koreanName} ({ingredient.englishName})
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Cannot;

const boxStyle = {
  marginTop: '50px',
  width: '100%',
  bgcolor: setColor('lightGrey'),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const titleStyle = {
  width: '50%',
  height: '50px',
  bgcolor: setColor('main'),
  color: 'white',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '30px',
  fontWeight: 'bold',
  borderRadius: '30px',
};

const listStyle = {
  width: '90%',
  bgcolor: 'white',
  borderRadius: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '10px',
  padding: '30px',
  gap: '10px',
};

const ingredientStyle = {
  fontWeight: 'bold',
  fontSize: '20px',
};
