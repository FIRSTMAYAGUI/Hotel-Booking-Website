import React from 'react'
import Video from "../assets/images/luxury.mp4"

export default function IntroVideo() {
  return (
    <div className='h-[100%] relative bg-amber-400'>
      <div className='flex flex-col gap-[20px] h-[100%] w-[70%] bg-darkblue text-white p-20'>
        <h2 className='text-amber-400'>INTRO VIDEO</h2>
        <p className='text-5xl w-[500px]'>Meet With Our Luxury Place</p>
        <p className='w-[400px]'>
            Whether you're seeking a cozy and exclusive hideaway or an immersive
            journey beneath the surface, Hotel Miranda promises to be an
            unforgettable stay, where the depths of comfort and excitement await
            your arrival.
        </p>
        <button className='bg-amber-400 w-32 p-2 rounded'>Book Now</button>
      </div>
      <div className='w-[420px] h-[180px] absolute left-[50%] top-24'>
        <video src={Video} autoPlay muted loop></video>
      </div>
    </div>
  )
}
