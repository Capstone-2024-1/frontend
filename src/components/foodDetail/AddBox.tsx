import { addMenu } from '@/utils/addMenu';
import { setColor } from '@/utils/setColor';
import { Box, CardMedia } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

interface Menu {
  name: string;
  quantity: number;
}

const AddBox = ({handleClick}:{handleClick:()=>void}) => {
  const router = useRouter();
  const name = Array.isArray(router.query.name) ? router.query.name[0] : router.query.name;
  const [menuList, setMenuList] = useState<Menu[]>([]);

  const [num, setNum] = useState<number>(0);
  
  const handlePlus = () => {
    setNum(num + 1);
  }
  const handleMinus = () => {
    if(num>0)setNum(num - 1);
  }
  const handleAdd = () => {
    if(name && num > 0){
      setMenuList(prevMenuList => {
        // 이미 있는 메뉴 찾기
        const existingMenu = prevMenuList.find(item => item.name === name);
        if (existingMenu) {
          // 존재하는 메뉴의 수량 업데이트
          return prevMenuList.map(item =>
            item.name === name ? { ...item, quantity: item.quantity + num } : item
          );
        } else {
          // 새 메뉴 추가
          return [...prevMenuList, { name, quantity: num }];
        }
      });

      setNum(0);
    }
  }
  return (
    <Box>
      <Box sx={{...addStyle, right: '15%','@media (min-width: 500px)': {
          right: 'calc(50% - 225px)',
        },}}>
            <CardMedia
            component="img"
            image={'/images/arrow-down.png'}
            title="profile"
            sx={imageStyle}
            onClick={handleClick}
            />
            <Box sx={quantityStyle}>
              <Box sx={textStyle}>
                Quantity
              </Box>
              <Box sx={addBoxStyle}>
                <CardMedia
              component="img"
              image={'/images/addLeft.png'}
              title="profile"
              sx={addImageStyle}
              onClick={handleMinus}
              />
              <CardMedia
              component="img"
              image={'/images/addRight.png'}
              title="profile"
              sx={addImageStyle}
              onClick={handlePlus}
              />
              <Box sx={numStyle}>
                {num}
              </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{...boxStyle, right: '15%','@media (min-width: 560px)': {
          right: 'calc(50% - 200px)',
        },}} onClick={handleAdd}>
          ADD
          </Box>
        </Box>
  )
}

export default AddBox;

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

const addStyle = {
  width: '80%',
  maxWidth: '450px',
  height: '10rem',
  position: 'fixed',
  bottom: '30px',
  bgcolor: 'white',
  zIndex: 2,
  border: '1px solid #F5F5F5',
  borderRadius: '1rem',
  boxShadow: '1px 2px 2px 1px rgba(0, 0, 0, 0.10)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media (max-width: 560px)': {
    left: '10%',
  },
};
const imageStyle = {
  width: '40px',
  height: '40px',
  cursor: 'pointer',
};

const quantityStyle = {
  width: '100%',
  height: '3rem',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const textStyle = {
  fontFamily: 'Inter',
  fontSize: '1.375rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  letterSpacing: '0.0685rem',
};

const addBoxStyle = {
  width: '120px',
  height: '100%',
  bgcolor: 'yellow',
  display: 'flex',
};

const addImageStyle = {
  width: '50%',
  height: '100%',
  cursor: 'pointer',
};
const numStyle = {
  position: 'absolute', // 절대 위치
  top: 40, // 상단 정렬
  right: '22%', // 오른쪽 정렬
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '10%', // 너비 100%
  height: '30%', // 높이 100%
  zIndex: 2, // 다른 요소 위에 위치
}