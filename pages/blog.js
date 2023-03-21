/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SinglePost from './components/SinglePost'
import { PrismaClient } from '@prisma/client'
import SearchInput from './components/SearchInput'
import CreatePost from './components/CreatePost'






const blog = ({posts}) => {

  const [ createForm, setCreateForm ] = useState(false)

  const handleClick = () => {
    setCreateForm(!createForm)
  }

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
        <h1 className='font-vibes text-center text-8xl md:text-9xl text-[#CC8F98] custom-img py-12 shadow-lg border-4 border-stone-800 shadow-gray-700 rounded-lg bg-cover'>Blog</h1>
      </div>

      

      <div className='flex justify-between items-center px-2 sm:px-6 bg-stone-800 rounded-lg py-4 mx-4'>

        <div className='hidden md:inline font-redhat text-7xl text-stone-700'>
          <h1 className='text-white text-outline'>Posts</h1>
        </div>
        
        
       <div className='px-2'>
        <SearchInput />
       </div>

        <button 
        onClick={handleClick}
        className='font-redhat font-bold text-[.85rem] md:text-lg text-[#CC8F98] bg-white border-2 border-[#CC8F98] py-1 px-2 rounded-lg hover:bg-[#CC8F98] hover:border-transparent hover:text-white hover:translate-y-1 hover:scale-95 transition duration-300'>New post</button>

        

        {createForm ? 
        <CreatePost 
        posts={posts}
        title={posts.title}
        content={posts.content} /> : null} 

        
      
      </div>

      

     <div className='flex flex-col justify-center items-center my-8'> 
    {posts.map(post => (

      <SinglePost 
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

export async function getServerSideProps() {
  const prisma = new PrismaClient()
  const safeJsonStringify = require('safe-json-stringify')
  const posts = await prisma.post.findMany({
    where: {
      
      published: true
    
    },
    include: {
      author: true
    },
    orderBy: {

      createdAt: 'desc'
    
    }
  })
  return {
    props: JSON.parse(safeJsonStringify({posts}))
  }
}
