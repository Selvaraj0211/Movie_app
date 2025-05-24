import React from 'react'
import Genredrop from '../componants/Genredrop'

const Watchlist = () => {
  return (
    <div className='p-4 pt-16'>
      <input type="text" placeholder='Search Movies...' 
      className='p-2 w-3/4 md:w-1/2 border border-gray-600 bg-blue-900 opacity-80 backdrop-blur-md text-white fixed top-16 left-1/2 -translate-x-1/2 z-10'/>
      <div className='mt-15 flex justify-center'>
        <Genredrop/>
      </div>
      </div>
  
    )
}

export default Watchlist