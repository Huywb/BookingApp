import { Box, Button, ImageList, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CardImg } from '../../utils/Data'
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Like,setLike] = useState(false)


  const handleLike = ()=>{
    setLike(!Like)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CardImg.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? CardImg.length - 1 : prevIndex - 1
    );
  };
  console.log(currentIndex)
  console.log(-currentIndex*100)
  return (
    <Box  sx={{display:'flex',flexDirection:'column', gap:2}}>
      <Box sx={{ display: 'flex', width: '100%', overflow: 'hidden', position: 'relative' }}>
        <Box sx={{ display: 'flex', transition: 'transform 0.5s ease-in-out', transform: `translateX(-${currentIndex * 100}%)` }}>
          {CardImg.map((item, index) => (
            <Box key={index} sx={{ minWidth: '100%'}}>
              <img src={item.url} alt="card-item" style={{ width: '100%', height: '100%',borderRadius:'10px' }} />
            </Box>
          ))}
        </Box>
        <Box onClick={handleLike} sx={{cursor:'pointer', position: 'absolute', top: '30px', right: 10, transform: 'translateY(-50%)' }}>
          {Like ? 
          <AiFillHeart size='30px' color='#ff1744'/>
          : 
          <CiHeart size='30px'/>
          }
        </Box>
        <Button onClick={handlePrev} sx={{ minWidth:'10px',padding: 0,bgcolor:'white',color:'black',position: 'absolute', top: '50%', left: 10, transform: 'translateY(-50%)' }}>
          <GrFormPrevious size='30px'/>
        </Button>
        <Button onClick={handleNext} sx={{minWidth:'10px',padding: 0,bgcolor:'white',color:'black',position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)' }}>
          <GrFormNext size='30px'/>
        </Button>
      </Box>
        <Box sx={{flex:1,display:'flex',flexDirection:'column',gap:2,padding:1,cursor:'pointer',}}>
          <Box>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
              <Typography fontWeight='bold'>Brallanda Sweden</Typography>
              <Typography fontWeight='bold'>* 5.0</Typography>
            </Box>
            <Typography sx={{opacity:.7}}>336kilometers away</Typography>
            <Typography sx={{opacity:.7}}>Feb 5 - 10</Typography>
          </Box>
          <Box>
            <Typography fontWeight='bold'>4,211kr SEK night</Typography>
          </Box>
        </Box>
    </Box>
  )
}

export default Card