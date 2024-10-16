import { Avatar, Box, Button, ImageList, ImageListItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardImg, HostProfile, Rules } from '../../utils/Data'
import { MdStarRate } from "react-icons/md";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import host from '../../assets/1.png'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";

const CardDetail = () => {
  const pathname = useParams()

  const data = CardImg.find((item)=>item.id == pathname.id)
  console.log(pathname.id)
  console.log(data)
  const [CheckIn, setCheckIn] = useState(dayjs(Date.now()));
  const [CheckOut, setCheckOut] = useState(dayjs(Date.now()));
  const differenceInDays = CheckOut.diff(CheckIn, 'day');
  console.log(differenceInDays); // This will log the difference in days
  const price = "200"
  const totalPrice = price * differenceInDays
  const CleanFee = price/10
  const ServiceFee = price/10
  const Total = totalPrice + CleanFee + ServiceFee

  const [guests, setGuests] = useState(1);

  const handleDecrease = () => {
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  const handleIncrease = () => {
    setGuests(guests + 1);
  };

  

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
            <Box sx={{display:'flex',gap:4}}>
              <Box sx={{flex:3}}>
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
            <Box sx={{flex:2,display:'flex',alignItems:'center',paddingTop:'50px',justifyContent:'center'}}>
              <Box sx={{border:'1px solid black',borderRadius:'20px',boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", width:'100%',height:'auto',padding:'20px'}}>
                  <Typography sx={{display:'flex',alignItems:'center',gap:1}} fontSize={30} fontWeight='bold'><AiOutlineDollar size={30} /> {price} <span > / night</span></Typography>
                  <Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker', 'DatePicker']}>
                        <DatePicker label="CHECK IN" value={CheckIn}
                          onChange={(newValue) => setCheckIn(newValue)}/>
                        <DatePicker
                          label="CHECK OUT"
                          value={CheckOut}
                          onChange={(newValue) => setCheckOut(newValue)}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Box>
                  <Box sx={{display:'flex',bgcolor:'#f5f5f5',padding:'10px',marginY:'20px',width:'70%',marginX:'auto',gap:4,alignItems:'center',justifyContent:'center'}}>
                    <Button onClick={handleIncrease} sx={{fontSize:'30px',color:'black'}}><CiCirclePlus /></Button>
                    <Typography sx={{fontSize:'20px',minWidth:"100px",marginX:'auto',alignItems:'center '}}>Guest :{guests}</Typography>
                    <Button  disabled={guests===1} onClick={handleDecrease} sx={{fontSize:'30px',color:'black'}}><CiCircleMinus /></Button>
                  </Box>
                  <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',marginTop:'10px'}}>
                    <Button sx={{borderRadius:'10px',bgcolor:'#f44336',color: 'white',width:'100%',paddingY:'10px',fontSize:20}}>Book a Room</Button>
                  </Box>
                  <Typography fontWeight={500} sx={{opacity:.6,width:'fit-content',marginX:'auto',marginY:'20px'}}>You have not been charged yet</Typography>
                  <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography sx={{display:'flex',alignItems:'center',gap:1}}fontWeight='bold' fontSize={22}><AiOutlineDollar fontSize={25}/> {price} x {differenceInDays} nights</Typography>
                    <Typography sx={{display:'flex',alignItems:'center',gap:1}} fontWeight='bold' fontSize={22}><AiOutlineDollar  fontSize={25}/> {totalPrice}</Typography>
                  </Box>
                  <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography sx={{display:'flex',alignItems:'center',gap:1}} fontWeight='bold' fontSize={22}>Cleaning Fee</Typography>
                    <Typography sx={{display:'flex',alignItems:'center',gap:1}} fontWeight='bold' fontSize={22}><AiOutlineDollar  fontSize={25}/>{CleanFee}</Typography>
                  </Box>
                  <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography sx={{display:'flex',alignItems:'center',gap:1}} fontWeight='bold' fontSize={22}>Service Fee</Typography>
                    <Typography sx={{display:'flex',alignItems:'center',gap:1}} fontWeight='bold' fontSize={22}><AiOutlineDollar  fontSize={25}/>{ServiceFee}</Typography>
                  </Box>
                  <hr className='my-5'/>
                  <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography sx={{display:'flex',alignItems:'center',gap:1}} fontWeight='bold' fontSize={22}>Total</Typography>
                    <Typography sx={{display:'flex',alignItems:'center',gap:1,textDecoration:'underline'}} fontWeight='bold' fontSize={22}><AiOutlineDollar  fontSize={25}/> {Total}</Typography>
                  </Box>
              </Box>
            </Box>
            </Box>
            <hr className='my-20'/>
            <Box sx={{display:'flex',flexDirection:'column',gap:4}}>
              <Typography fontSize={30} fontWeight='bold'>Things To Know</Typography>
              <Box sx={{display:'flex',gap:10,marginBottom:'50px'}}>
                    {Rules.map((item,index)=>(
                      <Box sx={{display:'flex',flex:1,flexDirection:'column',gap:2}}> 
                        <Box key={index} > 
                              <Typography fontWeight='bold' fontSize={25}>{item.text}</Typography>
                        </Box>
                        {item.type.map((item,index)=>(
                          <Box key={index} sx={{cursor:'pointer'}}>
                            <Typography fontSize={18}>{item}</Typography>
                          </Box>
                        ))}
                      </Box>
                    ))}
              </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default CardDetail