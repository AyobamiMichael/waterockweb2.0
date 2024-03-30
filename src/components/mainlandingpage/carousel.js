import React from 'react';
import DrugImage from  "../../images/pharma2.jpg";
import GroceriesImage1 from '../../images/groceries-970x970.jpg';
import FoodItems1 from '../../images/Food-Packing.jpg';
import "./carousel1.scss";
import DrugApp from '../../Drugfinder';


import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Getfood from '../../Fooditems';

const Displaycarousel = () =>{

   const GetCarouselClicked = ()=>{
       return(
        
         //console.log('okay')
         <Getfood/>
       )
   }
  
  
    return (
        <MDBCarousel ShowIndicators showControls fade>
            <MDBCarouselItem 
                 className='w-100 d-block'
                 itemId={1}
                
                 src= {DrugImage}
                 alt='...'
               onClick={() => GetCarouselClicked()}
                
            >
                <h5>With location</h5>
        <p>Cheap and afordable</p>
            </MDBCarouselItem>
           
            <MDBCarouselItem
        className='w-100 .active'
        itemId={2}
        src={GroceriesImage1}
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>
      
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={FoodItems1}
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

        </MDBCarousel>
    )
}  

export default Displaycarousel;