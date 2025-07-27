import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaDownload, FaEye, FaComments } from 'react-icons/fa';
import { scrollToSection } from '../utils/scrollUtils';
import profileImage from '../assets/profile.jpg';
import resumePDF from '../assets/Kanad Bhattacharya - Resume.pdf';
import './Hero.css';

const Hero = ({ data }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-layout">
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={profileImage} alt="Kanad Bhattacharya" className="profile-image" />
          </motion.div>
          
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {data.name}
          </motion.h1>
          
          <motion.p 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {data.title}
          </motion.p>
          
          <motion.div 
            className="hero-contact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>{data.phone}</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-social"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="social-link github">
              <FaGithub />
              <span>GitHub</span>
            </a>
          </motion.div>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button 
              className="cta-button primary"
              onClick={() => scrollToSection('projects')}
            >
             {/* <FaEye className="button-icon" /> */}
              View My Work
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => scrollToSection('contact')}
            >
              <FaComments className="button-icon" />
              Get In Touch
            </button>
            <a 
              href={resumePDF}
              download="Kanad_Bhattacharya_Resume.pdf"
              className="cta-button resume-download"
            >
              <FaDownload className="download-icon" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;