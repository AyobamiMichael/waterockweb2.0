import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import ViewLandingPage from './components/mainlandingpage/mainlandingpage';
import foodImage from './images/Food-Packing.jpg';
import drugphoto from './images/drugphoto.jpg';
import './homepage.css';
//import Getfood from './Fooditems';
import Navbar from './homepagenavbar/navbar';
//import ViewLandingPage from './components/mainlandingpage/mainlandingpage';
import Footer from './Footer';
import shopGroceriesImage from './images/shopgroceries.jpg';
import barImage from './images/barsresturant1.jpg';
import PhraseDisplay from './barsandresturants/phrasedisplay';
import DownloadButtons from './barsandresturants/downloadbuttons';
import ImageSlider  from './barsandresturants/ImageSlider';
import VendorsBox from './barsandresturants/VendorBox';



const Homepage =()=> {
     return(
           
      <div className='main'>
          <div className='navbarforlandingpage'>   <Navbar /></div>
          <div className='phrasedisplatpage'>< PhraseDisplay/> </div>
           <div className='downloadbuttonspage'> < DownloadButtons /></div>
           <div className='imagesliderpage'> < ImageSlider /></div>


           <div className='vendors'><VendorsBox /></div>
           
            <div className='landingpage'>
            <Link to='/signupbarmanager'>
                  <img src={barImage}  className='bar'/>
                  </Link>
                  <Link to='/fooditems'>
                  <img src={shopGroceriesImage}  className='food'/>
                  </Link> 
                  <Link to='/pharmacyitems'>
                  <img src={drugphoto}  className='phama'/>
                  </Link> 
                 </div> 
             <div className='mainpagefooter'>
            
                  </div>   
                  <Footer/>  
          
      </div>
        
     )

}

export default Homepage;