import { useState } from 'react'
import React from 'react'

const FooterTags = () => {
  
  const rotate = ["hover:-rotate-1", "hover:rotate-1"]
  const [rotateIndex, setRotateIndex] = useState(rotate[Math.floor(Math.random() * rotate.length)])
  
  return (
    <>
      <p
        className={`text-gray-400 text-2xl lg:text-white lg:text-2xl ${rotateIndex}`}
        onMouseEnter={() => setRotateIndex(rotate[Math.floor(Math.random() * rotate.length)])}
        onMouseLeave={() => setRotateIndex("")}
        style={{ zIndex: "11" }}
      >Engineered with love by
        <a
          href='https://github.com/Fardindevm'
          target='_blank'
          rel='noreferrer'
          className='font-semibold'
        > Fardin Mohammadi</a>
      </p>
      <div className='flex justify-center gap-8 mt-5'>
        <a className="text-4xl text-gray-300 lg:text-white transition duration-300 ease-in-out  hover:scale-125" href="https://www.instagram.com/Fardinmo7" target='_blank' rel='noreferrer'>
          <i className="fab fa-instagram"></i>
        </a>
        <a className="text-4xl text-gray-300 lg:text-white transition duration-300 ease-in-out  hover:scale-125" href="https://github.com/Fardindevm" target='_blank' rel='noreferrer'>
          <i className="fab fa-github"></i>
        </a>
        <a className="text-4xl text-gray-300 lg:text-white transition duration-300 ease-in-out  hover:scale-125" href="mailto:fardinmohammadi504@gmail.com" target='_blank' rel='noreferrer'>
          <i className="fas fa-envelope"></i>
        </a>
        <a className="text-4xl text-gray-300 lg:text-white transition duration-300 ease-in-out  hover:scale-125" href="https://www.linkedin.com/in/fardin-mohammadi" target='_blank' rel='noreferrer'>
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </>
  )
}

export default FooterTags
