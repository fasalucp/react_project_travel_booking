import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-5'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-2'>
            <div className='sm:flex text-center justify-between items-center '>
                <h1>BEACHES.</h1>
                <div className='flex justify-between w-full sm:max-w-[280px] my-2'>
                <FaFacebook className='icon'/>
                <AiFillInstagram className='icon'/>
                <FaPinterestSquare className='icon'/>
                <FaYoutube className='icon'/>
                <FaSquareTwitter className='icon'/>
                
                </div>
            </div>
            <div className='flex justify-between'>
                <ul className='lg:flex'>
                    <li>About</li>
                    <li>Partnerships</li>
                    <li>Carrers</li>
                    <li>Newsroom</li>
                    <li>Advertising</li>
                </ul>
                <ul className='text-right lg:flex'>
                <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Footer