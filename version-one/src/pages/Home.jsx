import React from 'react'
import Nav from "../components/Nav";
import hero from "../pages/Assets/africhow banner.png";

const Home = () => {
  return (
    <div className='lg:hidden w-full bg-green-200 min-h-screen bg-opacity-25'>
        <Nav />
        <div className='snap-y snap-mandatory h-screen relative'>
            <section className='h-screen flex flex-col snap-start justify-center items-center'>
                <img src={hero} alt="" srcset="" className='w-full -top-8 md:hidden' />
                <div className='text-center absolute bottom-80 px-12'>
                    <h1 className='text-5xl font-black mt-4'>Unlock <br /> Your <span className='italic'>ideal</span> Audience </h1>
                    <button className='bg-black text-base text-green-200 py-2 px-6 font-black mt-4 pointer'>Get Started Today</button>
                </div>
            </section>
            
            <section className='h-screen flex justify-center items-center snap-start bg-red-200'>
                <h3 className='bg-red-200'>Second Page</h3>
            </section>
            <section className='h-screen flex justify-center items-center snap-start bg-orange-200'>
                <h3 className='bg-green-200'>Third Page</h3>
            </section>
            <section className='h-screen flex justify-center items-center snap-start bg-purple-200'>
                <h3 className='bg-red-200'>Fourth Page</h3>
            </section>
        </div>
        
    </div>
  )
}

export default Home