import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'

const Navbar = () => {

    const [ dropMenu, setDropMenu ] = useState(false)
    const [ color, setColor ] = useState('transparent')
    const [ textColor, setTextColor ] = useState('black')
    const [ backdrop, setBackdrop ] = useState(true)
    const [ shadow, setShadow ] = useState(true)
    
    
    

    const handleClick = () => {
        setDropMenu(!dropMenu);


    }
    

    
    useEffect(() =>{
        const changeColor = () => {
            if(window.scrollY >= 20) {
                setColor('#f5f5f4')
                setTextColor('black')
                setBackdrop('blur(20px)')
                setShadow('0 20px 30px rgba(0,0,0,0.1)')
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
    <div style={{backgroundColor: `${color}`, backdropFilter: `${backdrop}`, boxShadow: `${shadow}`}} className='fixed w-full flex justify-between items-center ease-in duration-200 rounded-md p-2'>

    <div className='pl-2'>
        <Link href='/' className='w-auto h-auto'>
            <Image src='/LimitlessLogo2.png' alt='logo' width={90} height={80} />
        </Link>
    </div>
    
    <motion.div initial='hidden' animate='visible' variants={{
        hidden: {
            scale: .9,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.0
            }
        }
    }} >
        <ul style={{color:`${textColor}`}} className='hidden sm:flex space-x-8 sm:text-[1.5rem] md:text-[1.7rem] font-bold font-dark tracking-wider sm:pr-6 sm:ml-10'>
            <motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} className='hover:scale-95 transition duratio200'>
                <Link href='/home' className='text-stone-900 hover:text-[#CC8F98] transition duratio200'>Home</Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} className='hover:scale-95 transition duratio200'>
                <Link href='/about' className='text-stone-900 hover:text-[#CC8F98] transition duratio200'>About</Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} className='hover:scale-95 transition duratio200'>
                <Link href='/gallery' className='text-stone-900 hover:text-[#CC8F98] transition duratio200'>Gallery</Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} className='hover:scale-95 transition duratio200'>
                <Link href='/shop' className='text-stone-900 hover:text-[#CC8F98] transition duratio200'>Shop</Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} className='hover:scale-95 transition duratio200'>
                <Link href='/blog' className='text-stone-900 hover:text-[#CC8F98] transition duratio200'>Blog</Link>
            </motion.li>
            <motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} className='hover:scale-95 transition duratio200'>
                <Link href='/contact' className='text-stone-900 hover:text-[#CC8F98] transition duratio200'>Contact</Link>
            </motion.li>
        </ul>
    </motion.div>

    
    <div className='sm:hidden pr-4'>
        <button onClick={handleClick} className='bg-[#CC8F98] py-2 px-2 rounded-full'>
        {dropMenu ? null : <AiOutlineMenu size={27} color='white'/>}
        </button>
    </div>

    {/* mobile menu */}

    <div className={dropMenu ? 'sm:hidden absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center text-center text-[#CC8F98] w-full h-screen bg-white ease-in-out duratio200 tracking-widest' : 'sm:hidden absolute top-0 bottom-0 left-[-800px] right-0 flex justify-center items-center text-center text-[#CC8F98] w-full h-screen bg-white ease-out duratio200' }>

    <button onClick={handleClick} className='bg-[#CC8F98] py-2 px-2 rounded-full absolute top-[20px] right-[25px]'>
        {dropMenu ? <AiOutlineClose size={27} color='white'/> : null }
    </button>
        
        
        <ul className='space-y-4 text-[2.4rem] font-dark'>
            <li className='active:scale-95 transition duration-150'>
                <Link href='/home' onClick={handleClick} className='hover:text-[#CC8F98] transition duratio200'>Home</Link>
            </li>
            <li className='active:scale-95 transition duration-150'>
                <Link href='/about' onClick={handleClick} className='hover:text-[#CC8F98] transition duratio200'>About</Link>
            </li>
            <li className='active:scale-95 transition duration-150'>
                <Link href='/gallery' onClick={handleClick} className='hover:text-[#CC8F98] transition duratio200'>Gallery</Link>
            </li>
            <li className='active:scale-95 transition duration-150'>
                <Link href='/shop' onClick={handleClick} className='hover:text-[#CC8F98] transition duratio200'>Shop</Link>
            </li>
            <li className='active:scale-95 transition duration-150'>
                <Link href='/blog' onClick={handleClick} className='hover:text-[#CC8F98] transition duratio200'>Blog</Link>
            </li>
            <li className='active:scale-95 transition duration-150'>
                <Link href='/contact' onClick={handleClick} className='hover:text-[#CC8F98] transition duration-200'>Contact</Link>
            </li>
           
        </ul>

       
        
        
    </div>

    
    
    

       
    
    


    
    
    </div>
  )
}

export default Navbar