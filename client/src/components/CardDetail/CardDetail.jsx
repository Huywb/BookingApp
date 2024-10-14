import { Avatar, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { CardImg, HostProfile } from '../../utils/Data'
import { MdStarRate } from "react-icons/md";
import host from '../../assets/1.png'

const CardDetail = () => {
  const pathname = useParams()

  const data = CardImg.find((item)=>item.id == pathname.id)
  console.log(pathname.id)
  console.log(data)

  return (
    <Box sx={{paddingTop:'20px'}}>
        <Typography sx={{fontSize:30, fontWeight:'bold',marginY:'30px'}}>Love Headling in Lee-Cheon-in</Typography>
        <Box >
          <ImageList sx={{ width: '100%', minHeight: 200 }} cols={3  }>
            {data.url.map((item) => (
              <ImageListItem key={item}>
                <img
                  src={item}
                  alt={item}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Box sx={{marginTop:'40px'}}>
          <Box>
              <Typography fontWeight='bold' fontSize={30}>Entire cottage in Sindun-myeon, Icheon-si, South Korea</Typography>
              <Typography fontSize={20}>2 guests 1 bedroom  1 bed 1 bathroom</Typography>
              <Box sx={{display:'flex',gap:1}}>
                <MdStarRate  size={25}/>
                <Typography fontSize={20} fontWeight='bold'> 4.83 .168 reviews</Typography>
              </Box>
          </Box>
          <hr className='my-10'/>
          <Box sx={{display:'flex',gap:2}}>
            <Avatar alt='host-img' src={host} sx={{width:'70px',height:'auto'}}></Avatar>
            <Box sx={{display:'flex',flexDirection:'column'}} >
              <Typography fontSize={25} fontWeight='bold'>Host/Organizer: Sungwon</Typography>
              <Typography fontSize={18} sx={{opacity:.8}}>Super Host 10 years of experience in hospitality</Typography>
            </Box>
          </Box>
          <hr className='my-10'/>
          <Box sx={{display:'flex',flexDirection:'column',gap:4}}>
            {HostProfile.map((item,index)=>(
              <Box key={index} sx={{display:'flex',alignItems:'center',gap:2}}>
                  <Box sx={{width:'70px',height:'auto',fontSize:40}}>{item.img}</Box>
                  <Box>
                    <Typography fontSize={20} fontWeight='bold'>{item.text}</Typography>
                    <Typography fontSize={18}>{item.description}</Typography>
                  </Box>
              </Box>
            ))}
          </Box>
        </Box>
    </Box>
  )
}

export default CardDetail