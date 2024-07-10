import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex text-slate-900 font-extrabold dark:bg-slate-400 bg-amber-400 p-3 lg:text-lg justify-center gap-14'>
      <NavbarItem title='Trending' param='fetchTrending' />
      <NavbarItem title='Top Rated' param='fetchTopRated'/>
    </div>
  )
}
