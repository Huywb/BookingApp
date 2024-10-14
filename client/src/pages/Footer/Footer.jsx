import { Box, Typography } from '@mui/material'
import React from 'react'
import { FooterMenu } from '../../utils/Data'

const Footer = () => {
  return (
    <Box sx={{display:'flex',gap:10,marginBottom:'50px'}}>
          {FooterMenu.map((item,index)=>(
            <Box sx={{display:'flex',flex:1,flexDirection:'column',gap:2}}> 
              <Box key={index} > 
                    <Typography fontWeight='bold' fontSize={20}>{item.text}</Typography>
              </Box>
              {item.type.map((item,index)=>(
                <Box key={index} sx={{cursor:'pointer','&:hover': { opacity: 1 } ,opacity:.7, transition:'all 0.3s' }}>
                  <Typography >{item}</Typography>
                </Box>
              ))}
            </Box>
          ))}
    </Box>
  )
}

export default Footer