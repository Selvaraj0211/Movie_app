import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WatchlistContext } from '../context/WatchlistContext'

const Navbar = () => {
  const { watchlist } = useContext(WatchlistContext)

  return (
    <nav className='bg-red-400 p-4 flex justify-between fixed w-full top-0 text-white z-10'>
      <Link className='font-bold text-xl' to='/' >Movie App</Link>
      <div className=''>
      <Link className='font-bold px-5' to='/downloads'>Downloads</Link>

      <Link className='font-bold' to='/Watchlist' >Watch list({watchlist.length})</Link>
      </div>
    </nav>
  )
}

export default Navbar