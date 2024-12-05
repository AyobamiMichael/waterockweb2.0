import React from 'react';
import './DownloadButtons.css';
import googlePlayIcon from '../icons/googleplay.png'; // Replace with the path to the Google Play icon
import appStoreIcon from '../icons/appstore.png'; // Replace with the path to the App Store icon

const DownloadButtons = () => {
  return (
    <div className="download-buttons-container">
      <a
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="download-button google-play"
      >
        <img src={googlePlayIcon} alt="Google Play" className="icon" />
        <span>Download on Google Play</span>
      </a>
      <a
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noopener noreferrer"
        className="download-button app-store"
      >
        <img src={appStoreIcon} alt="App Store" className="icon" />
        <span>Download on App Store</span>
      </a>
    </div>
  );
};

export default DownloadButtons;
