import { useState } from 'react'
import {AppBar, Box, Container} from '@mui/material'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu'
import Home from './pages/Home/Home'
import Filter from './pages/Filter/Filter'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Footer from './pages/Footer/Footer'
import Support from './components/Support/Support'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/:menu" element={<Filter></Filter>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      <hr className='m-10' />
      <Support></Support>
      <hr className='m-10' />
      <Footer></Footer>
    </Container>
  )
}

export default App
