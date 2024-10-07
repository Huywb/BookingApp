import React from 'react'
import { useParams } from 'react-router-dom'

const Filter = () => {
    const {menu} = useParams()
    console.log(menu)
  return (
    <div>Filter</div>
  )
}

export default Filter