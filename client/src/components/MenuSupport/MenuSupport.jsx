import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'

const MenuSupport = ({data}) => {
    console.log(data)
  return (
    <Box>
        <Grid2 container spacing={6}>
            {data.map((item,index)=>(
                <Grid2 key={index}>
                    <Typography fontSize={20}>{item.name}</Typography>
                    <Typography sx={{opacity: .7}}>{item.type}</Typography>
                </Grid2>
            ))}
        </Grid2>
    </Box>
  )
}

export default MenuSupport