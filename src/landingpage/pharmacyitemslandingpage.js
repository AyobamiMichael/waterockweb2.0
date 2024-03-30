import TextField from "@mui/material/TextField";
import { React, useState, useEffect} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import './landingpage.css';
import './pharmaviews';
import Pharmaviews from "./pharmaviews";
import AllDrugsList from "./druglist";
import SignUp from '../components/signup/signup';
import Navbar from "../homepagenavbar/navbar";
import Footer from '../Footer';


const Searchdrugs =() => {


  const [alldrugsList, setDrugsList] = useState([]);
  const [inputText, setInputText] = useState("");
  useEffect(()=>{
    fetch('https://waterockapi.wegotam.com/viewalldrugs', {
      method: "GET",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      }
       
    })
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data, "drugListData");
       // result = data.data.username
        setDrugsList(data);
       
    });

}, [])


const navigate = useNavigate();

const navigateToSignupPage = () => {
  
  navigate('/sign-up');
};
 console.log(alldrugsList);

 let inputHandler = (e) => {
  //convert input text to lower case
  var lowerCase = e.target.value.toLowerCase();
  setInputText(lowerCase);
};




    return(
      <div className='mainpharmacyItems'>
        <Navbar/>  
       <div className='searchbarfordrugs'>
         <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          label="Search"
          className='searchtextfieldfordrugs'
          InputLabelProps={{
            style: {
               fontSize: 14
            }
          }}
          inputProps={
            {
              style:{
                 height: 20,
                
              }
            }
          }
          
        />
       </div>
       <div className="signinpharmacyitemslandingpage">
          <button type='button' onClick={navigateToSignupPage} className="buttonsigninpharmacyitemslandingpage">
            Sign In
          </button>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
         
        </div>
        <AllDrugsList input={inputText}/>
        <div className="searchdrugsfooter">
           <Footer/>
        </div>
       </div>
    );
}

export default Searchdrugs;