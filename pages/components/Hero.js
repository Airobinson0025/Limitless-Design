import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>

        
        <div className='text-center sm:text-left sm:mt-96 sm:ml-96 space-y-5'>
            <h1 className='text-3xl sm:text-5xl font-playfair tracking-wide'>Limitless Design</h1>
            <p className='font-redhat text-md sm:text-lg tracking-[4px]'>by BRI-ANNA JOHNSON</p>
            <button className='font-redhat text-md sm:text-lg border-2 border-black rounded-md py-2 px-4 tracking-wider hover:border-transparent hover:text-white hover:bg-[#A45483] transition hover:translate-y-1 active:scale-90 duration-300'>Book Appointment</button>
        </div>


    </div>
  )
}

export default Hero