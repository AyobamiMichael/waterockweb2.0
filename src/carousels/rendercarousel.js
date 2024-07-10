import imageData from "./carouseldata";
import './carousel.css';

import { Link, Route } from "react-router-dom";

const Rendercarousel = imageData.map((image) => (
   
    <div key={image.alt}>
      <Link to='/allfoods'>
      <img src={image.url} alt={image.alt} />
      
      </Link>
      <p className="carouselimage">{image.label}</p>     
    </div>
  )
    
  );


export default Rendercarousel;