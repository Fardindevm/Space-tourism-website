import { useLoaderData } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Technology = () => {
  const { technology } = useLoaderData();
  const [value, setValue] = useState(technology[0]);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [value]);

  return (
    <div className='bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop w-full h-screen bg-cover min-h-screen bg-cover bg-no-repeat overflow-x-hidden'>
      <main className='pt-[7rem] lg:pt-[10rem] lg:pl-40 w-full'>
        <h1 className='text-white text-center lg:text-left tracking-widest uppercase text-xl animate-slide-right'>
          <span className='text-gray-500 mr-3'>03</span>  Space Launch 101
        </h1>
        <div className='flex flex-col-reverse lg:flex-row justify-between mt-9 lg:mt-0'>
          <div className='pt-10 lg:pt-24 lg:pl-5 flex flex-col gap-9 lg:gap-0 lg:flex-row text-center lg:text-left'>
            <div className='flex justify-center lg:justify-start lg:flex-col gap-7'>
              {technology.map((name, index) => {
                return (
                  <button 
                    key={index} 
                    onClick={() => setValue(name)} 
                    className={`uppercase border-b-2 w-[4rem] h-[4rem] rounded-full border-2 transition-all p-1 duration-300 text-2xl ${
                      value.name === name.name 
                        ? "text-black bg-white" 
                        : "text-slate-400 hover:text-gray-200 border-gray-600"
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              })}
            </div>
            <div key={animationKey} className='lg:pl-[80px] animate-fade-in'>
              <p className='text-gray-400 uppercase tracking-widest text-sm'>The technology...</p>
              <p className='text-gray-200 text-4xl lg:text-5xl uppercase tracking-widest mt-3 mb-5'>{value.name}</p>
              <p className='text-gray-400 max-w-[360px] text-center lg:text-left mx-auto lg:mx-0 mb-10 lg:mb-0 lg:max-w-[400px]'>{value.description}</p>
            </div>
          </div>
          <div>
            <img
              key={animationKey}
              className='h-[250px] lg:h-[450px] w-full lg:w-auto lg:object-contain animate-zoom-in'
              alt={value.name}
              src={`${process.env.PUBLIC_URL}/${value.images.portrait}`}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Technology;
