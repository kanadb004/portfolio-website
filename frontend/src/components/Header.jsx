import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollUtils';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <div className="logo">
          <h2>Kanad Bhattacharya</h2>
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><button onClick={() => handleScrollToSection('hero')}>Home</button></li>
            <li><button onClick={() => handleScrollToSection('about')}>About</button></li>
            <li><button onClick={() => handleScrollToSection('experience')}>Experience</button></li>
            <li><button onClick={() => handleScrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => handleScrollToSection('skills')}>Skills</button></li>
            <li><button onClick={() => handleScrollToSection('contact')}>Contact</button></li>
          </ul>
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;