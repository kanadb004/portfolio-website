import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = ({ data }) => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Education</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div 
          className="education-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="education-header">
            <div className="education-main">
              <h3>{data.institution}</h3>
              <p className="campus">{data.campus}</p>
            </div>
            <div className="education-duration">
              <span>{data.duration}</span>
            </div>
          </div>
          
          <div className="education-details">
            <p className="degree">{data.degree}</p>
            <p className="cgpa">CGPA: <strong>{data.cgpa}</strong></p>
          </div>

          <div className="coursework">
            <h4>Key Coursework:</h4>
            <div className="coursework-list">
              {data.coursework.map((course, index) => (
                <motion.span 
                  key={index}
                  className="course-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="extracurricular">
            <h4>Extracurricular:</h4>
            <div className="extracurricular-list">
              {data.extracurricular.map((activity, index) => (
                <span key={index} className="activity-tag">
                  {activity}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;