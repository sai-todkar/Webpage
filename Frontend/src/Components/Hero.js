import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import CountUp from 'react-countup';
import 'swiper/css';
import '../styles/hero.css';

const Hero = () => {
  // Updated project data with verified image URLs
  const projects = [
    { id: 1, image: '/img/Landscape1.jpg', title: 'Rajastani lawns' },
    { id: 2, image: '/img/pRes3.jpg', title: 'seaside villa' },
    { id: 3, image: '/img/pRes8.jpg', title: 'pune villa' },
    { id: 3, image: '/img/architecture-bg.jpeg', title: 'Mumbai villa' },
    { id: 4, image: '/img/Architectural 2.jpg.JPG', title: 'trump bunglow' },
    { id: 5, image: '/img/Achitectural 5.jpg.JPG', title: 'black bery villa' },
  ];

  // Statistics data
  const stats = [
    { id: 1, number: 15, suffix: '+', label: 'Years Experience' },
    { id: 2, number: 500, suffix: '+', label: 'Projects Completed' },
    { id: 3, number: 98, suffix: '%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="hero-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154"
            alt="Premium interior design"
            className="hero-main-image"
            loading="eager"
          />
          <div className="hero-overlay"></div>
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Elevate Your Living Space
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Crafting Timeless Designs for Modern Living
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat) => (
            <motion.div
              className="stat-card"
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CountUp
                end={stat.number}
                duration={3}
                suffix={stat.suffix}
                className="stat-number"
                enableScrollSpy
                scrollSpyOnce
              />
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="projects-section">
        <h2 className="section-title">Featured Projects</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
          }}
          className="projects-slider"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                className="project-card"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="image-container">
                  <img 
                    src={`${project.image}?auto=format&fit=crop&w=800&q=80`} 
                    alt={project.title}
                    loading="lazy"
                    className="project-image"
                  />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <button className="project-cta">View Project</button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Hero;