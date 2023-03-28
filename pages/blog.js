/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SinglePost from './components/SinglePost'
import SearchInput from './components/SearchInput'


const blog = () => {


 const [ posts, setPosts ] = useState([])

 useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts/posts')
      const posts = await res.json()
      setPosts(posts)
    }
    fetchPosts()
 }, []);



  return (
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
  }} className='pt-24'>
      
      
      <div className='mx-4 mt-2 mb-4'>
        <h1 className='font-vibes text-center text-8xl md:text-9xl text-[#CC8F98] custom-img py-12 shadow-md border-[3px] border-stone-800 rounded-lg bg-cover'>Blog</h1>
      </div>

      

      <div className='flex justify-between items-center px-2 sm:px-6 custom-img border-[3px] border-stone-800 rounded-t-lg py-4 mx-4'>

        <div className='hidden md:inline font-redhat text-5xl text-stone-700'>
          <h1 className='text-stone-800 text-outline'>Posts</h1>
        </div>
        
        
       <div className='px-2'>
        <SearchInput />
       </div>

        <Link 
        href='/create-post'
        className='font-redhat font-bold text-[.55rem] md:text-[1.1em] text-[#CC8F98] bg-white border-2 border-[#CC8F98] py-2 px-2 rounded-lg hover:bg-[#CC8F98] hover:border-transparent hover:text-white hover:translate-y-1 hover:scale-95 transition duration-500'>New Post</Link>

      </div>

      

     <div className='flex flex-col justify-center items-center mb-8 mx-4  sm:bg-gray-100 sm:rounded-b-lg  sm:border-x-[3px] sm:border-b-[3px] sm:border-stone-800'> 
    {posts?.map(post => (

      <SinglePost 
      post={post}
      posts={posts}
      setPosts={setPosts}
      key={post.id}
      title={post.title}
      content={post.content}
      author={post.author}
      />

    ))}
    </div> 
    
    
    </motion.div>
  )
}

export default blog

