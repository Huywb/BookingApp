import { Box } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../../components/Menu/Menu'

const Filter = () => {
    const {menu} = useParams()
    console.log(menu)
  return (
    <Box>
      <hr className='mt-4' />
      <Menu></Menu>
      <Box>
        {menu}
      </Box>
    </Box>
  )
}

export default Filter