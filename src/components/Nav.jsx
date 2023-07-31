import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='bg-white'>
        <nav className='container flex justify-between'>
            <div className='flex items-center'>
                <h1 className='text-2xl font-bold text-orange-600'>CraveBite</h1>
            </div>
            <ul className='flex justify-end space-x-8'>
                <li className='py-3'><NavLink className="hover:text-slate-400" to={"/"}>Home</NavLink></li>
                <li className='py-3'><NavLink className="hover:text-slate-400" to={"about"}>About</NavLink></li>
                <li className='py-3'><NavLink className="hover:text-slate-400" to={"blog"}>Blog</NavLink></li>
                <li className='py-3'><NavLink className="hover:text-slate-400" to={"contact"}>Contact</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav