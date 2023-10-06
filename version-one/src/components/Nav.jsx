import React from 'react'
import HamBurger from "../assets/hamburger.svg";
import Avatar from "../assets/avatar.png";

const Nav = () => {
  return (
    <div className='lg:hidden px-10 py-6 bg-green-200 text-white flex justify-between items-center absolute top-0 right-0 left-0 z-10 bg-transparent'>
      <h3 className='text-xl font-black text-black'>africhow</h3>
      <div className='flex gap-6 pointer'>
        <img src= {Avatar} alt="" srcset="" className='w-8 pointer'/>
        <img src= {HamBurger} alt="" srcset="" className='w-8 pointer'/>
      </div>
    </div>
  )
}

export default Nav