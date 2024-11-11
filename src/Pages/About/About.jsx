import React, { useEffect, useState } from 'react'
import Hero from '../../Components/Hero/Hero'
import './About.css'
import BackGround2 from './../../assets/Images/About-background.jpg'
import { Link } from 'react-router-dom'

// import axios from 'axios'

export default function About() {

  // const [open , setopen] = useState(false)

  // const HandelOpening = () => 
  // {
  //   setopen(!open)
  // }
  

  return (
    <>
      <Hero Title={'About'} x={false} BackGround={BackGround2}/>




      {/* <button className='Btn' onClick={() => HandelOpening()}>{!open ? 'open' : 'close'}</button> */}
      {/* <div className={open ? 'Active' : 'desActive'}>
        <div className='PopUp'>
          <h3>Do You Wont TO Say Hello</h3>
          <div>
            <button><Link to={'/'}>Yes</Link></button>
            <button  onClick={() => setopen(false)}>No</button>
          </div>
        </div>
      </div> */}
    </>
  )
}
