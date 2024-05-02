import { Box } from '@mui/material'
import React from 'react'
import Food from './Food'

const Foods = ({sort}: {sort: string}) => {
  const handleContents = () => {

  }
  return (
    <Box>
      {sort==='can eat' &&
      <>
      <Food name={'Grilled Fish (생선구이)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      </>
      }
      {sort === 'ambiguous' &&
      <>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      <Food name = {'Stir-fried pork (제육볶음)'}/>
      </>
      }
      {sort === 'cannot eat' &&
      <>
      <Food name = {'Altang (알탕)'}/>
      <Food name = {'Altang (알탕)'}/>
      <Food name = {'Altang (알탕)'}/>
      <Food name = {'Altang (알탕)'}/>
      <Food name = {'Altang (알탕)'}/>
      <Food name = {'Altang (알탕)'}/>
      </>
      }
    </Box>
  )
}

export default Foods
