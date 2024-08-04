import React from 'react'
import { FaStar } from "react-icons/fa";
import img from '../../assets/img/avataaars.svg'
export default function Home() {
  return (
    <div className='min-h-screen bg-teal-600 flex justify-center items-center text-center'>
      <div>
        <div className='flex justify-center items-start'>
        <img src={img}  className='w-52' alt="" />
        </div>
        <h1 className=' size text-white font-extrabold mb-2'>START FRAMEWORK</h1>
        <div className=" relative flex justify-center items-center mb-2">
        <div className="star text-xl relative">
          <span className="text-white star-icon">{<FaStar />}</span>
        </div>
      </div>
        <p className=' text-white text-lg'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
}
