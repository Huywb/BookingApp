import { Box, Button, ImageList, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CardImg } from '../../utils/Data'
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from 'react-router-dom';



const Card = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Like,setLike] = useState(false)
  

  const handleLike = ()=>{
    setLike(!Like)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.url.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.url.length - 1 : prevIndex - 1
    );
  };
  return (
    <Box  sx={{display:'flex',flexDirection:'column', gap:2}}>
      <Box sx={{ display: 'flex', width: '100%', overflow: 'hidden', position: 'relative' }}>
        <Box sx={{ display: 'flex', transition: 'transform 0.5s ease-in-out', transform: `translateX(-${currentIndex * 100}%)` }}>
          {data.url.map((item, index) => (
            <Box key={index} sx={{ minWidth: '100%'}}>
              <img src={item} alt="card-item" style={{ width: '100%', height: '100%',borderRadius:'10px' }} />
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
      <Link to={`/room/${data.id}`}>

        <Box sx={{flex:1,display:'flex',flexDirection:'column',gap:2,padding:1,cursor:'pointer',}}>
          <Box>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
              <Typography fontWeight='bold'>{data.name}</Typography>
              <Typography fontWeight='bold'>* 5.0</Typography>
            </Box>
            <Typography sx={{opacity:.7}}>{data.host}</Typography>
            <Typography sx={{opacity:.7}}>{data.type}</Typography>
          </Box>
          <Box>
            <Typography fontWeight='bold'>4,211kr SEK night</Typography>
          </Box>
        </Box>
    </Link>

    </Box>
  )
}

export default Card