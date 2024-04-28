import React, { useState, useEffect } from 'react';
import './barproductsform.css';
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from '../../homepagenavbar/navbar';
//import ProductDashboard from '../dashboard/productsdashboard'
//import DashboardNavbar from '../dashboard/dashboardnavbar';
//import { Switch } from '@mui/material';
import BarsAndResturantsNavBar from './barnavbar';



const AddBarProductsForm = () => {

   // Barmanager username to attached to the products and details 
   const [barManagerUserName, setBarUsername] = useState('');
   useEffect(() => {
    const storedBarUsername = localStorage.getItem('barusername');
     if (storedBarUsername) {
       setBarUsername(storedBarUsername);
     }
   }, []);
   console.log(barManagerUserName);

 
  
  const categoryItems = ['Abacha','Sharwama','Nkwobi', 'Zobo', 
  'Ice Cream', 
  'Cow Leg',
  'Isi ewu',
  'Fresh fish',
  'Crooker fish',
  'Asuun(Pepperd meat)',
  'Chicken vegetables',
  'Chicken Parts',
  'Rice',
  'Swallow',
  'Ukwa',
  'Okpa',
  'Others'
]

  const [formData, setFormData] = useState({
    textboxes: ['', ''],
    dropdowns: [''],
    selectedImage: null,
  });

  
 const [catSelected, setCat] = useState('');
 const [otherProductName, setOtherProductName] = useState('');
 const [productPrice, setProductPrice] = useState('');
 const [otherProductImage, setOtherProductImageName] = useState('');
 
  const handleTextboxChange = (e, index) => {
    const updatedTextboxes = [...formData.textboxes];
    //console.log(updatedTextboxes);
    updatedTextboxes[index] = e.target.value;
    setFormData({ ...formData, textboxes: updatedTextboxes });

   switch (index) {
    case 0:
      setProductPrice(updatedTextboxes[index]);
      break;
    case 1:
      setOtherProductName(updatedTextboxes[index]);
      break;
    default:
      break;
  }

    
  };

  const handleDropdownChange = (e, index) => {
    const updatedDropdowns = [...formData.dropdowns];
    updatedDropdowns[index] = e.target.value;
    setFormData({ ...formData, dropdowns: updatedDropdowns });
    
  //  setCatItemSelected(updatedDropdowns[index]);
    switch(index){
       case 0:
        setCat(updatedDropdowns[index])  
        break;
            default:
              break;
    }
   // console.log(catSelected);
     console.log( updatedDropdowns[index]);
   
  };

  const handleImageChange = (e) => {
   // const selectedImageBuffer = e.target.files[0]['size'];
    const selectedImage = e.target.files[0];
   // setFormData({ ...formData, selectedImage });
  //  console.log(selectedImageBuffer/1000);
     console.log(selectedImage);
 //   setProductImageBuffer(selectedImageBuffer);
    setOtherProductImageName(selectedImage);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('catSelected', catSelected);
    formData.append('otherProductName', otherProductName);
    formData.append('productPrice', productPrice);
    formData.append('otherProductImage', otherProductImage);
    formData.append('barManagerUserName',  barManagerUserName);
   
  
    try {
      const response = await fetch("http://localhost:4000/registerbarsproducts", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      console.log(data);
  
      if (data.status === "ok") {
        alert("Register successful");

        setFormData({
          textboxes: ['', ''],
          dropdowns: [''],
          selectedImage: null,
        });
        setCat('');
        setProductPrice('');
        setOtherProductName('');
        setBarUsername('');
        setOtherProductImageName('');
       
        
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed");
    }
  };
  
 
  return (
    <div className='main'>
      <div className='barproductnavbar'><BarsAndResturantsNavBar/></div>
    <div className="container form-container">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label>Select Category:</label>
           <select
          className="form-control"
          value={formData.dropdowns[0]}
          required='true'  
          onChange={(e) => handleDropdownChange(e, 0)}
          placeholder="Select Category"   
        >
          {categoryItems.map((item, index)=>
          <option  key={index} value={item}>
            {item}
          </option>)}
        </select>
        <div className="form-group"> 
        <input
          type="text"
          className="form-control"
          value={formData.textboxes[1]}
          onChange={(e) => handleTextboxChange(e, 1)}
          required='true' 
          placeholder="Price"    
        />
      </div>
        {/*If other is selected then render other product name and image*/}
 
        {catSelected === 'Others' && <>
        <input
          type="text"
          className="form-control"
          value={formData.textboxes[0]}
          onChange={(e) => handleTextboxChange(e, 0)}
          required='true' 
          placeholder="Enter Product Name"  
        />
            <div className="form-group">
      <label>Image:</label>
          <input
          type="file"
          accept="image/*"
          className="form-control-file"  
          onChange={handleImageChange}
        />
      </div>
        </>
        }
      
      </div>
      {/* Submit Buttons */}
      <div className="form-group">
        <button type="submit" className="btn btn-primary registershopsubmit">Submit</button>
       
      </div>
    </form>
  </div>
  </div>
  );
}

export default  AddBarProductsForm;


