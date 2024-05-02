import { setColor } from '@/utils/setColor'
import { Box, CardMedia } from '@mui/material'
import { useRouter } from 'next/router';
import React from 'react'

const Title = ({name}:{name: string}) => {
  const router = useRouter();
  const handleBack = () => {
    router.push('/menu');
  }
  return (
    <Box sx={containerStyle}>
      <CardMedia
        component="img"
        image={'/images/arrow-left.png'}
        title="profile"
        sx={imageStyle}
        onClick={handleBack}
            />
      {name}
    </Box>
  )
}

export default Title;

const containerStyle = {
  width: '100%',
  height: '70px',
  bgcolor: setColor('main'),
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  color: 'white',
  textEdge: 'cap',
  fontSize: '1.6rem',
  fontStyle: 'normal',
  fontWeight: 'bold',
  lineHeight: 'normal',
  marginBottom: '30px',
};

const imageStyle = {
  width: '40px',
  height: '40px',
  margin: '10px',
}