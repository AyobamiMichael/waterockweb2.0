import React from "react";
import sliderData from './sliderdata';
import './slideshow.css';


const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Slideshow() {

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  
    return (
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {sliderData.map((slide, index) => (
            <div
              className="slide"
              key={index}
              style={{slide}}
              
            ></div>,
            <div className={index ? 'slide active': 'slide'}>
                {(<img src={slide.image} alt='image' className="image"/>)}
                <h1 className={index ? 'desc': 'desc'}>{slide.description}</h1>
              </div>
          ))}
        </div>
  
        <div className="slideshowDots">
          {sliderData.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  export default Slideshow;