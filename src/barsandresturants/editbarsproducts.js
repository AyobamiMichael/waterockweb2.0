import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import BarsAndResturantsNavBar from './barnavbar';


function EditBarProductsGrid() {
    const [barproducts, setBarProducts] = useState([]);
    const [barproductsbyusername, setBarProductsByUsername] = useState([]);
    const [barManagerUserName, setBarUsername] = useState('');

    
  useEffect(() => {
    fetchData();
    const storedBarUsername = localStorage.getItem('barusername');
    if (storedBarUsername) {
      setBarUsername(storedBarUsername);
    }

  }, []);
  console.log(barManagerUserName);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/barproducts/${barManagerUserName}/`);
      setBarProducts(response.data);
      //console.log(response.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
     //console.log(barproducts);

    
  };

  useEffect(() => {
    console.log(barproducts); 
    
  }, [barproducts]);
  
  const handleEdit = async (id, updatedPrice) => {
    try {
      await axios.put(`/api/products/${id}`, { productprice: updatedPrice });
      // Update the local state after successful edit
      setBarProducts(prevProducts =>
        prevProducts.map(product =>
          product.id === id ? { ...product, productprice: updatedPrice } : product
        )
      );
    } catch (error) {
      console.error('Error updating product price:', error);
    }
  };


  const columns = [
    { field: '_id', headerName: 'ID', width: 100 },
    { field: 'catSelected', headerName: 'Product Name', width: 200 },
    { field: 'productPrice', headerName: 'Product Price', width: 150, editable: true },
  ];

  
 /*fetch("http://localhost:4000/barproducts", {
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
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={barproducts}
        columns={columns}
        pageSize={5}
        checkboxSelection={false}
        editMode="row"
        onEditCellChangeCommitted={({ id, field, props }) => {
          if (field === 'productprice') {
            handleEdit(id, props.value);
          }
        }}
      />
    </div>
      
  </div>
  );

}


export default EditBarProductsGrid;


/*
   
*/