import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Rendercarousel from "./rendercarousel";
import "./carousel.css";
import imageData from "./carouseldata";

const Displaycarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Set the initial index to 0

  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="main">
      <div className="carouselslides">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          selectedItem={currentIndex} // Use the currentIndex as the selectedItem
          onChange={handleChange}
          className="carousel-container"
        >
          {Rendercarousel}
        </Carousel>
      </div>
    </div>
  );
};

export default Displaycarousel;







/*
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Rendercarousel from "./rendercarousel";
import './carousel.css';
import imageData from "./carouseldata";


const Displaycarousel =() =>{
    const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="main">
    <div className="carouselslides">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
        {Rendercarousel}
      </Carousel>
    </div>
    </div>
  );
  
}

export default Displaycarousel;
*/