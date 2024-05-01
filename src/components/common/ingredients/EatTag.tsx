import { useUser } from '@/hook/useUser';
import { setColor } from '@/utils/setColor';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'

const EatTag = ({tag}:{tag: string}) => {
  const [click, setClick] = useState<boolean>(false);
  const {setMenuSort, menuSort} = useUser();
  const handleClick = () => {
    setMenuSort(tag);
  }
  useEffect(()=> {
    if(menuSort === tag)setClick(true);
    else setClick(false);
  }, [menuSort])
  return (
    <Box sx={{
      ...tagStyle, 
      bgcolor: click?setColor('sub'):'white',
      color: click ? 'white': 'black',
    }} onClick={handleClick}>
        {tag}
    </Box>
  )
}

export default EatTag;

const tagStyle = {
  borderRadius: '1.875rem',
  width: '9.6875rem',
  height: '3.125rem',
  border: '1px solid #D9D9D9',
  padding: '10px',

  fontFamily: 'JejuGothic',
  fontSize: '1.375rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',

  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  cursor: 'pointer',
}
