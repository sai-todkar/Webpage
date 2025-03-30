    import React from 'react';
    import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
    import AboutBg from '../Images/about-bg.jpg';
    import '../styles/about.css';

    const About = () => {
    return (
        <section className="about-section">
        {/* Hero Section */}
        <div className="about-hero">
            <div className="hero-overlay">
            <div className="hero-content">
                <h1>About Vishwakruti</h1>
                <p>Crafting Spaces, Creating Experiences</p>
            </div>
            </div>
            <img src={AboutBg} alt="Modern interior design showcase" />
        </div>

        {/* Story Section */}
        <div className="story-section">
            <div className="section-container">
            <div className="story-content">
                <h2 className="section-title">Our Design Philosophy</h2>
                <div className="accent-line"></div>
                <p className="story-text">
                At <span className="accent-text">Vishwakruti Design Studio</span>, we specialize in transforming spaces through innovative interior design and architectural solutions. Our holistic approach combines functionality with aesthetic excellence, creating environments that inspire and endure.
                </p>
                <div className="expertise-grid">
                <div className="expertise-card">
                    <h3>150+</h3>
                    <p>Completed Projects</p>
                </div>
                <div className="expertise-card">
                    <h3>15 Years</h3>
                    <p>Industry Experience</p>
                </div>
                <div className="expertise-card">
                    <h3>98%</h3>
                    <p>Client Satisfaction</p>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section">
            <div className="section-container">
            <div className="section-header">
                <h2 className="section-title">Client Testimonials</h2>
                <p className="section-subtitle">Hear From Our Valued Clients</p>
            </div>
            
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                    <FaQuoteLeft className="quote-icon" />
                    <p>{testimonial.text}</p>
                    <FaQuoteRight className="quote-icon" />
                    <div className="client-info">
                    <h5>{testimonial.name}</h5>
                    <span>{testimonial.project}</span>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    );
    };

    const testimonials = [
    {
        text: "Vishwakruti transformed our home into a masterpiece. Their attention to detail and creative vision exceeded all expectations.",
        name: "Mr. Vikas Sharma",
        project: "Residential Interior, Pune"
    },
    {
        text: "The perfect blend of functionality and aesthetics. Professional team that delivered beyond our initial concept.",
        name: "Ms. Leena Deshpande",
        project: "Office Space Design, Mumbai"
    },
    {
        text: "Exceptional service from start to finish. Their innovative approach brought our vision to life in ways we couldn't imagine.",
        name: "Mr. Dipak Patel",
        project: "Commercial Complex, Ahmedabad"
    }
    ];

    export default About;