import React from 'react'
import HamBurger from "../assets/Hamburger Menu.svg";

const Nav = () => {
  return (
    <div className='lg:hidden px-10 py-6 bg-green-200 text-white flex justify-between items-center'>
      <h3 className='text-xl font-bold text-black'>africhow</h3>
      <div className='flex gap-6'>
        <button className='bg-black text-green-200 py-2 px-6 font-bold'>Get Started</button>
        <img src= {HamBurger} alt="" srcset="" className='w-10'/>
      </div>
    </div>
  )
}

export default Nav