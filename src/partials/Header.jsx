import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [top, setTop] = useState(false);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(false)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full h-20 z-30 md:bg-opacity-75 transition duration-300  ease-in-out ${!top && 'bg-cyan-500 backdrop-blur-sm shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center py-1 justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block flex flex-row" aria-label="Cruip">
              <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
              </svg>
              <h1 className='text-2xl p-2 py-2 text-white font-bold' >In_Finite Consulting</h1>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow my-3">
            <ul className="flex py-2 flex-grow justify-end flex-wrap items-center space-x-2">
              <li>
                <Link to="/about" className="font-medium text-gray-100 rounded-xl hover:text-gray-200 px-5 py-3 flex items-center transition duration-150 ease-in-out">About us</Link>
              </li>
              <li>
                <Link to="/service" className="font-medium text-gray-100 rounded-xl round-sm hover:text-gray-200 px-5 py-3 flex items-center transition duration-150 ease-in-out">Services</Link>
              </li>
              <li>
                <Link to="/team" className="font-medium text-gray-100 rounded-xl hover:text-gray-200 px-5 py-3 flex items-center transition duration-150 ease-in-out">Team</Link>
              </li>
              <li>
                <Link to="/contact" className="font-medium text-gray-100 rounded-xl hover:text-gray-200 px-5 py-3 flex items-center transition duration-150 ease-in-out">Contact</Link>
              </li>
              <li>
                <Link to="/signUp" className="font-medium text-white rounded-xl bg-cyan-500 hover:bg-cyan-600 px-5 py-3 flex items-center transition duration-150 ease-in-out">Make An appointment</Link>
              </li>
              <li>
                
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
