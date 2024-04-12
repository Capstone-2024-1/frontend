import React from 'react'
import MyButton from './components/MyButton'
import { Box } from '@mui/material'

const MyInformation = () => {
  return (
    <Box sx={informationStyle}>
    <MyButton name={"My Ingredient List"}/>
    <MyButton name={"modify - Vegeterianism"}/>
    <MyButton name={"modify - Allergy"}/>
    <MyButton name={"modify - religion"}/>
    </Box>
  )
}

export default MyInformation;

const informationStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}