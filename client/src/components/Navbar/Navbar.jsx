import { Box, Button, Container, Input, InputBase, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuNav } from '../../utils/Data'
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [check,setCheck] = useState(false)
  const [show,setShow] = useState(true)
  const [user,setUser] = useState(true)

  const handleSearch = ()=>{
    setCheck(!check)
  }
  
  const showProfile = ()=>{
    setShow(!show)
  }
  return (
    <Box sx={{backgroundColor:"white",flexDirection:'column',position:'sticky',top:0 ,right:0,left:0,zIndex:99,display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px',marginX:'-20px'}} >
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
          <Box className='-rotate-90 text-red-500' > 
            <Link to='/'className='w-10 h-10'>
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
            </Link>
          </Box>
          <Box className='p-1 px-2 flex border shadow-md rounded-full items-center'>
            {MenuNav.map((item,index)=>(
              <Box key={index} className={` px-3 ${(index < 2)  ? 'font-bold' : ''} ${(index % 2 !== 0)  ? 'border-x-2 border-x-gray-300' : ''}`}>{item.text}</Box>
            ))}
            <Box onClick={handleSearch} className='bg-red-400 p-1 rounded-full text-white cursor-pointer'>
            {check ? 
            <IoIosCloseCircleOutline size={31}/>
            : 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>}

            </Box>
          </Box>
          <Box onClick={showProfile} className='p-1 flex justify-between gap-10 items-center '>
            <Box className='flex border p-1 rounded-full gap-1 px-2 relative shadow-md'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <Typography className='absolute w-3 h-3 rounded-full right-2 bg-red-500'></Typography>
            {show && 
            <Box sx={{bottom: check ? '-70px' :'-70px',zIndex:10,marginTop:'50px',height:'fit-content',right:' 0px',top:'0',position:'absolute',borderRadius:'10px',display:'flex',bgcolor:'#eeeeee',flexDirection:'column', width:'120px'}}>
              
              {user ? 
              <>
                <Link to='/login' className='text-[18px] px-2 hover:bg-[white] py-1 rounded-md'>Booking</Link>
                <Link to='/register' className='text-[18px] px-2 hover:bg-[white] py-1' >Log out</Link>
                </>
              :
              <>
                <Link to='/login' className='text-[18px] px-2 hover:bg-[white] py-1 rounded-md'>Login</Link>
                <Link to='/register' className='text-[18px] px-2 hover:bg-[white] py-1' >Register</Link>
                <Link to='/' className='text-[18px] px-2 hover:bg-[white] py-1' >Register</Link>
                </>
              }
            </Box>
            }
            </Box>
          </Box>
        </Box>
        {check && 
            <Box sx={{paddingTop:'20px', height: check ? 'auto' : 0, overflow: 'hidden',display:'flex',gap:2,opacity: check ? 1 : 0, transform: check ? 'translateY(0)' : 'translateY(-20px)',   transition: 'opacity 0.3s ease-out, transform 0.3s ease-out, height 0.3s ease-out', }}>
            <Input placeholder='Searching...' sx={{minWidth:'500px'}}></Input>
            <Box sx={{cursor:'pointer'}}>
            <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </Box>
          </Box>
        }
        
    </Box>
  )
}

export default Navbar