import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>

        
        <motion.div initial='hidden' animate='visible' variants={{
        hidden: {
            scale: .8,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.0
            }
        }
    }} className='text-center text-stone-900 sm:text-left sm:mt-96 sm:ml-96 space-y-5'>
            <h1 className='text-3xl sm:text-5xl font-playfair tracking-wide'>Limitless Design</h1>
            <p className='font-redhat text-md text-[#800020] sm:text-md tracking-[5px]'>GRAPHIC DESIGN COMPANY</p>
            <motion.button 
            whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} className='font-redhat text-md sm:text-lg border-[3px] border-black rounded-md py-2 px-4 tracking-wider hover:border-transparent hover:text-white hover:bg-[#800020] transition duration-300'>Book Appointment</motion.button>
        </motion.div>


    </div>
  )
}

export default Hero