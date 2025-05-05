import React from 'react'
import RoomOne from "../assets/images/room-1.jpg"

export default function CardPrice(props) {
  return (
    <div className='price-card-container w-[380px] relative'>
      <img src={props.img} alt="room1" className='shadow-2xl'/>
      <div className='price-container flex items-center justify-around m-auto w-[90%] h-[90px] px-2 absolute bg-white left-[5%] right-[8%] top-52 shadow rounded'>
        <div>
          <h2 className='font-bold'>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className='text-amber-400'>{props.price}</div>
      </div>
    </div>
  )
}
