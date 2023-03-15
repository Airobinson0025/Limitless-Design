import React from 'react'


const SinglePost = ({ title, content, createdAt}) => {
  return (
    <div className='flex flex-col space-y-4'>
        
        <h1 className='pl-4'>{title}</h1>
        <p className='px-4'>{content}</p>
        <div className='text-right'>
           <button className='font-dark font-bold text-lg text-white py-1 px-3 mr-4 bg-[#A24857] rounded-lg'>view post</button>
        </div>
    </div>
  )
}

export default SinglePost


  