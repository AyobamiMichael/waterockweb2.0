import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import BarsAndResturantsNavBar from './barnavbar';


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
      //const response = await axios.get(`http://localhost:4000/barproducts/${barManagerUserName}/`);
      const response = await axios.get('http://localhost:4000/barproducts');
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
  //const [firstProduct, secondProduct, ...restProducts] = barproducts;

 
   //console.log('DestructedData  '+destructedBarProductsList);
   const filteredProducts = destructedBarProductsList
   .filter(product => product.barManagerUserName === barManagerUserName)
   .map(({_id, catSelected, productPrice, otherProductName }) => ({
     _id,
     catSelected,
     productPrice,
     otherProductName
   }));
   filteredProducts.forEach(item => {
      //console.log(item.catSelected);
  });
   //console.log(filteredProducts);
  //const filterBarProductsData =() =>{
  
  //   setBarProductsByUsername(filteredProducts);
     
  //}
  const handleEdit = async (id, updatedPrice) => {
    //console.log(id);
    //await axios.put(`http://localhost:4000/updateandsavebarproduct/${id}`, { productprice: updatedPrice });
   
    fetch('http://localhost:4000/updateandsavebarproduct',{
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


  const columns = [
    { field: 'catSelected', headerName: 'Category Selected', width: 200 },
    { field: 'productPrice', headerName: 'Product Price', width: 150, editable: true },
    { field: 'otherProductName', headerName: 'Other Product Name', width: 200 }
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
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={filteredProducts}
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


export default EditBarProductsGrid;


/*
  
    console.log(_id);
          if (field === 'productPrice') {
            handleEdit(_id, props.value);
          }






           try {
      //  await axios.put('http://localhost:4000/updateandsavebarproduct');
     await axios.put(`http://localhost:4000/updateandsavebarproduct/${id}`, { productprice: updatedPrice });
      
      setBarProducts(prevProducts =>
        prevProducts.map(product =>
          product._id === id ? { ...product, productprice: updatedPrice } : product
        )
      );
    } catch (error) {
      console.error('Error updating product price:', error);
    }
*/