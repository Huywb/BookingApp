import { Box, Typography } from '@mui/material'
import React from 'react'
import { MenuList } from '../../utils/Data'
import { RiMenuSearchLine } from "react-icons/ri";
import { Link, useLocation, useParams } from 'react-router-dom';
const Menu = () => {
  const pathName = useLocation()
  const CheckUrl = pathName.pathname
  console.log(CheckUrl)
  return (
    <Box sx={{display:'flex',gap:'10px',padding:'10px',justifyContent:'space-between'}}>
        <Box sx={{display:'flex',gap:'10px',flex:6,overflowX:'auto'}}>
          {MenuList.map((item,index)=>(
              <Box className={`${item.url === CheckUrl ? 'opacity-95 border-b-2   border-black' : 'opacity-40'} `} sx={{transition: '0.3s',"&:hover" :  {opacity: '1'},cursor:'pointer',display: 'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'10px'}} key={index}>
                 <Link to={item.url}>
                <Box  sx={{alignItems:'center',display:'flex',justifyContent:'center',fontSize:'30px'}} >{item.logo}</Box>
                <Typography fontWeight={400} fontSize={13}>{item.text}</Typography>
                </Link>
              </Box>
          ))}
        </Box>
        <Box sx={{display:'flex',flex:1,alignItems:'center'}}>
          <Box sx={{height:'80%',border:'1px solid',paddingX:2,borderRadius:'20px',display:'flex',alignItems:'center',justifyContent:'center',gap:'5px',fontSize:20}}>
          <RiMenuSearchLine />
          <Typography fontSize={16}>Filters</Typography>
          </Box>
        </Box>
    </Box>
  )
}

export default Menu