import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import BarsAndResturantsNavBar from './barnavbar';
import './editbarsproducts.css';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function ViewDeleteBar() {
    const [bars, setBars] = useState([]);
    const [barproductsbyusername, setBarProductsByUsername] = useState([]);
    const [barManagerUserName, setBarUsername] = useState('');

    useEffect(()=>{
        const storedBarUsername = localStorage.getItem('barusername');
        if (storedBarUsername) {
          setBarUsername(storedBarUsername);
        }
    }, []);
    console.log(barManagerUserName);
    

  useEffect(() => {
    fetchData();
   // filterBarProductsData();
  }, []);
 

  const fetchData = async () => {
    try {
      //const response = await axios.get(`http://localhost:4000/barproducts/${barManagerUserName}/`);
      const response = await axios.get('https://waterockapi.wegotam.com/allbars');
      setBars(response.data);
      //console.log(response.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
     //console.log(barproducts);

    
  };

  useEffect(() => {
    //console.log(barproducts); 
    
  }, [bars]);

  useEffect(() => {
   // console.log("barproductsbyusername:  "+barproductsbyusername); 
    
  }, [barproductsbyusername]);
  // Destructure the bar products list of objects

  const destructedBarsList = bars.map(({ _id, barManagerUserName, barName, barAddress, barPhone  
  }) => ({_id, barManagerUserName, barName, barAddress, barPhone}));
  //const [firstProduct, secondProduct, ...restProducts] = barproducts;

 
   //console.log('DestructedData  '+destructedBarProductsList);
   const filteredBars = destructedBarsList
   .filter(bar => bar.barManagerUserName === barManagerUserName)
   .map(({_id, barName, barAddress, barPhone }) => ({
     _id,
     barName,
     barAddress,
     barPhone
   }));
 
  const handleEdit = async (id, updatedPrice) => {
    //console.log(id);
    //await axios.put(`http://localhost:4000/updateandsavebarproduct/${id}`, { productprice: updatedPrice });
   
    fetch('https://waterockapi.wegotam.com/updateandsavebarproduct',{
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
              id,
              updatedPrice
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
         
         console.log('Edited sucessfully', data);
         alert(data.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://waterockapi.wegotam.com/deletebar/${id}`);
      setBars(prevBars => prevBars.filter(bar => bar._id !== id));
      alert('Bar deleted successfully');
    } catch (error) {
      console.error('Error deleting bar:', error);
    }
  };


  const columns = [
    { field: 'barName', headerName: 'Bar', width: 200 },
    { field: 'barAddress', headerName: 'Address', width: 150, editable: false },
    { field: 'barPhone', headerName: 'Phone', width: 200 },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 100,
        renderCell: (params) => (
          <IconButton onClick={() => handleDelete(params.row._id)}>
            <DeleteIcon />
          </IconButton>
        ),
      },
  ];
  
  
 
  
 /*fetch(" http://localhost:4000/barproducts", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      //token: window.localStorage.getItem("token"),
    }),
    // body: formData,
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
   // console.log(data);
    setBarProducts(data);
    console.log('DB',barproducts);
  })
  .catch(error => {
    console.error("Error:", error);
  });*/

  return (
    <div className='main'>
      <div className='barproductnavbar'><BarsAndResturantsNavBar/></div>
      <div className='grid'>
      <DataGrid
        rows={filteredBars}
        columns={columns}
        pageSize={5}
        checkboxSelection={false}
        editMode="row"
        
        getRowId={row => row._id}
       /* onRowEditStart={({id, field, props})=>{
            props = ''
            console.log(props);
            if(field === 'productPrice'){
               // handleEdit(id)
            }
        }}*/

        onRowEditStart={(params) => {
          
            console.log("Editing row:", params.row.productPrice, params.row._id);
            handleEdit(params.row._id,  params.row.productPrice)
           
          }}
       
      //  isCellEditable={(params) => console.log(params.row.productPrice)}
       
      />
    </div>    
  </div>
  );

}


export default ViewDeleteBar;


