import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <div className="section-line"></div>
          <p className="contact-subtitle">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>Feel free to reach out through any of the following channels:</p>
            
            <div className="contact-methods">
              <motion.a 
                href={`tel:${data.phone}`}
                className="contact-method"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="method-icon phone">
                  <FaPhone />
                </div>
                <div className="method-info">
                  <h4>Phone</h4>
                  <p>{data.phone}</p>
                </div>
              </motion.a>

              <motion.a 
                href={`mailto:${data.email}`}
                className="contact-method"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="method-icon email">
                  <FaEnvelope />
                </div>
                <div className="method-info">
                  <h4>Email</h4>
                  <p>{data.email}</p>
                </div>
              </motion.a>

              <motion.a 
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="method-icon linkedin">
                  <FaLinkedin />
                </div>
                <div className="method-info">
                  <h4>LinkedIn</h4>
                  <p>Connect with me</p>
                </div>
              </motion.a>

              <motion.a 
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="method-icon github">
                  <FaGithub />
                </div>
                <div className="method-info">
                  <h4>GitHub</h4>
                  <p>Check out my code</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-cta"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="cta-card">
              <h3>Ready to collaborate?</h3>
              <p>
                Whether you're looking for a dedicated team member, a research collaborator, 
                or someone passionate about technology and innovation, I'd love to hear from you.
              </p>
              
              <div className="cta-buttons">
                <motion.a 
                  href={`mailto:${data.email}?subject=Let's Collaborate&body=Hi Kanad, I'd like to discuss...`}
                  className="cta-button primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Email
                </motion.a>
                
                <motion.a 
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Connect on LinkedIn
                </motion.a>
              </div>

              <div className="location-info">
                <FaMapMarkerAlt />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;