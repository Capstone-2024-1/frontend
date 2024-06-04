import { useUser } from '@/hook/useUser';
import { setColor } from '@/utils/setColor';
import { Box, CardMedia } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const Title = ({ name, english }: { name: string, english: string }) => {
  const router = useRouter();
  const { isExistedMenuList, foodEnglishName } = useUser();

  const handleBack = () => {
    if (isExistedMenuList) {
      router.push('/menu');
    } else {
      router.push('/home');
    }
  };

  return (
    <Box sx={containerStyle}>
      <CardMedia
        component="img"
        image={'/images/arrow-left.png'}
        title="profile"
        sx={imageStyle}
        onClick={handleBack}
      />
      <Box sx={titleStyle}>
        {isExistedMenuList ? (
          <>{name} ({foodEnglishName})</>
        ) : (
          <>{name} ({english})</>
        )}
      </Box>
    </Box>
  );
}

export default Title;

const containerStyle = {
  width: '100%',
  height: '70px',
  bgcolor: setColor('main'),
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  fontSize: '1.4rem',
  fontStyle: 'normal',
  fontWeight: 'bold',
  lineHeight: 'normal',
  marginBottom: '30px',
};

const imageStyle = {
  width: '40px',
  height: '40px',
  margin: '10px',
};

const titleStyle = {
  width: '500px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};
