import React from 'react'
import Nav from "../components/Nav";
import hero from "../pages/Assets/Hero Image.jpg";

const Home = () => {
  return (
    <div className='lg:hidden w-full bg-green-200 min-h-screen' style={{backgroundImage: `url(${hero})`}} >
        <Nav />
        <div className='snap-y snap-mandatory h-screen'>
            <section className='h-screen flex flex-col justify-center items-center bg-cover snap-start' style={{backgroundImage: `url(${hero})`}} >
                <h1 className='text-6xl'style={{backgroundImage: `url(${hero})`}} 
                >Hello!</h1>
                <button className='bg-black text-green-200 py-2 px-6 font-bold items-end'>Get Started</button>
            </section>
            
            <section className='h-screen flex justify-center items-center snap-start bg-red-200'>
                <h3 className='bg-red-200'>Second Page</h3>
            </section>
            <section className='h-screen flex justify-center items-center snap-start bg-red-200'>
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