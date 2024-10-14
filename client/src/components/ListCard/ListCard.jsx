import { Box, Grid, Grid2 } from '@mui/material'
import React from 'react'
import Card from '../Card/Card'
import { CardImg } from '../../utils/Data'

const ListCard = () => {
  return (
    <Grid2 container spacing={4} >
      {
        CardImg.map((item,index)=>(
          <Grid2 size={4} key={index} sx={{bgcolor:'#f5f5f5',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}}>
          <Card data={item}></Card>
        </Grid2>
        ))
      }
    </Grid2>
  )
}

export default ListCard