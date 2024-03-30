//import React, { Component } from "react";
import RegisterPharmacy from "../pharmacy/registerpharmacy";
import React, { useState, useEffect } from 'react';
import RegisterProduct from "../drugs/registerproduct";
import Navbar from "./sidenavbar/Navbar";


const UserData = (props) => {

   const [uname, setUname] = useState('');
    const aname = 'ademi';

  useEffect(()=>{
    fetch("https://waterockapi.wegotam.com/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
   
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        
         setUname(data.data.uname);
      });

  }, [])
  /*
  componentDidMount() {
         
        fetch("http://localhost:4000/userData", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              token: window.localStorage.getItem("token"),
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "userData");
              
              this.setState({ userData: data.data });
            });

  }
 */

    return (
      <>
      <Navbar />
      <div>
       
      </div>
      </>
    );
  
}

export default UserData;