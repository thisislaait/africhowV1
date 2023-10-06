import React from 'react'


const Feature_One = () => {
  return (
    <div className='lg:hidden w-full bg-green-200 min-h-screen bg-opacity-25'>
        <div className='snap-y snap-mandatory h-screen relative'>
            <section className='h-screen flex justify-center items-center snap-start bg-red-200'>
                <h3 className='bg-red-200'>Second Page</h3>
            </section>
        </div>
    </div>
  )
}


export default Feature_One