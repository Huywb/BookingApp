import { Box, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MenuNav } from '../../utils/Data'

const Navbar = () => {
  return (
    <Container sx={{height:'200vh'}}>
        <Box position='sticky' top={0}> 
          <Link to='/'>
            <svg className='w-10 h-10 -rotate-90' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </Link>
        </Box>
        <Box className='p-1'>
          {MenuNav.map((item,index)=>{
            <Box key={index}>{item.text}</Box>
          })}
          <Box>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          </Box>
        </Box>
    </Container>
  )
}

export default Navbar