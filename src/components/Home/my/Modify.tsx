import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'

const Modify = () => {
  const router = useRouter();
  const type = Array.isArray(router.query.type) ? router.query.type[0] : router.query.type;

  return (
    <Box>
      {type}
    </Box>
  )
}

export default Modify