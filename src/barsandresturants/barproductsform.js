import React, { useState, useEffect } from 'react';
import './barproductsform.css';
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from '../../homepagenavbar/navbar';
//import ProductDashboard from '../dashboard/productsdashboard'
//import DashboardNavbar from '../dashboard/dashboardnavbar';
//import { Switch } from '@mui/material';
import BarsAndResturantsNavBar from './barnavbar';
import axios from 'axios';



const AddBarProductsForm = () => {

   // Barmanager username to attached to the products and details 
   const [barManagerUserName, setBarUsername] = useState('');
   const[allbars, setAllBars] = useState([]);
   const[filteredbars, setFilteredBars] = useState([]);
   //var filteredBarsDataBybarManagerUserNameList = [];
   const [filteredBarsDataBybarManagerUserNameList, setFilteredBarsDataBybarManagerUserNameList] = useState([]);

   var newfilteredBars = [];
   var barNamesList = []; 


   useEffect(() => {
    const storedBarUsername = localStorage.getItem('barusername');
     if (storedBarUsername) {
       setBarUsername(storedBarUsername);
     }
      
   }, []);
   console.log(barManagerUserName);
  // Use the username to get all the bars assigned to this username in the db
 
   useEffect(()=>{
    fetchAllBarsData();
   }, []);
   
  const fetchAllBarsData = async () => {
    try {
      const response = await axios.get('https://waterockapi.wegotam.com/allbars');
      setAllBars(response.data);
      //console.log(response.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
     // console.log(allbars);

    
  };

  
  
  
  useEffect(()=>{
    filterBarNamesbarManagerUserName();
    console.log(allbars);
    },[allbars, barManagerUserName]);

 
  
  const filterBarNamesbarManagerUserName = () =>{
      
      //const filteredBars = allbars.filter(item => item.barManagerUserName === barManagerUserName);
      // setFilteredBarsDataBybarManagerUserNameList(filteredBars);
      // const barNamesList =  filteredBarsDataBybarManagerUserNameList.map(item => item.barName);
        // setFilteredBars(barNamesList);
       // console.log(barNamesList);
       
          newfilteredBars = allbars.filter(item => item.barManagerUserName === barManagerUserName);
       //setFilteredBarsDataBybarManagerUserNameList(filteredBars);
         barNamesList =  newfilteredBars.map(item => item.barName);
         setFilteredBars(barNamesList);
  }
  
  

  const categoryItems = ['Abacha','Chicken Sharwama','Nkwobi', 'Zobo','Beef Sharwama',
  'Ice Cream', 
  'Cow Leg Pepper soup',
  'Isi ewu',
  'Fresh fish',
  'Crooker fish',
  'Asuun(Peppered meat)',
  'Peppered Snail',
  'Chicken Pepper Soup',
  'Grilled Chickenparts',
  'Rice and stew',
  'Swallow',
  'Ukwa',
  'Okpa',
  'Palm Wine',
  'Others'
]

  const [formData, setFormData] = useState({
    textboxes: ['', ''],
    dropdowns: [''],
   // selectedImage: null,
  });

  
 const [catSelected, setCat] = useState('');
 const [barName, setBarNameSelected] = useState('');
 const [otherProductName, setOtherProductName] = useState('');
 const [productPrice, setProductPrice] = useState('');
 //const [otherProductImage, setOtherProductImageName] = useState('');
 
  const handleTextboxChange = (e, index) => {
    const updatedTextboxes = [...formData.textboxes];
  
    updatedTextboxes[index] = e.target.value;
    setFormData({ ...formData, textboxes: updatedTextboxes });

   switch (index) {
    case 0:
      setOtherProductName(updatedTextboxes[index]);
      break;
    case 1:
      setProductPrice(updatedTextboxes[index]);
     
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
        case 1:
          setBarNameSelected(updatedDropdowns[index])  
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
  
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const requestData = {
      catSelected,
      barName,
      otherProductName,
      productPrice,
      //otherProductImage,
      barManagerUserName,
    };
    
    console.log(requestData);
    try {
      const response = await fetch("https://waterockapi.wegotam.com/registerbarproductinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(requestData),
      });
  
      const data = await response.json();
      console.log(response);
  
      if (data.status === "ok") {
        alert("Register successful");
  
        setFormData({
          textboxes: ['', ''],
          dropdowns: [''],
          //selectedImage: null,
        });
        setCat('');
        setProductPrice('');
        setOtherProductName('');
        setBarUsername('');
        //setOtherProductImageName('');
      } else {
        alert(data.error)
      }
    } catch (error) {
      console.log("Error:", error);
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
        <label>Select Bar:</label>
           <select
          className="form-control"
          value={formData.dropdowns[1]}
          required={true}  
          onChange={(e) => handleDropdownChange(e, 1)}
          placeholder="Select Bar"   
        >
          {filteredbars.map((item, index)=>
          <option  key={index} value={item}>
            {item}
          </option>)}
        </select>
       <label htmlFor="shortDescription">Short Description (Optional)</label>
        <textarea
        id="shortDescription"
        className="form-control"
        value={formData.textboxes[0]}
        onChange={(e) => handleTextboxChange(e, 0)}
        style={{ height: '200px' }}
         />
         
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






