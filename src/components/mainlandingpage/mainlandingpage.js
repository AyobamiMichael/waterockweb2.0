import { React, useState, useEffect} from "react";
import TextField from "@mui/material/TextField";
import "./mainladingpage.css";
import Displaycarousel from "./carousel";
//import Displaysidemenu from "./sidedropdownmenu";




const DisplayCarouselPage = () =>{
          


      return(
        <div className="main">
          <div className="displaycarousel">
          <Displaycarousel />
          </div>
        </div>
      )
}

export default DisplayCarouselPage;