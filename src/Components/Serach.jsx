import React from 'react'
import { RiCustomerService2Line } from "react-icons/ri";
import { MdTravelExplore } from "react-icons/md";
const Serach = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>LUXURAY INCLUDED VACTIONS FOR TWO PEOPLE</h2>
                <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan consectetur fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin lectus dolor, pellentesque non dictum convallis, suscipit et urna. In purus dolor, pellentesque sed leo a, fringilla fermentum enim. Nulla cursus mauris a magna placerat luctus. Nunc tristique tempor urna in mollis. Praesent hendrerit fermentum orci, non suscipit turpis. Quisque convallis vel mi ac convallis. Praesent laoreet sapien nec eros lacinia, sed varius nisi malesuada. Duis in lorem sed enim semper pellentesque vel at justo. Donec a arcu magna. Suspendisse tempus magna metus, eget ultrices sapien vestibulum ut. Praesent pretium ac enim sed convallis. </p>
                
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
             <div className='flex flex-col lg:flex-row items-center text-center'>
                <button> <RiCustomerService2Line size={50}/> </button>
                <div>
                    <h3 className='py-2'>LEADING SERVICE</h3>
                    <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                <button> <MdTravelExplore size={50}/> </button>
                <div>
                    <h3 className='py-2'>AUTOMATED BOOKINGS</h3>
                    <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                </div>
                </div>
            </div>
            </div>
            <div>

            
        <div className='border text-center'> 
            <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
            <p className='py-4'>12 HOURS LEFT</p>
            <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
             </div>
             <form className='w-full '>
                <div className='flex flex-col my-2'>
                    <label>Destination</label>
                    <select className='border rounded-md p-2'>
                        <option> Grand Antigua</option>
                        <option> Key West</option>
                        <option> Maldives</option>
                        <option> Cozumel</option>
                       
                    </select>
                </div>
                <div className='flex flex-col my-4'>
                    <label> Check-In</label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
                <div className='flex flex-col my-2'>
                    <label> Check-Out</label>
                    <input className='border rounded-md p-2' type="date" />
                </div>
                <button className='w-full my-4'>Rates & Availbilities</button>
             </form>

    </div>
    
    </div>
    
  )
}

export default Serach