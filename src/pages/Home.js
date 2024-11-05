import Rocket from '../assets/shared/rocket-3431.svg';
import { NavLink } from 'react-router-dom';

function Home() {  
  return (
    <div className='flex bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-cover min-h-screen bg-cover bg-no-repeat animate-fadeInHome'>
      <main className='w-full pt-20 px-6 mt-20 justify-center text-center lg:mt-0 lg:text-left md:px-10 lg:px-20 flex items-center flex-col lg:flex-row'>
        <div className='lg:w-[440px] flex flex-col items-center lg:block stagger-delay'>
          <p className='text-[#c5c9e1] text-2xl tracking-widest uppercase animate-slideInLeft'>
            So, you want to travel to
          </p>
          <h1 className='text-white lg:text-9xl text-[7.5rem] mt-2 tracking-wider uppercase animate-slideInLeft'>
            Space
          </h1>
          <p className='text-[#b6b8ce] text-center lg:text-left mt-10 w-[360px] animate-slideInLeft'>
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
          </p>
        </div>
        <div id="rocket-div" className="flex items-center justify-end mt-10 lg:mt-0 lg:mr-10 flex-1 pb-5 lg:pb-0 animate-slideInRight">
          <NavLink
            to="/destination"
            className="relative flex flex-col justify-center items-center w-52 h-52 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-md rounded-full group transition-all duration-300 
              hover:shadow-[0_0_50px_#fff] hover:scale-110 animate-pulseGlow"
          >
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 
              bg-gradient-to-t from-purple-500 to-cyan-500 transition-opacity duration-300"></div>
            <img
              loading='lazy'
              src={Rocket}
              alt="rocket"
              className="w-16 h-16 text-white mx-auto transform rotate-5 transition-all duration-300 
                group-hover:translate-y-[-8px] group-hover:scale-110 invert-85 group-hover:invert"
            />
            <p className='transform rotate-5 transition-all duration-300
                group-hover:scale-110 invert-85 group-hover:invert'>
              EXPLORE
            </p>
          </NavLink>
        </div>
      </main>
    </div>    
  );
}

export default Home;
