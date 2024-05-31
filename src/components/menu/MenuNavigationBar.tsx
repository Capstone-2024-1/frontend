import EatTag from '@/components/common/ingredients/EatTag';
import { Box } from '@mui/material'
import React from 'react'

const MenuNavigationBar = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={tagsStyle}>
        <EatTag tag={'can eat'}/>
        <EatTag tag={'ambiguous'}/>
        <EatTag tag={'cannot eat'}/>
      </Box>
    </Box>
  )
}

export default MenuNavigationBar;

const containerStyle = {
  width: '100%', // 전체 너비 사용
  height: '90px',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #D9D9D9',
  padding: '10px',
}

const tagsStyle = {
  display: 'flex',
  alignItems: 'center', // 아이템들을 세로 중앙에 위치시킴
  // overflowX: 'auto', // 가로 스크롤 활성화
  height: '100%', // 이 높이는 부모의 높이와 동일하게 설정
  overflowX: 'scroll',
}
