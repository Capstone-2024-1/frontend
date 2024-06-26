import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'
import Ingredient from './components/Ingredients';

const Modify = () => {
  const router = useRouter();
  const type = Array.isArray(router.query.type) ? router.query.type[0] : router.query.type;

  return (
    <Ingredient list={true}/>
  )
}

export default Modify;