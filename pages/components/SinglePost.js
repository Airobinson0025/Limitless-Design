import React from 'react'
import { NextSeo } from 'next-seo'


const SinglePost = ({ title, content, author}) => {
  
  
  return (
    <>
    <NextSeo 
    title='Blog'
    description='Limitless Design blog page' />
    
    <div className='flex flex-col space-y-4 border-[3px] border-[#CC8F98] py-10 mx-4 pt-10 w-[370px] sm:w-[600px] md:w-[750px] lg:w-[1000px] xl:w-[1100px] shadow-lg shadow-[#CC8F98] rounded-lg'>
        
        <h1 className='font-redhat text-3xl md:text-4xl text-stone-800 pl-4'>{title}</h1>
        <p className='font-dark text-xl md:text-[1.4rem] tracking-wide px-4 max-h-[200px] text-ellipsis overflow-hidden py-6'>{content}</p>
        <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-between px-6 pt-4 space-y-3'>
           <p className='font-dark text-gray-600 text-xl md:text-2xl'>Published by: {author.name}</p>
           <button className='font-redhat font-bold text-[1rem] text-white py-1 px-3 bg-gray-400 border-2 hover:bg-stone-800 hover:text-white hover:border-transparent hover:translate-y-1 rounded-lg transition duration-300'>View post</button>
        </div>
    
    </div>
    </>
  )
}

export default SinglePost


  