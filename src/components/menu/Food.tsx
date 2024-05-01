import { Box } from '@mui/material'
import { useRouter } from 'next/router';
import React from 'react'

const Food = ({name}:{name: string}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/menu/detail?name=${name}`)
  }
  return (
    <Box sx={containerStyle} onClick = {handleClick}>
      {name}
    </Box>
  )
}

export default Food;

const containerStyle = {
  width: '100%',
  height: '70px',
  paddingLeft: '3%',
  fontSize: '1.5rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',

  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #D9D9D9',
}