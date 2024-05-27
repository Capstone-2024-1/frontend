import { setColor } from '@/utils/setColor';
import { Box } from '@mui/material'
import { useRouter } from 'next/router';
import React from 'react'

const NextButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/camera');
  }
  return (
    <Box sx={{...boxStyle, right: '15%','@media (min-width: 560px)': {
        right: 'calc(50% - 200px)',
      },}} onClick={handleClick}>
      SELECT
    </Box>
  )
}

export default NextButton;

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