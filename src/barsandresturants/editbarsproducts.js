import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import BarsAndResturantsNavBar from './barnavbar';
import './editbarsproducts.css';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function EditBarProductsGrid() {
    const [barproducts, setBarProducts] = useState([]);
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
     
      const response = await axios.get('https://waterockapi.wegotam.com/barproducts');
      setBarProducts(response.data);
      //console.log(response.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
     //console.log(barproducts);

    
  };

  useEffect(() => {
    //console.log(barproducts); 
    
  }, [barproducts]);

  useEffect(() => {
   // console.log("barproductsbyusername:  "+barproductsbyusername); 
    
  }, [barproductsbyusername]);
  // Destructure the bar products list of objects

  const destructedBarProductsList = barproducts.map(({ _id, barManagerUserName, productPrice, otherProductName, catSelected  
  }) => ({_id, barManagerUserName,productPrice, otherProductName, catSelected }));
 
   const filteredProducts = destructedBarProductsList
   .filter(product => product.barManagerUserName === barManagerUserName)
   .map(({_id, catSelected, productPrice, otherProductName }) => ({
     _id,
     catSelected,
     productPrice,
     otherProductName
   }));
   filteredProducts.forEach(item => {
     
  });
  
  const handleEdit = async (id, updatedPrice) => {
   
   
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
      await axios.delete(`https://waterockapi.wegotam.com/deletebarproduct/${id}`);
      setBarProducts(prevBars => prevBars.filter(bar => bar._id !== id));
      alert('Bar Product deleted successfully');
    } catch (error) {
      console.error('Error deleting bar:', error);
    }
  };


  const columns = [
    { field: 'catSelected', headerName: 'Category Selected', width: 200 },
    { field: 'productPrice', headerName: 'Product Price', width: 150, editable: true },
    { field: 'otherProductName', headerName: 'Other Product Name', width: 200 },
    {
      renderCell: (params) => (
        <IconButton onClick={() => handleDelete(params.row._id)}>
          <DeleteIcon />
        </IconButton>
      ),
    }
  ];
  
  
 
  


  return (
    <div className='main'>
      <div className='barproductnavbar'><BarsAndResturantsNavBar/></div>
      <div className='grid'>
      <DataGrid
        rows={filteredProducts}
        columns={columns}
        pageSize={5}
        checkboxSelection={false}
        editMode="row"
        
        getRowId={row => row._id}
       
        onRowEditStart={(params) => {
          
            console.log("Editing row:", params.row.productPrice, params.row._id);
            handleEdit(params.row._id,  params.row.productPrice)
           
          }}
          
       
      />
    </div>    
  </div>
  );

}


export default EditBarProductsGrid;


