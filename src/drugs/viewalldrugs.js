//import React, { Component } from "react";
//import DataGrid from 'react-data-grid';
import "./viewdrugs.css";
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Logoutuser from "../components/logout/logout";
import Navbar from "../components/sidenavbar/Navbar";


const columns = [
  { field: '_id', headerName: 'ID', width: 200},
  { field: 'drugname', headerName: 'Drug Name', width: 200 },
  { field: 'uname', headerName: 'Uname', width: 200 },
  { field: 'mg', headerName: 'Mg', width: 100 },
  
]




const ViewAllDrugs =() =>{
   
  var result = '';

  
  const [tableData, setTableData] = useState([]);

  //const [rows, setRows] = useState(tableData);

  
  useState(() => {

     
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
       // console.log(data, "AyomiData");
        //this.setState({userData: data.data });
        result = data.data.uname
        //this.setState({uname: result})
        console.log(result, 'Ayo')
      
      });   




    fetch("https://waterockapi.wegotam.com/viewalldrugs", {
       method: 'POST',
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
      .then((data) => data.json())
      .then((data) => setTableData(data.data))

  }, [])
   console.log(tableData)
    

    return(
      <div>
     <Navbar />
      <div className="grid" style={{ height: 500, width: '75%' }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={tableData}
        columns={columns}
        
        pageSize={12}
      />
    </div>
    </div> 
    )
}

export default ViewAllDrugs

