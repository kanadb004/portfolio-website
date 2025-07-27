import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaLinkedin, FaCertificate } from 'react-icons/fa';
import './Experience.css';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Experience</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="experience-timeline">
          {data.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-main">
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                    <p className="location">{exp.location}</p>
                  </div>
                  <div className="experience-duration">
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <div className="experience-description">
                  <p>{exp.description}</p>
                </div>

                <div className="experience-links">
                  {exp.website && (
                    <a 
                      href={exp.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="exp-link website"
                    >
                      <FaExternalLinkAlt />
                      <span>Website</span>
                    </a>
                  )}
                  {exp.linkedin && (
                    <a 
                      href={exp.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="exp-link linkedin"
                    >
                      <FaLinkedin />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {exp.certificate && (
                    <a 
                      href={exp.certificate} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="exp-link certificate"
                    >
                      <FaCertificate />
                      <span>Certificate</span>
                    </a>
                  )}
                </div>
              </div>
              
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;