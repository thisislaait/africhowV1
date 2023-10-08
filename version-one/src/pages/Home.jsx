import React, {useState} from 'react'
import Nav from "../components/Nav";
import hero from "../pages/Assets/africhow banner.png";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='lg:hidden w-full bg-green-200 min-h-screen bg-opacity-25'>
        <Nav toggleMenu={toggleMenu} menuOpen={menuOpen} />
        <div className='snap-y snap-mandatory h-screen relative'>
            <section className='h-screen flex flex-col snap-start justify-center items-center relative overflow-hidden'>
                <img src={hero} alt="" srcset="" className='w-full -top-8 md:hidden ' />
                <div className='text-center absolute bottom-72 px-12'>
                    <h1 className='text-5xl font-black mt-4'>Unlock <br /> Your <span className='italic'>ideal</span> Audience </h1>
                    <div>
                      <button className='bg-black text-xl text-green-200 py-2 px-6 font-black mt-4 pointer'>Get Started Today <span> &rarr; </span></button>
                    </div>
                </div>
            </section> 
        </div>
    </div>
  )
}

export default Home