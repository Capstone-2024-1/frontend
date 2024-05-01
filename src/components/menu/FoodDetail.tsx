import { useRouter } from 'next/router';
import React from 'react'

const FoodDetail = () => {
  const router = useRouter();
  const foodName = router.query.name;
  return (
    <div>{foodName}</div>
  )
}

export default FoodDetail