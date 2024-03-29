import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchInput = ({placeholder}) => {

    const [ searchInput, setSearchInput ] = useState('')

    const resetInput = () => {

        setSearchInput('')

    }




  return (
    <div className='flex items-center justify-between bg-white border-[2px] border-stone-800 py-2 pl-4 p-2 rounded-full min-w-[260px] sm:w-[500px] '>
    <input 
    type='text'
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
    placeholder={ placeholder || 'Search by Title' }
    className='flex-grow bg-transparent outline-none text-md text-grey-600 placeholder-gray-400'
    />
    <button 
    onClick={resetInput} 
    className='bg-[#CC8F98] rounded-full px-[8px] py-[8px]'>
       <AiOutlineSearch size={22} color='white' />
    </button>
  </div>
  )
}

export default SearchInput