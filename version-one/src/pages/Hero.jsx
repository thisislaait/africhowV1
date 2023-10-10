import React from 'react';
import hero from '../pages/Assets/hero-banner.png';

const Hero = () => {
  return (
    <div className='snap-y snap-mandatory h-screen relative'>
      <section className='h-screen flex flex-col snap-start items-center relative overflow-hidden'>
        <img src={hero} alt='' className='w-full -top-8 justify-center' />
        <div className='absolute bottom-28 px-12'>
          <h1 className='text-5xl font-black -mt-10 text-white md:text-center md:text-7xl px-2'>
            Connect with <br /> <span className='italic'>hungry</span> Customers
          </h1>
          <div className='flex justify-center md:justify-center'>
            <button className='text-xl border-b-2 border-green-200 text-green-200 py-2 px-2 font-black mt-4 pointer'>
              Get Started Today <span> &rarr; </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;