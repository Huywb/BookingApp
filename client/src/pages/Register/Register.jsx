import { Box, Button, Input, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <Box sx={{width:'80%',height:'80vh',display:'flex', alignItems:'center',justifyContent:'center',margin:'auto'}}>
        <Box sx={{width:'50%',  height:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Box sx={{display:'flex',gap:2,flexDirection:'column',width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
              <Typography fontSize={30} fontWeight='bold'>Register</Typography>
              <Input sx={{padding:'5px',width:'80%'}} placeholder='Huy Pham' required></Input>
              <Input sx={{padding:'5px',width:'80%'}} placeholder='Huypham@gmail.com' type='email' required></Input>
              <Input sx={{padding:'5px',width:'80%'}} placeholder='******' type='password' required></Input>
              <Button type='submit' sx={{padding:'10px',width:'80%',bgcolor: '#d32f2f',borderRadius:'20px',color:'white'}}>Register</Button>
              <Box sx={{display:'flex',gap:1}}>
              <Typography sx={{opacity:.5}}>Already a member?</Typography>
              <Typography fontWeight={900} sx={{textDecoration:'underline'}}><Link to='/Login'>Login</Link></Typography>
              </Box>
            </Box>

        </Box>
    </Box>
  )
}

export default Register