import React from 'react'

export default function AboutText() {
  return (
    <div className='bg-[url("./assets/images/about-bg.jpg")] bg-cover bg-center h-[95%] w-[75%] shadow-2xl before:absolute before:bg-[#ffffffd8] before:w-[74.6%] before:h-[80.9%]'>
      <div className='flex flex-col items-start gap-6 h-[60%] w-[70%] m-auto pt-3.5 relative z-10'>
        <h1>
            ABOUT US
        </h1>
        <p className='text-4xl leading-12.5 font-medium h-24 w-[60%]'>Discover Our Underground</p>
        <p className='text-left w-[90%]'>
            Welcome to a   hidden realm of extraordinary accommodations where luxury, comfort, and adventure converge. Our underground hotels offer an unparalleled escape from the ordinary, inviting you to explore a subterranean world of wonders.
        </p>
        <button className='text-white bg-amber-400 w-30 h-9 rounded'>Book Now</button>
      </div>
    </div>
  )
}
