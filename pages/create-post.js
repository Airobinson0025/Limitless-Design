import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { motion } from 'framer-motion'
import axios from 'axios'


const CreatePost = () => {

    const router = useRouter();


    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await axios.post('/api/posts/posts', {title, content})
        // setPosts([...posts, result.data]);

        router.push('/blog')


    }

    return (
    <div className='custom-img'>
    <motion.div initial='hidden' animate='visible' variants={{
        hidden: {
            scale: .9,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    }} className='flex justify-center items-center h-screen text-center bg-transparent ease-in duration-300'>
        <form onSubmit={handleSubmit} className='flex flex-col bg-white rounded-xl py-8 px-4 sm:px-8 space-y-4 shadow-lg shadow-gray-400 w-[355px] md:w-[730px] mx-2'>
           <h2 className='font-redhat text-2xl md:text-3xl text-stone-800 mb-8'>Create New Post</h2>
           
           <label 
           htmlFor='post-title'
           className='text-left text-xl text-[#CC8F98] font-dark'>Post Title</label>
           <input 
           htmlFor='post-title' 
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           placeholder='Enter a title'
           className='py-2 pl-2 border-2 border-gray-300 rounded-lg'/>
           <label 
           htmlFor='post-content'
           className='text-left text-xl text-[#CC8F98] font-dark'
           >What would you like to say?</label>
           <textarea
           rows={7} 
           value={content}
           onChange={(e) => setContent(e.target.value) }
           placeholder='Enter text'
           className='py-2 pl-2 border-2 border-gray-300 rounded-lg'></textarea>
           <button 
           type='submit'
           className='py-2 px-2 font-redhat text-white bg-[#CC8F98] rounded-lg shadow-md shadow-gray-400 active:scale-90 transition duration-75'>Create Post</button>
        </form>
    </motion.div>
    </div>
  )
}

export default CreatePost