// Footer.js
import React from 'react';
import './footer.css'; 
import facebookImage from './images/facebook.png';
import instaImage from  './images/instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-section">
          <h3>NEED HELP?</h3>
          <ul>
            <li>
              <a href="#">Chat with us</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li>
              <a href="#">Service Center</a>
            </li>
            <li>
              <a href="#">How to shop on Waterock?</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>ABOUT WATEROCK</h3>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Waterock careers</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>MAKE MONEY WITH WATEROCK</h3>
          <ul>
            <li>
              <a href="#">Sell on Waterock</a>
            </li>
            <li>
              <a href="#">Vendor hub</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
      <div className="footer-social-icons">
        {/* Add social media icons here */}
        {/* For example: */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={facebookImage} alt="Facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={instaImage} alt="Instagram" />
        </a>
        {/* Add more social media icons as needed */}
      </div>
    </footer>
  );
};

export default Footer;
