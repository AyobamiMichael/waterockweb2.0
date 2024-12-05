import React, { useState, useEffect } from 'react';
import './PhraseDisplay.css';

const phrases = [
  "Have you eaten?",
  "I riela nri?",
  "You don chop?",
  "Kun ci abinci?",
  "Se o ti jeun?",
];

const PhraseDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="phrase-display-single">
      <p className="phrase-text">{phrases[currentIndex]}</p>
    </div>
  );
};

export default PhraseDisplay;
