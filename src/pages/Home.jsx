import React from 'react'
import NavBar from '../components/NavBar'
import Logo from '../pics/BAE1.png'

export default function Home() {
  return (
    <div className=''>
      <NavBar />
      <p className='p-4'>Lorem ipsum</p>
      <img src={Logo} alt='home'/>
      <p className='p-4'>Lorem ipsum</p>
    </div>
  )
}

