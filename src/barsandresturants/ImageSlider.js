import React, { useEffect, useState } from 'react';
import './ImageSlider.css';
import africanfood from '../images/african1.png';
import abachafood from '../images/abacha1.png';
import assunfood from '../images/assuun1.png';
import continentalfood from '../images/continental1.png';
import okpafood from '../images/okpa1.png';
import swallowfood from '../images/swallow1.png';
import vendorsmap1  from '../images/vendorsmap1.png';
import vendorsmap2 from '../images/vendorsmap2.png';



const images = [
  africanfood, // Replace with your image paths
  abachafood,
  assunfood,
  continentalfood,
  okpafood,
  swallowfood,
  vendorsmap1,
  vendorsmap2
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState([]);

  // Shuffle images when component mounts
  useEffect(() => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % shuffledImages.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [shuffledImages]);

  if (shuffledImages.length === 0) return null;

  return (
    <div className="slider-container">
      <div
        className="slider-image"
        style={{ backgroundImage: `url(${shuffledImages[currentImageIndex]})` }}
      ></div>
    </div>
  );
};

export default ImageSlider;
