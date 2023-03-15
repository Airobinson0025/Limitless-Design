import React from 'react'


const SinglePost = ({ title, content, createdAt}) => {
  return (
    <div className='flex flex-col space-y-4'>
        
        <h1 className='pl-4'>{title}</h1>
        <p className='px-4'>{content}</p>
        
    </div>
  )
}

export default SinglePost


  