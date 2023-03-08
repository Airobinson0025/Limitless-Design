import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [ dropMenu, setDropMenu ] = useState(false)

    const handleClick = () => {
        setDropMenu(!dropMenu)
    }



  return (
    <div className='fixed w-full flex justify-between items-center p-8'>

    <div>
        <h1 className='invisible sm:visible sm:text-lg font-semibold'>Logo Here</h1>
    </div>
    
    <div>
        <ul className='hidden sm:flex space-x-8 sm:text-[1.5rem] md:text-[1.8rem] font-semibold font-dark tracking-wider'>
            <li className='hover:scale-90 transition duration-200'>
                <Link href='/' className='hover:text-[#A45483] transition duration-200'>Home</Link>
            </li>
            <li className='hover:scale-90 transition duration-200'>
                <Link href='/about' className='hover:text-[#A45483] transition duration-200'>About</Link>
            </li>
            <li className='hover:scale-90 transition duration-200'>
                <Link href='/templates' className='hover:text-[#A45483] transition duration-200'>Templates</Link>
            </li>
            <li className='hover:scale-90 transition duration-200'>
                <Link href='/blog' className='hover:text-[#A45483] transition duration-200'>Blog</Link>
            </li>
            <li className='hover:scale-90 transition duration-200'>
                <Link href='/contact' className='hover:text-[#A45483] transition duration-200'>Contact</Link>
            </li>
        </ul>
    </div>

    
    <div className='sm:hidden'>
        <button onClick={handleClick} className='border-2 border-black py-2 px-2 rounded-full'>
        {dropMenu ? null : <AiOutlineMenu size={25}/>}
        </button>
    </div>

    {/* mobile menu */}

    <div className={dropMenu ? 'sm:hidden absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center text-center w-full h-screen bg-white ease-in duration-300' : 'sm:hidden absolute top-0 bottom-0 left-[-1000px] right-0 flex justify-center items-center text-center w-full h-screen bg-white ease-in duration-300' }>

    <button onClick={handleClick} className='border-2 border-black py-2 px-2 rounded-full absolute top-[30px] right-[30px]'>
        {dropMenu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/>}
    </button>
        
        
        <ul className='space-y-5 text-3xl font-dark'>
            <li className='active:scale-90 transition duration-150'>
                <Link href='/' className='hover:text-[#A45483] transition duration-200'>Home</Link>
            </li>
            <li className='active:scale-90 transition duration-150'>
                <Link href='/about' className='hover:text-[#A45483] transition duration-200'>About</Link>
            </li>
            <li className='active:scale-90 transition duration-150'>
                <Link href='/templates' className='hover:text-[#A45483] transition duration-200'>Templates</Link>
            </li>
            <li className='active:scale-90 transition duration-150'>
                <Link href='/blog' className='hover:text-[#A45483] transition duration-200'>Blog</Link>
            </li>
            <li className='active:scale-90 transition duration-150'>
                <Link href='/contact' className='hover:text-[#A45483] transition duration-200'>Contact</Link>
            </li>
        </ul>
    </div>

    
    
    

       
    
    


    
    
    </div>
  )
}

export default Navbar