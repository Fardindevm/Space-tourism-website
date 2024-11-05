import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Navigation from './Navigation'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className='fixed lg:content-center lg:justify-between lg:content-center py-10 lg:w-full lg:flex'
      style={{ zIndex: 2 }}
    >
      <div className='lg:flex lg:jusitfy-center ml-5'>
        <NavLink to="/" className='content-center'>
          <img
            loading='lazy'
            src='/assets/shared/logo.svg'
            alt='logo'
            className='w-[50px] h-[50px] transition-all duration-200 hover:scale-110'
          />
        </NavLink>
      </div>
      <nav className='hidden lg:flex items-center relative before:absolute before:right-[93%] xl:before:w-[500px] lg:before:w-[150px] before:h-[1px] before:bg-slate-700 before:z-10'>
        <Navigation isOpen={isOpen} />
      </nav>
      {!isOpen &&
        <button className='lg:hidden fixed top-[3.65rem] right-[2.5rem] md:right-[4rem]' onClick={handleNavbar}>
          <img
            loading='lazy'
            src={hamburger} alt={'hamburger'} />
        </button>
      }
      <div
        id="drawer-right-example"
        className={`
          fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto
          transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          w-80 bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-md
          lg:hidden flex flex-col 
        `} aria-labelledby="drawer-right-label">
        <button onClick={handleNavbar}>
          <img
            loading='lazy'
            src={close} alt={'close'} />
        </button>
        <Navigation isOpen={isOpen} />
      </div>
    </header>
  )
}

export default Header
