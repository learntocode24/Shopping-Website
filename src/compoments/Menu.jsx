import React from 'react'
import { Link } from 'react-router-dom'
import "./Menu.css"

export default function Menu() {
  return (



    <div>

        <Link to="/"><button className='btn1'>list product</button></Link>

        <Link to="/Cart"><button className='btn2'>cart</button></Link>

        <Link to="/Search"><button className='btn3'>Search</button></Link>



    </div>
  )
}
