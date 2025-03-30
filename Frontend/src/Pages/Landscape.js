import React from 'react';
import { motion } from 'framer-motion';
import { FaTree, FaSeedling, FaWater } from 'react-icons/fa';
import landscapeData from '../utils/landscape.json';
import '../styles/agent.css';

const Landscape = () => {
  return (
    <section className="landscape-section">
      {/* Hero Section */}
      <div className="agents-hero">
        <div className="hero-overlay">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content"
          >
            <h1>Landscape Design Excellence</h1>
            <p>Transforming Outdoor Spaces into Living Art</p>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Our Landscape Services</h2>
          <div className="accent-line"></div>
        </div>

        <div className="agents-grid">
          {landscapeData.map((service) => (
            <motion.div 
              key={service.id}
              className="agent-card"
              whileHover={{ y: -10 }}
            >
              <div className="card-image">
                 <img src={service.img} alt={service.title} />
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p className="description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Landscape;