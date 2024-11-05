import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

const Destination = () => {
  const { destinations } = useLoaderData();
  const [value, setValue] = useState(destinations[0].name)
  const [animationKey, setAnimationKey] = useState(0);
  const selectedDestinations = destinations.find(index => index.name === value)

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [value]);

  return (
    <div className='bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop flex w-full min-h-screen bg-cover bg-no-repeat overflow-x-hidden overflow-hidden'>
      <main className='pt-[7rem] lg:pt-[10rem] lg:px-40 w-full overflow-hidden animate-fadeInUp'>
        <h1 className='text-white text-center lg:text-left tracking-widest uppercase text-xl animate-slide-right'>
          <span className='text-gray-500 lg:mr-3'>01</span> pick your destination
        </h1>
        <div className='text-white flex gap-8 uppercase mt-7 justify-center lg:justify-end mx-auto lg:pr-40 lg:p-2 items-center'>
          {["Moon", "Mars", "Europa", "Titan"].map((name, index) => {
            return (
              <button key={index} onClick={() => setValue(name)} className={`uppercase border-b-2 transition-all p-1 duration-300 ${value === name ? "text-white border-white" : "text-slate-400 hover:text-white border-transparent"}`}>{name}</button>
            )
          })}
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-around md:flex-row md:justify-around'>
          <div className="overflow-hidden lg:min-w-[400px] lg:min-h-[400px] transition duration-500 hover:scale-[1.03] flex items-center justify-center">
          <img 
            key={animationKey}
            src={selectedDestinations.images.png} 
            alt={value}
            loading='lazy'
            className='transition animate-zoom-in mt-7 lg:mt-0 lg:w-[400px] lg:h-[400px] w-[300px] lg:min-w-[300px] lg:min-h-[300px] transform-box: fill-box'  
          />
          </div>
          <div key={animationKey} className='lg:ml-20 lg:block flex flex-col items-center max-w-80 lg:mx-0 mx-auto lg:max-w-[490px] animate-fade-in'>
            <p className='text-gray-200 tracking-widest text-7xl lg:text-8xl mt-8 mb-8 ml-2 uppercase'>{value}</p>
            <p className='text-gray-400 m-auto text-center lg:text-left pb-[2rem] lg:pb-[3.25rem] lg:w-[400px] w-[300px]'>{selectedDestinations.description}</p>
            <hr className='text-gray-800 lg:border-gray-800 border-gray-700 w-full'/>
            <div className='flex justify-between w-[320px] mt-5 mb-4 lg:mb-0 max-w-[300px]'>
              <div id="travel-distance">
                <p className='text-gray-400 uppercase text-[11.5px] tracking-widest mb-2'>avg. distance</p>
                <p className='text-gray-200 uppercase text-2xl'>{selectedDestinations.distance}</p>
              </div>
              <div id="travel-time">
                <p className='text-gray-400 uppercase text-[11.5px] tracking-widest mb-2'>est. travel time</p>
                <p className='text-gray-200 uppercase text-2xl'>{selectedDestinations.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Destination
