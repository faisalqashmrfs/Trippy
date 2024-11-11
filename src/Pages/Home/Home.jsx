import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Popular from '../../Components/Popular/Popular'
import Recent from '../../Components/Recent/Recent'
import BackGround from './../../assets/Images/Heroimg.jpg'

export default function Home() {
  return (
    <>
      <Hero Title={'Your Journey Your Story'} x={true} BackGround={BackGround}/>
      <Popular />
      <Recent />
    </>
  )
}
