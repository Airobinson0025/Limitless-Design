import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchInput = ({placeholder}) => {

    const [ searchInput, setSearchInput ] = useState('')

    const resetInput = () => {

        setSearchInput('')

    }




  return (
    <div className='flex items-center justify-between border-2 border-gray-300 py-2 px-2 rounded-full min-w-[260px] sm:w-[500px] '>
    <input 
    type='text'
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
    placeholder={ placeholder || 'Search Post Title' }
    className='flex-grow bg-transparent outline-none text-md text-grey-600 placeholder-gray-400'
    />
    <button 
    onClick={resetInput} 
    className='bg-neutral-300 rounded-full px-[8px] py-[8px]'>
       <AiOutlineSearch size={20} color='#6b7280' />
    </button>
  </div>
  )
}

export default SearchInput