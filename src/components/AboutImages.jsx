/* eslint-disable no-unused-vars */
import React from 'react'
import userIcon from "../assets/icons/user-fill (1).svg"
import addIcon from "../assets/icons/calendar-check-line (1).svg"
import About1 from "../assets/images/about-2.jpg"
import About2 from "../assets/images/about-1.jpg"

export default function AboutImages() {
  return (
    <div className='flex w-[500px] p-10 gap-5 absolute left-1 top-3 z-10'>
        <div className='flex flex-col items-center gap-y-2.5 justify-around h-[75vh]'>
            <div className='flex flex-col items-center justify-evenly h-[11rem]'>
                <img src={userIcon} alt="user-icon"  className='w-8 h-8'/>
                <h1 className='text-2xl font-medium'>Strong Team</h1>
                <p className=' text-center'>Unlocking Hospitality Excellence And Ensures Your Perfect Stay</p>
            </div>
            <div className='shadow-2xl'>
                <img src={About1} alt="room with good view" />
            </div>
        </div>
        <div className='flex flex-col justify-between h-[77vh]'>
            <div className='shadow-2xl'><img src={About2} alt="woman in a swimming pool" /></div>
            <div className='flex flex-col justify-between items-center py-10 px-3 bg-darkblue text-white h-[14.5rem] shadow-2xl'>
                <img src={addIcon} alt="add-icon" className='w-8 h-8'/>
                <h1 className='text-2xl font-medium'>Luxury Room</h1>
                <p className='text-center'>Experience Unrivaled Luxury at Our Exquisite Luxury Rooms</p>
            </div>
        </div>
    </div>
  )
}
