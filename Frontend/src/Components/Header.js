import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../Images/logo4.png';
import '../styles/header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/property", name: "Architectural Design" },
    { path: "/agents", name: "Interior Design" },
    { path: "/about", name: "About Us" },
    { path: "/contact", name: "Contact" },
    { path: "/landscape", name: "Landscape" }
  ];

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-content">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Vishwakruti Design Studio Logo" className="logo" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="desktop-menu">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="nav-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Mobile Navigation */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;