import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-blue-500 p-4 flex justify-between fixed w-full top-0 text-white z-10'>
        <Link className='font-bold text-xl' to='/' >Movie App</Link>
        <Link className='font-bold' to='/Watchlist' >Watch list(0)</Link>
    </nav>
  )
}

export default Navbar