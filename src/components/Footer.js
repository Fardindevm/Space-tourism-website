import React from 'react'
import Arrow from '../assets/shared/up-arrow-svgrepo-com.svg'
import FooterTags from './FooterTags'

export default function Footer({showFooter, setShowFooter}) {

  const handleFooter = () => {
    setShowFooter(!showFooter)
  }

  return (
    <>
    <button 
      className={`hidden lg:block fixed right-[50%] cursor-pointer p-5 z-[400320] transition-all duration-300 ease-in-out ${
        showFooter ? 'bottom-[7.5rem]' : 'bottom-1'
      }`}
      onClick={handleFooter}
    >
      <img 
         className={`w-8 h-8 mx-auto opacity-100 hover:opacity-80 transition duration-300 ease-in-out ${
          showFooter ? 'rotate-180' : ''
        }`} 
        src={Arrow} 
        alt="footer-arrow"
        style={{ filter: 'saturate(0%) brightness(70%) contrast(10%)' }}
      />
    </button>
        <footer
           className={`hidden lg:block fixed bottom-0 left-0 right-0 z-40 w-full flex flex-col text-center p-4 overflow-y-auto transition-all duration-300 ease-in-out bg-blue-900 backdrop-blur-md dark:bg-gray-800 ${
            showFooter ? 'translate-y-0' : 'translate-y-full'
          }`}
          tabIndex="-1" aria-labelledby="drawer-bottom-label"
          style={{ zIndex: 10 }}
        >
          <FooterTags />
        </footer>
    </>
  )
}