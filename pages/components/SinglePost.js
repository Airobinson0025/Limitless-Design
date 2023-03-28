import React from 'react'
import axios from 'axios'
import { NextSeo } from 'next-seo'



const SinglePost = ({post, posts, setPosts, title, content, author}) => {

const handleClick = async (e) => {
      
      e.preventDefault()
      const result = await axios.delete(`/api/posts/${post.id}`)
      setPosts(posts.filter((post) => post.id !== result.data.id))
      
    }

return (
    <>
    <NextSeo 
    title='Blog'
    description='Limitless Design blog page' />
    
    <div className='flex flex-col space-y-4 bg-stone-50 py-10 mx-4 pt-10 my-6 sm:my-8 first-of-type:mt-8 sm:first-of-type:mt-12 w-[360px] sm:w-[500px] md:w-[650px] lg:w-[1000px] xl:w-[1100px] shadow-md shadow-zinc-500 rounded-lg'>
        
        <h1 className='font-redhat text-3xl md:text-4xl text-[#CC8F98] pl-4'>{title}</h1>
        <p className='font-dark text-xl md:text-[1.4rem] tracking-wide px-4 max-h-[200px] text-ellipsis overflow-hidden py-6'>{content}</p>
        <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-between px-6 pt-4 space-y-3'>
           <p className='font-dark text-gray-500 text-xl md:text-2xl'>Published by: {author.name}</p>
           <div className='space-x-3'>
               <button className='font-redhat font-bold text-[1rem] text-white py-1 px-3 bg-gray-400  border-2 hover:bg-gray-500 hover:text-white hover:border-transparent rounded-lg transition duration-500'>View post</button>
               <button
               onClick={handleClick}
               className='font-redhat font-bold text-[1rem] text-white py-1 px-3 bg-rose-400  border-2 hover:bg-rose-500 hover:text-white hover:border-transparent rounded-lg transition duration-500'>Delete</button>
           </div>
        </div>
    
    </div>
    </>
  )
}

export default SinglePost


  