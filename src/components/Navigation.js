import React from 'react'
import { NavLink } from 'react-router-dom'
import FooterTags from './FooterTags'

const Navigation = ({ isOpen }) => {
  return (
    <>
    <ul
      className={`text-white flex justify-evenly 
       rounded-lg py-4 lg:py-0
       ${isOpen ? "flex-col px-0 gap-5 pl-2" : "bg-gradient-to-r from-transparent via-white/10 to-white/10 w-[900px] px-20 backdrop-blur-2xl"} 
       `}>
      {['/', '/destination', '/crew', '/technology'].map((path, index) => (
        <li key={path} className='uppercase tracking-wider text-sm [&>a>span]:text-white lg:py-8 py-2'>
          <NavLink
            className={({ isActive }) => `
            flex gap-3 
            ${isActive ? "text-white text-slate-100 !important " : "text-slate-400"}
            hover:text-white
            transition-all duration-300  
          `}
            to={path}
          >
            <span className='font-bold'>0{index}</span> {path === '/' ? 'Home' : path.slice(1)}
          </NavLink>
        </li>
      ))}
    </ul>
    <footer className='lg:hidden fixed bottom-0 left-0 right-0 z-40 w-full flex flex-col text-center p-4 overflow-y-auto transition-all duration-300 ease-in-out backdrop-blur-md'>
      <FooterTags />
    </footer>
    </>
  )
}

export default Navigation