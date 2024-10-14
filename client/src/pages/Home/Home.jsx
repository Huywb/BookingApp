import { Box } from '@mui/material'
import React from 'react'
import Menu from '../../components/Menu/Menu'
import ListCard from '../../components/ListCard/ListCard'
import Support from '../../components/Support/Support'

const Home = () => {
  return (
    <Box>
      <hr className='mt-4' />
      <Menu></Menu>
      <Box>
          <ListCard></ListCard>
      </Box>
    </Box>
  )
}

export default Home