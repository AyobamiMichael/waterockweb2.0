import React from "react";
import Navbar from "./homepagenavbar/navbar";
import Header from "./multileveldropdownmenu/Header";
import './multileveldropdownmenu/multileveldropdown.css';
//import Slideshow from "./leftrightslider/slideshow";
//import DisplayCarouselPage from "./components/mainlandingpage/mainlandingpage";
//import Displaycarousel from "./components/mainlandingpage/carousel";
import Displaycarousel from "./carousels/displaycarousel";
import Footer from './Footer';
import './fooditems.css';



const Getfood = () =>{
  
    return(
        <div className="mainfooditems">
            <Navbar/>
        <Header/>
        <Displaycarousel/>
        <div className="fooditemsfooter">
        <Footer/>
        </div>
       
        </div>
    ) 
}


export default Getfood;

/**
 *  <div>
       <Displaycarousel/>
       </div>
*/