import Navbar from '../components/sidenavbar/Navbar';
import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';


const SelectPharmacy= () =>{

     
  const [pharmacies, setpName] = useState([])
  const [singlepharmaName, setsinglePharmaName] = useState('')

  const [pharmaciesList, setPharmaciesList] = useState([])

    const actions = [{label: "Pharma1", value: 1},
    {label: "Pharma2", value: 2}, 
    {label: "Pharma3", value: 3},
    {label: "Pharma4", value: 4}
  ];

   
  useEffect(()=>{
     
      fetch('https://wegotam.com/multipharmaData',{

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
        //console.log(data.data);
         setpName(data.data);
         window.localStorage.setItem('pharmadata', JSON.stringify(data.data))           
       });

  }, [])

  
  useEffect(()=>{
    const data = JSON.parse(window.localStorage.getItem('pharmadata'));
    if(data){
      setPharmaciesList(data);
    }
}, []);
      
  /*
  useEffect(()=>{
     
    fetch('http://localhost:4000/singlepharmaData',{

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
     .then((data) =>{
      console.log(data.data);
       //setsinglePharmaName(data.data)           
     });

}, [])
    */

  // let optionItems = pharmacies.map((pharma)=><option key= {pharma.pname}>{pharma.pname}</option>);
    // console.log(optionItems);
    let optionItems = pharmacies.map((pharma)=>({
        'value': pharma._id,
        'label': pharma.pname
    }));

   const result = pharmaciesList.filter((pharma)=>(
      singlepharmaName === pharma.pname));
  console.log(result);


    return(
        <div>
        <Select options={optionItems}
        onChange={e =>{ 
          const val = e.label;
          setsinglePharmaName(val)
          }} 
        />
        </div>
    )
}

export default SelectPharmacy;