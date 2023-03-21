import React from 'react'
import { motion } from 'framer-motion'



const CreatePost = ({title, content}) => {

    const handleSubmit = async (data) => {
        
        try {
            const body = data.body
       
            await fetch('http://localhost:5003/publish', {
            
            method: 'POST',
            
            headers: { 'Content-Type' : 'application/json' },
            
            body: JSON.stringify(body)
        });
        
        
        } catch (error) {

            console.log('Error creating post: ' + error.message)
            
        }
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
                duration: 0.75
            }
        }
    }} className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center text-center w-full h-screen bg-transparent ease-in duration-300 '>
        <form type='submit' className='flex flex-col bg-white rounded-xl py-8 px-4 sm:px-8 space-y-4 shadow-lg shadow-gray-400'>
           <h2 className='font-redhat text-2xl text-stone-800 underline mb-8'>Create New Post</h2>
           <label 
           for='post-image' 
           className='text-left text-xl text-[#CC8F98] font-dark'>Choose an image</label>
           <input
           type='file'
           name='Image'
           accept='image/png, image/jpeg, image/jpg' 
           className='py-2 pl-2 border-2 border-gray-300 rounded-lg'/>
           <label 
           for='post-title'
           className='text-left text-xl text-[#CC8F98] font-dark'>Post Title</label>
           <input 
           for='post-title' 
           value={title}
           placeholder='Enter a title'
           className='py-2 pl-2 border-2 border-gray-300 rounded-lg'/>
           <lable 
           for='post-content'
           className='text-left text-xl text-[#CC8F98] font-dark'
           >What would you like to say?</lable>
           <textarea 
           rows={7} 
           value={content}
           placeholder='Enter text'
           className='py-2 pl-2 border-2 border-gray-300 rounded-lg '></textarea>
           <button 
           onSubmit={handleSubmit}
           className='py-2 px-2 font-redhat text-white bg-[#CC8F98] rounded-lg shadow-md shadow-gray-400 active:scale-90 transition duration-75'>Create Post</button>
        </form>
    </motion.div>
  )
}

export default CreatePost