    import React from 'react';
    import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
    import contactImg from '../Images/contact-img.jpg';
    import '../styles/contact.css';

    const Contact = () => {
    return (
        <section className="contact-section">
        {/* Hero Image with Overlay */}
        <div className="contact-hero">
            <div className="hero-overlay">
            <div className="hero-content">
                <h1>Get in Touch</h1>
                <p>Let's create something extraordinary together</p>
            </div>
            </div>
            <img src={contactImg} alt="Modern interior design" />
        </div>

        {/* Contact Information Grid */}
        <div className="contact-info-grid">
            <div className="info-card">
            <div className="icon-container">
                <FaMapMarkerAlt className="info-icon" />
            </div>
            <h3>Our Studio</h3>
            <p>2nd Floor, Trimruti Apartment<br/>
            S.No.2, Tilak Road, Sadashiv Peth<br/>
            Pune-411030</p>
            </div>

            <div className="info-card">
            <div className="icon-container">
                <FaPhone className="info-icon" />
            </div>
            <h3>Call Us</h3>
            <p>+91 7028424912</p>
            </div>

            <div className="info-card">
            <div className="icon-container">
                <FaEnvelope className="info-icon" />
            </div>
            <h3>Email Us</h3>
            <p>vishwakrutidesignstudio@gmail.com</p>
            </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-section">
            <div className="form-container">
            <div className="form-header">
                <h2>Send a Message</h2>
                <p>Have questions or ready to start your project? We're here to help.</p>
            </div>
            
            <form className="contact-form">
                <div className="form-group">
                <input type="text" placeholder="Full Name" required />
                </div>
                <div className="form-row">
                <div className="form-group">
                    <input type="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                    <input type="tel" placeholder="Phone Number" />
                </div>
                </div>
                <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">
                Send Message <FaPaperPlane className="submit-icon" />
                </button>
            </form>
            </div>
        </div>
        </section>
    );
    };

    export default Contact;