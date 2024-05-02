import { Box } from '@mui/material'
import React from 'react'
import Food from './Food'
import { setColor } from '@/utils/setColor';
import { useRouter } from 'next/router';

const Foods = ({sort}: {sort: string}) => {
  const router = useRouter();
  const handleContents = () => {

  };

  const handleClick = () => {
    router.push('/order');
  };

  return (
    <Box sx={containerStyle}>
      {sort==='can eat' &&
      <>
      <Food name={'Grilled Fish (생선구이)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      <Food name={'Grilled Fish (생선구이)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      <Food name={'Grilled Fish (생선구이)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      <Food name={'Grilled Fish (생선구이)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      <Food name={'Grilled Fish (생선구이)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      <Food name={'Grilled Fish (생선구이)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      </>
      }
      {sort === 'ambiguous' &&
      <>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      </>
      }
      {sort === 'cannot eat' &&
      <>
      <Food name = {'Altang (알탕)'}/>
      <Food name = {'Altang (알탕)'}/>
      <Food name = {'Altang (알탕)'}/>
      <Food name = {'Altang (알탕)'}/>
      <Food name = {'Altang (알탕)'}/>
      <Food name = {'Altang (알탕)'}/>
      </>
      }
      <Box sx={{...boxStyle, right: '15%','@media (min-width: 560px)': {
          right: 'calc(50% - 200px)',
        },}} onClick={handleClick}>
        Go To Order List
        </Box>
    </Box>
  )
}

export default Foods;

const boxStyle = {
  width: '70%',
  maxWidth: '400px',
  height: '3.25rem',
  position: 'fixed',
  '@media (max-width: 560px)': {
    left: '15%',
  },
  bottom: '40px',
  bgcolor: setColor('main'),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1.6rem',
  borderRadius: '0.625rem',
  cursor: 'pointer',
  zIndex: 3,
};

const containerStyle = {
  overflow: 'scroll',
}