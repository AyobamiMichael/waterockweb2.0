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

  }, []);
 

  const fetchData = async () => {
    try {
      
      const response = await axios.get('https://waterockapi.wegotam.com/allbars');
      setBars(response.data);
     

    } catch (error) {
      console.error('Error fetching data:', error);
    }
     //console.log(barproducts);

    
  };

  useEffect(() => {
     
  }, [bars]);

  useEffect(() => {
     
  }, [barproductsbyusername]);
  // Destructure the bar products list of objects

  const destructedBarsList = bars.map(({ _id, barManagerUserName, barName, barAddress, barPhone  
  }) => ({_id, barManagerUserName, barName, barAddress, barPhone}));
  
   const filteredBars = destructedBarsList
   .filter(bar => bar.barManagerUserName === barManagerUserName)
   .map(({_id, barName, barAddress, barPhone }) => ({
     _id,
     barName,
     barAddress,
     barPhone
   }));
 
  const handleEdit = async (id, updatedBarName) => {
  
    fetch('https://waterockapi.wegotam.com/updateandsavebarname',{
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
              id,
              updatedBarName
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

  const handleEditBarAddress = async (id, updatedBarAddress) => {

     fetch('https://waterockapi.wegotam.com/updateandsavebaraddress',{
         method: "POST",
         crossDomain: true,
         headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
           "Access-Control-Allow-Origin": "*",
         },
         body: JSON.stringify({
               id,
               updatedBarAddress
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


   const handleEditBarPhone = async (id, updatedBarPhone) => {
  
    
     fetch('https://waterockapi.wegotam.com/updateandsavebarphone',{
         method: "POST",
         crossDomain: true,
         headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
           "Access-Control-Allow-Origin": "*",
         },
         body: JSON.stringify({
               id,
               updatedBarPhone
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
    { field: 'barName', headerName: 'Bar', width: 200, editable: true},
    { field: 'barAddress', headerName: 'Address', width: 150, editable: true },
    { field: 'barPhone', headerName: 'Phone', width: 200, editable: true },
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
      

        onRowEditStart={(params) => {
          
            console.log("Editing row:", params.row.barName, params.row._id);
            handleEdit(params.row._id,  params.row.barName)
            handleEditBarAddress(params.row._id,  params.row.barAddress)
            handleEditBarPhone(params.row._id,  params.row.barPhone)
          }}
       
       
      />
    </div>    
  </div>
  );

}


export default ViewDeleteBar;


