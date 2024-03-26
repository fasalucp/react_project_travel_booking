import React,{useState} from 'react'
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
    const [nav,setNav]= useState(false)
    const handleNav= ()=>{
        setNav(!nav)
    }
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1>BEACHES.</h1>
        </div>
        <ul className='hidden md:flex cursor-pointer  '>
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
        <div className='hidden md:flex'>
            <CiSearch className='mr-2' size={20}/>
            <MdAccountCircle size={20}/>
        </div>
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <IoMdCloseCircleOutline className='text-black' size={20}/> :<IoMdMenu size={20}/>}
           
        </div>
        <div onClick={handleNav} className={nav ?'absolute text-black left-0 top-0 w-full bg-gray-100 px-4 py-7 flex flex-col':'absolute left-[-100%]'}>
          <ul>
            <h1>BEACHES.</h1>
            <li className='border-b'>Home</li>
            <li className='border-b'>Destination</li>
            <li className='border-b'>Travel</li>
            <li className='border-b'>View</li>
            <li className='border-b'>Book</li>
            <div className='flex flex-col'>
              <button className='my-6'>Serach</button>
              <button>Account</button>
            </div>
            <div className='flex justify-between my-4'>
                <FaFacebook className='icon'/>
                <AiFillInstagram className='icon'/>
                <FaPinterestSquare className='icon'/>
                <FaYoutube className='icon'/>
                <FaSquareTwitter className='icon'/>
                
            </div>
          </ul>
        </div>
    </div>
  )
}

export default Navbar