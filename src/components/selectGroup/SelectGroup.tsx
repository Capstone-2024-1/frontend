import { setColor } from '@/utils/setColor'
import { Box } from '@mui/material'
import React from 'react'
import NextButton from './NextButton'
import GroupList from './GroupList'
import Members from './Members'

const SelectGroup = () => {
 
  return (
    <Box sx={containerStyle}>
      <GroupList/>
      <Members/>
      <NextButton/>
    </Box>
  )
}

export default SelectGroup;

const containerStyle = {
  width: '100%',
  height: '100%',
  bgcolor: setColor('lightGrey'),
  overflow: 'scroll',
};