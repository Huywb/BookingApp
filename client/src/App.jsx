import { useState } from 'react'
import {AppBar, Box, Container} from '@mui/material'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu'
import Home from './pages/Home/Home'
import Filter from './pages/Filter/Filter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Navbar></Navbar>
      <hr className='mt-4' />
      <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/:menu" element={<Filter></Filter>}></Route>
        </Routes>
    </Container>
  )
}

export default App
