import React from 'react'
import SinglePost from './components/SinglePost'
import { PrismaClient } from '@prisma/client'
import SearchInput from './components/SearchInput'





const blog = ({posts}) => {

  return (
    <div className='pt-44'>
      
      
      <div className='sm:ml-12 mb-24'>
        <h1 className='font-vibes text-center sm:text-left text-7xl md:text-8xl text-[#A24857]'>Blog</h1>
      </div>

      

      <div className='flex justify-between items-center px-2 sm:px-6'>

        <div className='hidden md:inline font-dark text-6xl text-stone-700'>
          <h1 className='text-[#A24857]'>Posts</h1>
        </div>
        
        
       <div className='px-2'>
        <SearchInput />
       </div>

        <button className='font-dark font-bold text-xl md:text-2xl text-[#A24857] bg-white border-2 border-[#A24857] py-1 px-2 rounded-lg hover:bg-[#A24857] hover:text-white hover:translate-y-1 hover:scale-95 transition duration-300'>new post</button>
      
      </div>

     <div className='flex flex-col mt-14'> 
    {posts.map(post => (

      <SinglePost 
      key={post.id}
      title={post.title}
      content={post.content}
      />

    ))}
    </div>
    
    
    </div>
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
    orderBy: {

      createdAt: 'desc'
    
    }
  })
  return {
    props: JSON.parse(safeJsonStringify({posts}))
  }
}
