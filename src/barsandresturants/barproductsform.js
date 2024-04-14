import React, { useState, useEffect } from 'react';
import './barproductsform.css';
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from '../../homepagenavbar/navbar';
//import ProductDashboard from '../dashboard/productsdashboard'
//import DashboardNavbar from '../dashboard/dashboardnavbar';
//import { Switch } from '@mui/material';
import BarsAndResturantsNavBar from './barnavbar';



const AddBarProductsForm = () => {

   // Shoppingmall manager username to attached to the products and shop details 
   const [shoppingMallManagerUserName, setUsername] = useState('');
   useEffect(() => {
     const storedUsername = localStorage.getItem('username');
     if (storedUsername) {
       setUsername(storedUsername);
     }
   }, []);
   console.log( shoppingMallManagerUserName);

   // Product Measurements, size, 
  const weightListInGrammes = [ ];
  const weightListInKilograms = [];
  const clList = [];
  var weightInGrammes = 0;
  var weightInKiloGrammes = 0;
  var cl = 0;
   for(let i=0; i< 90; i++  ){
         weightInGrammes += 10;
         weightListInGrammes.push(weightInGrammes.toString()+'g');

   }
    for(let i=0; i< 10; i++  ){
         weightInKiloGrammes += 10;
         weightListInKilograms.push(weightInKiloGrammes.toString()+'kg');
         
   }
    for(let i=0; i< 20; i++  ){
         cl += 10;
         clList.push(cl.toString()+'cl');
         
   }

   console.log(weightListInGrammes);
   const householdGoodsMesurements = ['Small', 'Medium', 'Large', 'Big']
   const tvMeasurements = ['32 inches', '43 inches', '52 inches', '100 inches', '200 inches'];
   const refridgeratorMeasurements = ['30 liters', '50 liters', '70 liters', '90 liters', '150 liters', '200 liters'];
   const computersMeasurement = ['HP Intel Core i5', 'Dell Intel core i5', 'Intel Core i7', 'AMD'];
   const washingMachineMeasurement = ['10kg', '15kg', '20kg', '30kg'];
   const acMeasurement = ['1horse power', '2horse power'];
   const generatorMeasurement = ['2KVA', '3KVA', '10KVA', '30KVA']


   // Tv','Washing Machine', 'Refridgerator', 'Computers', 'Camera', 'AC', 'Generator', 'Phones and tablets
   // For Category
  const categoryItems = ['Water','Drinks(Alcoholic)','Drinks(Non-Alcoholic)', 'Beverages', 
  'Household Goods', 
  'Consumer Electronics(Tv)',
  'Consumer Electronics(Washing Machine)',
  'Consumer Electronics(Refridgerator)',
  'Consumer Electronics(Computers)',
  'Consumer Electronics(Camera)',
  'Consumer Electronics(AC)',
  'Consumer Electronics(Generator)',
  'Consumer Electronics(Phones and tablets)',
  
  'Toiletries',
  'Food','Cosmetics',
  'Office Supplies & Stationaries',
  'BabyCare']


  // For Item subcategories
  const beveragesSubcatItems = [
    'Tea',
    'Milk',
    'Sugar'
  ]

  const householdGoodsSubcatItems = [
    'Pots',
    'Spoons',
    'Plates',
    'Frying Pan',
    'Cups',
    'Kettle',
    'Gas cooker'
    
  ]

 
  const waterSubCatItems = [
    'Bottle',
    'Dispenser Bottle'
    
  ]
  const drinkNonAlcoholicSubCatItems = [
    'Energy drink',
    'Carbonated Drink',
    'Juice Drink',
    'Yoghurt',
    'Wine',
  ]
  const drinkAlcoholicSubCatItems = [
    'Beer',
    'Wine',
    'Spirits'
  ]
  const consumerElectronicsSubCatItems = ['Tv','Washing Machine', 'Refridgerator', 'Computers', 'Camera', 'AC', 'Generator', 'Phones and tablets']
  const toiletriesSubCatItems = ['Tooth Paste', 'Bathing Soap', 'Washing Soap', 'Detergents', 'Hand Sanitizer', 'Mouth Wash', 'Shower Gel', 'Towel']
  const foodSubCatItems = ['Fresh Food', 'Dry Food']
  const cosmeticsSubCatItems = ['Powder', 'Perfumes', 'Eye Shadow', 'Make Up', 'Nail Plish', 'Mascara', 'Lip Gloss', 'Lip Stick', 'Cream']
  const officeSupliesStationarisSubCatItems = ['Printer Paper', 'Printer', 'Scanner', 'Staplers', 'Ink Cartrages', 'Table', 'Chairs']
  const babyCareSubCatItems = ['Clothing', 'Daipers', 'Mattress', 'Baby Food', 'Cleansers', 'Baby Oil', 'Baby Cream']


  const listofstate = ["Abia",   
  "Adamawa", 
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Benue",
  "Bayelsa",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Enugu",
  "Ekiti",
  "Gombe",
  "Imo",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "FCT",
];


  const [formData, setFormData] = useState({
    textboxes: ['', '', '', '', '', ''],
    dropdowns: ['', '', '', ''],
    selectedImage: null,
  });

  
   
 const [catSelected, setCat] = useState('');
 // First Subcategory items
 const [subCatItems, setSubCat] = useState(['']);
 const [productMeasurementList, setProductMeasurement] = useState(['']);


 const [shopName, setShopName] = useState('');
 const [shopAddress, setShopAddress] = useState('');
 const [shopState, setShopState] = useState('');
 const [shopPhone, setShopPhone] = useState('');
 const [productPrice, setProductPrice] = useState('');
 const [subCatItemSelected, setSubCatItemSelected] = useState('');
 //const [catItemSelected, setCatItemSelected] = useState('');
  const [productImage, setProductImageName] = useState('');
  //const[productImageBuffer, setProductImageBuffer] = useState(null)
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleTextboxChange = (e, index) => {
    const updatedTextboxes = [...formData.textboxes];
    //console.log(updatedTextboxes);
    updatedTextboxes[index] = e.target.value;
    setFormData({ ...formData, textboxes: updatedTextboxes });

   switch (index) {
    case 0:
      setShopName(updatedTextboxes[index]);
      break;
    case 1:
      setShopAddress(updatedTextboxes[index]);
      break;
    case 2:
      setShopPhone(updatedTextboxes[index]);
      break;
    case 3:
      setProductPrice(updatedTextboxes[index]);
      break;
    case 4:
        setProductName(updatedTextboxes[index]);
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
          setSubCatItemSelected(updatedDropdowns[index]);
          break;
        case 2:
            setProductDescription(updatedDropdowns[index]);
            break;
          case 3:
            setShopState(updatedDropdowns[index]);
            break;
            default:
              break;
    }
   // console.log(catSelected);
     console.log( updatedDropdowns[index]);
    if(updatedDropdowns[index] === 'Beverages'){
         setSubCat(beveragesSubcatItems);
         setProductMeasurement(weightListInGrammes);

         console.log(subCatItems);
     }else if(updatedDropdowns[index] === 'Household Goods'){
              setSubCat(householdGoodsSubcatItems);
              setProductMeasurement(householdGoodsMesurements);
     }else if(updatedDropdowns[index] === 'Water'){
              setSubCat(waterSubCatItems);
              setProductMeasurement(clList);
     }else if(updatedDropdowns[index] === 'Drinks(Non-Alcoholic)'){
        setSubCat(drinkNonAlcoholicSubCatItems);
        setProductMeasurement(clList);
     }else if(updatedDropdowns[index] === 'Consumer Electronics(Tv)'){
       setSubCat(consumerElectronicsSubCatItems);
       setProductMeasurement(tvMeasurements);
      }else if(updatedDropdowns[index] === 'Consumer Electronics(Refridgerator)'){
        setSubCat(consumerElectronicsSubCatItems);
        setProductMeasurement(refridgeratorMeasurements);
      }else if(updatedDropdowns[index] === 'Consumer Electronics(Washing Machine)'){
        setSubCat(consumerElectronicsSubCatItems);
        setProductMeasurement(washingMachineMeasurement);      
     }
     else if(updatedDropdowns[index] === 'Consumer Electronics(Camera)'){
      setSubCat(consumerElectronicsSubCatItems);
      //setProductMeasurement(tvMeasurements);      
   }
   else if(updatedDropdowns[index] === 'Consumer Electronics(Computers)'){
    setSubCat(consumerElectronicsSubCatItems);
    setProductMeasurement(computersMeasurement);      
 }
 else if(updatedDropdowns[index] === 'Consumer Electronics(AC)'){
  setSubCat(consumerElectronicsSubCatItems);
  setProductMeasurement(acMeasurement);      
}
else if(updatedDropdowns[index] === 'Consumer Electronics(Generator)'){
  setSubCat(consumerElectronicsSubCatItems);
  setProductMeasurement(generatorMeasurement);      
}
     
     else if(updatedDropdowns[index] === 'Toiletries'){
      setSubCat(toiletriesSubCatItems);
      setProductMeasurement(weightListInGrammes);
     }else if(updatedDropdowns[index] === 'Food'){
       setSubCat(foodSubCatItems);
       setProductMeasurement(weightListInGrammes);
     }else if(updatedDropdowns[index] === 'Cosmetics'){
       setSubCat(cosmeticsSubCatItems);
     }else if(updatedDropdowns[index] === 'Office Supplies & Stationaries'){
         setSubCat(officeSupliesStationarisSubCatItems);
         setProductMeasurement(householdGoodsMesurements);
     }else if(updatedDropdowns[index] === 'BabyCare'){
         setSubCat(babyCareSubCatItems);
         setProductMeasurement(householdGoodsMesurements);
         
     }else if(updatedDropdowns[index] === 'Drinks(Alcoholic)'){
         setSubCat(drinkAlcoholicSubCatItems);
         setProductMeasurement(clList);
     }
  };

  const handleImageChange = (e) => {
   // const selectedImageBuffer = e.target.files[0]['size'];
    const selectedImage = e.target.files[0];
   // setFormData({ ...formData, selectedImage });
  //  console.log(selectedImageBuffer/1000);
     console.log(selectedImage);
 //   setProductImageBuffer(selectedImageBuffer);
    setProductImageName(selectedImage);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('shopName', shopName);
    formData.append('shopAddress', shopAddress+' '+shopState);
    formData.append('shopPhone', shopPhone);
    formData.append('productPrice', productPrice);
    formData.append('catSelected', catSelected);
    formData.append('subCatItemSelected', subCatItemSelected);
    formData.append('productImage', productImage);
    formData.append('productName', productName);
    formData.append('productDescription', productDescription);
    formData.append('shoppingMallManagerUserName',  shoppingMallManagerUserName);
  
    try {
      const response = await fetch("https://waterockapi.wegotam.com/registershop", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      console.log(data);
  
      if (data.status === "ok") {
        alert("Register successful");

        setFormData({
          textboxes: ['', '', '', '', '', ''],
          dropdowns: ['', '', '', ''],
          selectedImage: null,
        });
        setCat('');
        setSubCat(['']);
        setProductMeasurement(['']);
        setShopName('');
        setShopAddress('');
        setShopPhone('');
        setProductPrice('');
        //setSubCatItemSelected('');
        setProductImageName('');
        setProductName('');
        
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
      <div><BarsAndResturantsNavBar/></div>
     
    <div className="container form-container">
   
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={formData.textboxes[0]}
          onChange={(e) => handleTextboxChange(e, 0)}
          required='true' 
          placeholder="Enter Product Name"  
        />
           <label>Select Category:</label>
           <select
          className="form-control"
          value={formData.dropdowns[3]}
          required='true'  
          onChange={(e) => handleDropdownChange(e, 3)}
          placeholder="Select Category"   
        >
          {listofstate.map((item, index)=>
          <option  key={index} value={item}>
            {item}
          </option>)}
         
        </select>

      </div>
      {/* Repeat the above block for other form elements */}
      {/* Dropdowns */}
      <div className="form-group">
        <label>Select Category:</label>
        <select
          className="form-control"
          value={formData.dropdowns[0]}
          required='true'  
          onChange={(e) => handleDropdownChange(e, 0)}
        >
          {categoryItems.map((item, index)=>
          <option  key={index} value={item}>
            {item}
          </option>)}
         
        </select>
        <label>Select Subcategory:</label>
        <select
          className="form-control"
          value={formData.dropdowns[1]}
          required='true'  
          onChange={(e) => handleDropdownChange(e, 1)}
        >
            {subCatItems.map((item, index)=>
          <option  key={index} value={item}>
            {item}
          </option>)}
        </select>
        <input
          type="text"
          className="form-control"
          value={formData.textboxes[4]}
          required='true'  
          onChange={(e) => handleTextboxChange(e, 4)}
          placeholder="Enter Product Name"   
        />
        <label>Select Product Description:</label>
        <select
          className="form-control"
          value={formData.dropdowns[2]}
          onChange={(e) => handleDropdownChange(e, 2)}
          required='true'  
        >
            {productMeasurementList.map((item, index)=>
          <option  key={index} value={item}>
            {item}
          </option>)}
        </select>
        
        <input
          type="text"
          className="form-control"
          value={formData.textboxes[3]}
          onChange={(e) => handleTextboxChange(e, 3)}
          required='true' 
          placeholder="Price"    
        />
        <label>Product Image:</label>
        <input
          type="file"
          accept="image/*"
          className="form-control-file"
          required='true'  
          onChange={handleImageChange}
        />
     
      </div>
      {/* Image Picker */}
      <div className="form-group">
       
      </div>
      {/* Submit Buttons */}
      <div className="form-group">
        <button type="submit" className="btn btn-primary registershopsubmit">Submit</button>
       
      </div>
    </form>
    <div className='mobilenavbarregistershoppingmall'>
      <li className='mobileViewProducts'>
            <a href="/dashboardnavbar">
              <i className="fas fa-plus"></i>View
            </a>
          </li>
          <li>
            <a href="/signinformforuser">
              <i className="fas fa-sign-out-alt"></i> Sign Out
            </a>
          </li>
      </div>
  </div>
  </div>
  );
}

export default  AddBarProductsForm;


