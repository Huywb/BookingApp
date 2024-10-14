import { Box, Grid2, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CardImg, MenuSuppot } from '../../utils/Data'
import MenuSupport from '../MenuSupport/MenuSupport'

const Support = () => {
    const [Check,setCheck] = useState("Popular")

    const handleChange = (text)=>{
        setCheck(text)
    }

    const data = CardImg.filter((item)=>item.category === Check)
    console.log(data)

  return (
    <Box>
        <Box sx={{paddingBottom:'10px'}}>
            <Typography fontSize={30} fontWeight='bold'>Inspiration for future vacations</Typography>
            <Box  sx={{display:'flex',gap:5,paddingTop:'10px',flexDirection:'column'}}>
                <Box sx={{display:'flex',gap:5,paddingTop:'10px'}}>
                {MenuSuppot.map((item,index)=>(
                    <Box onClick={()=>handleChange(item.text)} key={index}  sx={{cursor:'pointer', fontWeight: Check === item.text ? 900 : 'normal', // Use 'normal' or a specific number for inactive items
                        opacity: Check === item.text ? 1 : 0.5,padding:'10px',borderBottom: Check === item.text ? '2px solid black ' : ''}}>
                        <Typography>{item.text}</Typography>
                    </Box>
                ))}
                </Box>
                <MenuSupport data={data}></MenuSupport>
            </Box>
        </Box>
    </Box>
  )
}

export default Support