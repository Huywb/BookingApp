import { useState } from 'react'
import {AppBar, Box, Container} from '@mui/material'
import './App.css'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
    </>
  )
}

export default App
