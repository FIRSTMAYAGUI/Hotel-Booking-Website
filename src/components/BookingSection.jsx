import React from 'react'

export default function BookingSection() {
  return (
    <div className='flex justify-center items-center gap-7 h-full w-full'>
      <div className='h-[5rem] w-[280px] flex flex-col justify-around'>
        <h2>Arrival Date</h2>
        <input type="text" name="arrival-date" placeholder='Your arrival Date' className='w-full pl-1.5 py-1.5 outline-0 border-b-1 border-[#808080d2]'/>
      </div>
      <div className='h-[5rem] w-[280px] flex flex-col justify-around'>
        <h2>Departure Date</h2>
        <input type="text" name="depature-date" placeholder='Your Depature Date' className='w-full pl-1.5 py-1.5 outline-0 border-b-1 border-[#808080d2]'/>
      </div>
      <div className='h-[5rem] w-[280px] flex flex-col justify-around'>
        <h2>Guests</h2>
        <input type="text" name="number-of-guests" placeholder='No of Guests' className='w-full pl-1.5 py-1.5 outline-0 border-b-1 border-[#808080d2]'/>
      </div>
      <button className='bg-amber-400 w-[175px] h-8 rounded'>Check Availability</button>
    </div>
  )
}
