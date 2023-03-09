import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [ dropMenu, setDropMenu ] = useState(false)
    const [ color, setColor ] = useState('transparent')
    const [ textColor, setTextColor ] = useState('black')
    const [ backdrop, setBackdrop ] = useState('')
    const [ shadow, setShadow ] = useState('')
    

    const handleClick = () => {
        setDropMenu(!dropMenu)
    }

    useEffect(() =>{
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('rgba(0,0,0,0.0.5')
                setTextColor('black')
                setBackdrop('blur(20px)')
                setShadow('0 20px 30px rgba(0,0,0,0.15)')
            } else {
                setColor('transparent')
                setTextColor('black')
                setBackdrop('')
                setShadow('')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])



  return (
    <div style={{backgroundColor: `${color}`, backdropFilter: `${backdrop}`, boxShadow: `${shadow}`}} className='fixed w-full flex justify-between items-center p-6 ease-in duration-200'>

    <div>
        <h1 className='invisible sm:visible sm:text-lg font-semibold'>Logo Here</h1>
    </div>
    
    <div>
        <ul style={{color:`${textColor}`}} className='hidden sm:flex space-x-8 sm:text-[1.5rem] md:text-[1.7rem] font-semibold font-dark tracking-wider'>
            <li className='hover:scale-95 transition duration-300'>
                <Link href='/home' className='text-stone-700 hover:text-[#A45483] transition duration-300'>Home</Link>
            </li>
            <li className='hover:scale-95 transition duration-300'>
                <Link href='/about' className='text-stone-700 hover:text-[#A45483] transition duration-300'>About</Link>
            </li>
            <li className='hover:scale-95 transition duration-300'>
                <Link href='/templates' className='text-stone-700 hover:text-[#A45483] transition duration-300'>Templates</Link>
            </li>
            <li className='hover:scale-95 transition duration-300'>
                <Link href='/blog' className='text-stone-700 hover:text-[#A45483] transition duration-300'>Blog</Link>
            </li>
            <li className='hover:scale-95 transition duration-300'>
                <Link href='/contact' className='text-stone-700 hover:text-[#A45483] transition duration-300'>Contact</Link>
            </li>
        </ul>
    </div>

    
    <div className='sm:hidden'>
        <button onClick={handleClick} className='border-2 border-black py-2 px-2 rounded-full'>
        {dropMenu ? null : <AiOutlineMenu size={25}/>}
        </button>
    </div>

    {/* mobile menu */}

    <div className={dropMenu ? 'sm:hidden absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center text-center w-full h-screen bg-white ease-in duration-300 tracking-widest' : 'sm:hidden absolute top-0 bottom-0 left-[-1000px] right-0 flex justify-center items-center text-center w-full h-screen bg-white ease-in duration-300' }>

    <button onClick={handleClick} className='border-2 border-black py-2 px-2 rounded-full absolute top-[30px] right-[30px]'>
        {dropMenu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/>}
    </button>
        
        
        <ul className='space-y-5 text-[2rem] font-dark'>
            <li className='active:scale-95 transition duration-150'>
                <Link href='/home' className='hover:text-[#A45483] transition duration-300'>Home</Link>
            </li>
            <li className='active:scale-95 transition duration-150'>
                <Link href='/about' className='hover:text-[#A45483] transition duration-300'>About</Link>
            </li>
            <li className='active:scale-95 transition duration-150'>
                <Link href='/templates' className='hover:text-[#A45483] transition duration-300'>Templates</Link>
            </li>
            <li className='active:scale-95 transition duration-150'>
                <Link href='/blog' className='hover:text-[#A45483] transition duration-300'>Blog</Link>
            </li>
            <li className='active:scale-95 transition duration-150'>
                <Link href='/contact' className='hover:text-[#A45483] transition duration-300'>Contact</Link>
            </li>
        </ul>
    </div>

    
    
    

       
    
    


    
    
    </div>
  )
}

export default Navbar