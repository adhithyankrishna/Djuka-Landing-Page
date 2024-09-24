import React, { useState, useEffect } from 'react';
import './App.css';

import Land from './components/Land';
import Serve from './components/Serve';
import Mission from './components/Mission';
import Focus from './components/Focus';
import './style/NavBar.css';
import Footer from './components/Footer';
import ImageBanner from './components/ImageBanner';
import { NavMobile } from './components/NavMobile'; // Import NavMobile

function App() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className='djuka'>Djuka</div>
        <div className="nav-links">
          <button className='btn1'>Home</button>
          <button className='btn1'>About</button>
          <button className='btn1'>Solution</button>
          <button className='btn2'>Connect</button>
        </div>
        <span className='ham'>
          <NavMobile /> {/* Hamburger menu for mobile */}
        </span>
      </div>

     
      <Land />
      <Serve />
      <Mission />
      <ImageBanner />
      <Focus />
      <Footer /> 
    </div>
  );
}

export default App;
