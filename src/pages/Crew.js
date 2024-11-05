import { useLoaderData } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Crew = () => {
  const { crew } = useLoaderData();
  const [selectedCrew, setSelectedCrew] = useState(crew[0]);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [selectedCrew]);

  return (
    <div className='bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop w-full h-screen bg-cover min-h-screen bg-cover bg-no-repeat overflow-x-hidden'>
      <main className='pt-[7rem] lg:pt-[10rem] lg:px-40 w-full'>
        <h1 className='text-white text-center lg:text-left tracking-widest uppercase text-xl animate-slide-down'>
          <span className='text-gray-500 mr-3'>02</span>  Meet your crew
        </h1>

        <div className='flex flex-col-reverse lg:flex-row justify-between'>
          <div className='mt-12 lg:mt-20 flex flex-col-reverse lg:block'>
            <div key={animationKey} className='lg:h-[20rem] mt-9 lg:mt-10 text-center lg:text-left animate-fade-in'>
              <p className='text-gray-500 text-3xl uppercase'>{selectedCrew.role}</p>
              <p className='text-gray-200 text-4xl lg:text-5xl tracking-widest uppercase my-4'>{selectedCrew.name}</p>
              <p className='text-gray-400 mt-6 lg:mt-10 max-w-[360px] lg:max-w-[405px] mx-auto lg:mx-0 leading-[1.7rem] mb-10 lg:mb-0'>{selectedCrew.bio}</p>
            </div>

            <div id="crew-button" className='lg:mt-0 flex items-center justify-center lg:block'>
              {crew.map((crewMember, index) => (
                <button
                  key={index}
                  className={`w-5 h-5 rounded-full mr-5 transition-all duration-300 ${selectedCrew.name === crewMember.name ? 'bg-white' : 'bg-gray-600 lg:bg-gray-700 hover:bg-gray-500'}`}
                  onClick={() => setSelectedCrew(crewMember)}
                >
                </button>
              ))}
            </div>
          </div>
          <div id='selectedCrewImageDiv' className='flex items-center justify-center overflow-hidden h-[400px] mt-5 lg:mt-0 lg:h-[528px]'>
            <img
              key={animationKey}
              src={`${process.env.PUBLIC_URL}/${selectedCrew.images.png}`}
              className='h-full w-auto object-contain animate-zoom-in'
              alt={selectedCrew.name}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Crew;
