import React from 'react'

export default function Hero() {
  return (
    <div className='flex flex-col gap-2 w-[85%] m-auto h-[21rem] text-white relative z-10'>
      <small>ABOUT US</small>
      <p className='w-[420px] text-7xl leading-20'>The Perfect Base For You</p>
      <div className='h-24 flex items-center'>
          <button className='w-40 py-1.5 bg-amber-400 rounded'>Take A Tour</button>
      </div>
    </div>
  )
}
