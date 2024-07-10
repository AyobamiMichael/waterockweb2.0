import RegisterPharmacy from "../pharmacy/registerpharmacy";
import Navbar from "./sidenavbar/Navbar";
import ViewDrugs from "../drugs/viewdrugs";
import SelectPharmacy from "../pharmacy/selectpharmacy";
import React, { useState, useEffect, useRef } from 'react';
import "./userdetails.css";



const UserDetails =() =>{

     const [username, setUname] = useState('');

     const [userviewsList, setuserViews] = useState([]);

     useEffect(()=>{
         fetch('https://waterockapi.wegotam.com/userviews', {
   
         })
         .then((res)=> res.json())
         .then((data)=>{
             console.log(data, "userViewsData");
            // result = data.data.username
             setuserViews(data.data);
            
         });
   
     }, [])
      
      // console.log(userviewsList);
       const userViews = userviewsList.map((userViews)=>(userViews.username));
       console.log(userViews);
        

     useEffect(()=>{
     
      fetch('https://waterockapi.wegotam.com/userData',{

        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("token")
         
        }),

      })
       .then((res) => res.json())
       .then((data) =>{
         console.log(data.data.uname);
         setUname(data.data.uname);
         window.localStorage.setItem('userdata', JSON.stringify(data.data))           
       });

  }, [])

  var resultViews = [];
  var result = userViews.includes(username);
  console.log(result);

  var numberOfViews = 0;
   if(result){
    resultViews = userViews.filter((views) =>(
            username === views))
            numberOfViews = resultViews.length;
   }else{
        numberOfViews = 0;
   }
   console.log(resultViews);
   
   return(
    <>
    
    <Navbar />
    
   <div className="pharmacyuser"> 
    <div className="welcome">
      Welcome <h1>{username}</h1> 
     
    </div>
    <div className="numberofviews">
      Number of views <h1>{numberOfViews}</h1>
    </div>
    <div className='mobilenavbarforpharmacy'>
      <li className='mobileViewAddProducts'>
            <a href="/registerproduct">
              <i className="fas fa-plus"></i>Add Product
            </a>
          </li>
          <li>
            <a href="/drugviewforpharmacy">
              <i className="fas fa-plus"></i> View Products
            </a>
          </li>
          <li>
            <a href="/registerpharmacy">
              <i className="fas fa-plus"></i> Register Pharmacy
            </a>
          </li>
      </div>
      </div>
    </>
   )
}

export default UserDetails;


