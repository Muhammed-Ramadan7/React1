import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMonetizationOn } from "react-icons/md";

export default function Footer() {
  return (
    
    <div className=''>
      <div className='flex flex-wrap justify-around items-baseline max-md:flex-col max-md:justify-center max-md:items-center  gap-y-16 text-white bg-gray-800 text-center p-20'>
    <div >
      <h2 className='text-3xl  font-bold mb-3'>LOCATION</h2>
      <p>2215 John Daniel Drive</p>
      <span>Clark, MO 65243</span>
    </div>
    <div className=' ms-32 max-md:ms-0'>
      <h2 className='text-3xl font-bold mb-5'>AROUND THE WEB</h2>
      <ul className='flex justify-center items-center '>
        <li className='me-5 text-lg p-2 rounded-full border-2 hover:bg-teal-400 transition-all hover:text-gray-800'> <FaFacebook/> </li>
        <li className='me-5 text-lg p-2 rounded-full border-2 hover:bg-teal-400 transition-all hover:text-gray-800'> <FaTwitter/> </li>
        <li className='me-5 text-lg p-2 rounded-full border-2 hover:bg-teal-400 transition-all hover:text-gray-800'> <FaLinkedin/> </li>
        <li className='me-5 text-lg p-2 rounded-full border-2 hover:bg-teal-400 transition-all hover:text-gray-800'> <MdOutlineMonetizationOn/> </li>
      </ul>
    </div>
    <div>
      <h2 className='text-3xl font-bold mb-3'>ABOUT FREELANCER</h2>
      <p>Freelance is a free to use,<br /> licensed Bootstrap theme created by Route</p>
    </div>
      </div>
      <div className='bg-gray-900 text-white flex justify-center items-center p-3'>
        <p>Copyright © Your Website 2021</p>
      </div>
    </div>
  )
}
