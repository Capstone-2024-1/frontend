import { Box } from '@mui/material'
import React from 'react'
import Food from './Food'
import { useUser } from '@/hook/useUser';
interface Menu{
  name: string;
  quantity: number;
}

const Orders = () => {
  const {menuList} = useUser();
  return (
    <Box>
      {menuList.map((menu, index)=>(
        <Food key={index} name={menu.name} quantity={menu.quantity}/>
      ))
      }
    </Box>
  )
}

export default Orders