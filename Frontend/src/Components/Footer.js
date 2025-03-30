import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../Images/logo4.png';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Content */}
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-column">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="Vishwakruti Design Studio Logo" />
            </Link>
            <p className="footer-description">
              Crafting timeless spaces that inspire and elevate living experiences through innovative design solutions.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/property">Architectural Design</Link></li>
              <li><Link to="/agents">interior Design</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/landscape">Landscape</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt />
                <span>2nd Floor, Trimurti Apartment<br/>Sadashiv Peth, Pune-411030</span>
              </li>
              <li>
                <FaPhone />
                <span>+91 7028424912</span>
              </li>
              <li>
                <FaEnvelope />
                <span>vishwakrutidesignstudio@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright-section">
          <p>&copy; {new Date().getFullYear()} Vishwakruti Design Studio. All rights reserved.</p>
          <p>Designed with ♥ by Sai Todkar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;