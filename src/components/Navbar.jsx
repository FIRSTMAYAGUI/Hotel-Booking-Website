import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-around items-center w-3/4 mx-auto h-[65px] rounded shadow-md absolute top-10 left-[12.5%] bg-white'>
      <div className='flex items-center justify-around w-[135px]'>
        <p className='text-3xl'>H</p>
        <p className='w-[100px] text-left font-extralight'>HOTEL MIRANDA</p>
      </div>
      <nav className='flex w-[65%] justify-end'>
        <ul className='flex justify-evenly items-center w-[400px]'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#room">Room</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#news">News</a></li>
        </ul>
      </nav>
    </div>
  )
}
