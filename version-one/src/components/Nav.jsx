import React from 'react'
import HamBurger from "../assets/hamburger.svg";
import Avatar from "../assets/avatar.png";
import Close from "../assets/hamburger close.svg";
import { Link } from "react-router-dom";

const Nav = ({ toggleMenu, menuOpen }) => {
  return (
    <div className='lg:hidden px-10 py-6 bg-green-200 text-white flex justify-between items-center absolute top-0 right-0 left-0 z-10 bg-transparent'>
      <h3 className='text-xl font-black text-green-100'>africhow</h3>
      <div className='flex gap-6 pointer'>
        <Link to="/profile">
          <img src= {Avatar} alt="" srcset="" className='w-8 cursor-pointer' />
        </Link>
        <img src= {HamBurger} alt="" srcset="" className='w-8 cursor-pointer' onClick={toggleMenu} />
        
      </div>

      {/* Close button */}
      {menuOpen && (
        <div className='absolute top-4 right-4 cursor-pointer' onClick={toggleMenu}>
          <div className='h-3 w-10 py-2 pr-4'>
            <img src= { Close } alt="" srcset="" className='z-30 relative stroke-current' />
          </div>
        </div>
      )}

      
      {/* full screen menu */}
      {menuOpen && (
        <div className='fixed top-0 left-0 right-0 bottom-0 pt-16 bg-green-800 flex flex-col items-center text-center justify-center'>
          <ul className='text-4xl font-semibold mb-10'>
            <li className='my-4 cursor-pointer mb-10' onClick={toggleMenu}>
              <a href='#chow-community'>Chow Community</a>
            </li>
            <li className='my-4 cursor-pointer mb-10' onClick={toggleMenu}>
              <a href='#faqs'>FAQs</a>
            </li>
            <li className='my-4 cursor-pointer mb-10' onClick={toggleMenu}>
              <a href='#order-management'>Order Management</a>
            </li>
            <li className='my-4 cursor-pointer mb-10' onClick={toggleMenu}>
              <a href='#sales-analytics'>Sales Analytics</a>
            </li>
          </ul>
          <div className='mt-auto p-4 flex items-center gap-4'>
            <p id='subscribe' className='text-xl font-semibold'>Join Our Mailing List</p>
            <form>
              <button className='bg-green-200 text-black font-bold py-2 px-4' type='submit'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav