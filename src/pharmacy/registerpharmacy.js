//import React, { Component } from 'react'
import "./registerpharmacy.css";
//import RegisterDrug from '../drugs/registerdrug';
import Tabs from '../components/Tab/tabs';
import Navbar from '../components/sidenavbar/Navbar';
import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';


const RegisterPharmacy = () => {
  
    var result = '';

    const [pname, setpharmacyName] = useState('')

    const [paddress, setPaddress] = useState('')
    const [phone, setPhone] = useState('')

    const [state, setPharmaState] = useState('') 

    const [uname, setUname] = useState(result)
 
   
    

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
      result = data.data.uname
      setUname(result);
    });
   }, [])



   const handleSubmit =(e) =>{
         e.preventDefault();
         // const { pname, paddress, phone,  uname} = this.state;
          console.log(pname, paddress, phone,  uname, state);
          fetch("https://waterockapi.wegotam.com/registerpharmacy",{
             method: "POST",
             crossDomain: true,
             headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
               "Access-Control-Allow-Origin": "*",
             },
             body: JSON.stringify({
              pname,
              paddress,
              phone,
              uname,
              state
            }),
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "pharmacyRegister");
            if (data.status === "ok") {
              alert("Pharmacy successfully registered");
               window.localStorage.setItem("token", data.data);
               window.location.href = "./login";
               // <Tabs />
            }else{
              alert("Pharmacy exists");
            }
          });
    }
          
    const stateactions = [{label: "Abia", value: 1},   
    {label: "Adamawa", value: 2}, 
    {label: "Akwa Ibom", value: 3},
    {label: "Anambra", value: 4},
    {label: "Bauchi", value: 5},
    {label: "Benue", value: 6},
    {label: "Bayelsa", value: 7},
    {label: "Borno", value: 8},
    {label: "Cross River", value: 9},
    {label: "Delta", value: 10},
    {label: "Ebonyi", value: 11},
    {label: "Edo", value: 12},
    {label: "Enugu", value: 13},
    {label: "Ekiti", value: 14},
    {label: "Gombe", value: 15},
    {label: "Imo", value: 16},
    {label: "Kaduna", value: 17},
    {label: "Kano", value: 18},
    {label: "Katsina", value: 19},
    {label: "Kebbi", value: 20},
    {label: "Kogi", value: 21},
    {label: "Kwara", value: 22},
    {label: "Lagos", value: 23},
    {label: "Nasarawa", value: 24},
    {label: "Niger", value: 25},
    {label: "Ogun", value: 26},
    {label: "Ondo", value: 27},
    {label: "Osun", value: 28},
    {label: "Oyo", value: 29},
    {label: "Plateau", value: 30},
    {label: "Rivers", value: 31},
    {label: "Sokoto", value: 32},
    {label: "Taraba", value: 33},
    {label: "Yobe", value: 34},
    {label: "Zamfara", value: 35},
    {label: "FCT", value: 36}
  ];
  

      return (
        <>
        <div className="registerpharmacynavabar">
        <Navbar />
        </div>
       
        <div className='registerpharmacycontainer'>
        <form onSubmit={handleSubmit} className="registerpharmacyform">
          <h3></h3>
  
          <div className="mb-3">
            <label>Pharmacy Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Pharmacy Name"
              onChange={e =>{
                setpharmacyName(e.target.value)
              }}
              required='true' />
          </div>
  
          <div className="mb-3">
            <label>Address Of Pharmacy</label>
            <input type="text" className="form-control" placeholder="Enter Pharmacy Address" 
            onChange={e =>{
              setPaddress(e.target.value)
            }}
            required='true' />   
          </div>
          <div className="mb-3">
            <label>State</label>
            <Select options={stateactions} className="form-control"
            onChange={e =>{
             const val = e.label; 
             setPharmaState(val)
           }}
           required='true' />     
          </div>
          <div className="mb-3">
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Phone Number"
              onChange={e =>{
                setPhone(e.target.value)
              }}
              required='true' />
          </div>
          <div className="d-grid">
            <button type="submit" className="btnregisterpharmacy">
              Submit
            </button>
          </div>
        </form>
        </div>
        </>
      )
    }
  
  export default RegisterPharmacy