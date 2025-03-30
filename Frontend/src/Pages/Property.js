import React from 'react';
import { FaBuilding, FaPaintBrush, FaExpandArrowsAlt } from 'react-icons/fa';
import data from '../utils/slider.json';
import '../styles/property.css';

const Property = () => {
  return (
    <section className="properties-section">
      {/* Hero Section */}
      <div className="properties-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Architectural Excellence</h1>
            <p>Where Vision Meets Precision</p>
          </div>
        </div>
      </div>
      

      {/* Properties Grid */}
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Our Signature Designs</h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">Exploring Architectural Innovation</p>
        </div>

        <div className="properties-grid">
          {data.map((pcard, index) => (
            <article key={index} className="design-card">
              <div className="card-image">
                <img src={pcard.image} alt={pcard.name} />
                <div className="card-hover-content">
                  <FaBuilding className="card-icon" />
                  <FaPaintBrush className="card-icon" />
                  <FaExpandArrowsAlt className="card-icon" />
                </div>
              </div>
              <div className="card-content">
                <h3 className="design-title">{pcard.name}</h3>
                <p className="design-detail">{pcard.detail}</p>
                <button className="explore-button">
                  View Project <span>&rarr;</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Property;