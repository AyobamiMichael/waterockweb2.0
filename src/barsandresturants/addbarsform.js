import React, { useState, useEffect } from 'react';
import './addbarsform.css';
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from '../../homepagenavbar/navbar';
//import ProductDashboard from '../dashboard/productsdashboard'
//import DashboardNavbar from '../dashboard/dashboardnavbar';
//import { Switch } from '@mui/material';
import BarsAndResturantsNavBar from './barnavbar';



const AddBarsForm = () => {
  const [barManagerUserName, setBarUsername] = useState('');
  useEffect(() => {
    const storedBarUsername = localStorage.getItem('barusername');
    if (storedBarUsername) {
      setBarUsername(storedBarUsername);
    }
  }, []);
  console.log(barManagerUserName);

  const listofstate = ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Benue", "Bayelsa", "Borno",
    "Cross River", "Delta", "Ebonyi", "Edo", "Enugu", "Ekiti", "Gombe", "Imo", "Kaduna",
    "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun",
    "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT"
  ];


  const [formData, setFormData] = useState({
    textboxes: ['', '', ''],
    dropdowns: [''],
    selectedImage: null,
  });


  const [barName, setBarName] = useState('');
  const [barAddress, setBarAddress] = useState('');
  const [barState, setBarState] = useState('');
  const [barPhone, setBarPhone] = useState('');
  const [barImage, setBarImageName] = useState('');
  /*const [formData, setFormData] = useState({
    barName: '',
    barAddress: '',
    barPhone: '',
    barState: '',
    barImages:''
    
  });*/

  const handleTextboxChange = (e, index) => {
    const updatedTextboxes = [...formData.textboxes];
    //console.log(updatedTextboxes);
    updatedTextboxes[index] = e.target.value;
    setFormData({ ...formData, textboxes: updatedTextboxes });

   switch (index) {
    case 0:
      setBarName(updatedTextboxes[index]);
      break;
    case 1:
      setBarAddress(updatedTextboxes[index]);
      break;
    case 2:
      setBarPhone(updatedTextboxes[index]);
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
        setBarState(updatedDropdowns[index])  
        break;
        default:
        break;
    } 

  }

  const handleImageChange = (e) => {
   
    const selectedImage = e.target.files[0];
      console.log(selectedImage);
      setBarImageName(selectedImage);





     //setBarImageName([...barImages, ...e.target.files]);
     //setFormData({ ...formData, selectedImage });
     //console.log(barImages);
 
   };
   /*
  const handleFileChange = (e) => {
   // setFormData({ ...formData, barImage: e.target.file });
   const file = e.target.files[0]; // Get the first file from the FileList
    setFormData({ ...formData, barImages: e.target.files[0] });
    console.log(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
 */
  const handleSubmit = async (e) => {
    e.preventDefault();



    const formDataNew = new FormData();
    formDataNew.append('barName', barName);
    formDataNew.append('barAddress', barAddress);
    formDataNew.append('barState', barState);
    formDataNew.append('barPhone', barPhone);
    formDataNew.append('barImage', barImage);
    formDataNew.append('barManagerUserName',barManagerUserName);
      
    console.log(formDataNew);
    /*
    const requestBody = {
      barName: formData.textboxes[0],
      barAddress: formData.textboxes[1],
      barPhone: formData.textboxes[2],
      barState: formData.dropdowns[0],
      barManagerUserName: barManagerUserName,
      barImage: barImage
    
    };
     */
    
   // console.log("Request body:", requestBody);
   

    try {
      const response = await fetch("http://localhost:4000/registerbars", {
        method: "POST",
        body: formDataNew,
      });

      const data = await response.json();
      console.log(data);
      if (data.status === "ok") {
        alert("Registration successful");
        setFormData({
          textboxes: ['', '', ''],
          dropdowns: [''],
          selectedImage: null,
        });
      
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed");
    }
    
  };

  return (
    <div className='main'>
      <div className='addbarnavbar'>
        <BarsAndResturantsNavBar />
      </div>
      <div className="container form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={formData.textboxes[0]}
              onChange={(e) => handleTextboxChange(e, 0)}
              placeholder="Enter Bar Name"
              required = 'true'
            />
            <input
              type="text"
              className="form-control"
              value={formData.textboxes[1]}
              onChange={(e) => handleTextboxChange(e, 1)}
              placeholder="Enter Address"
              required = 'true'
            />
            <label>Select State:</label>
            <select
              className="form-control"
              value={formData.dropdowns[0]}
              onChange={(e) => handleDropdownChange(e, 0)}
              placeholder="Select State"  
              required = 'true'
            >
              {listofstate.map((item, index)=>
          <option  key={index} value={item}>
            {item}
          </option>)}
         
            </select>
            <input
              type="text"
              className="form-control"
              value={formData.textboxes[2]}
              onChange={(e) => handleTextboxChange(e, 2)}
              placeholder="Enter Phone Number"
              required = 'true'
            />
        
        <label>Image:</label>
          <input
          type="file"
          accept="image/*"
          className="form-control-file"
          required='false'  
          onChange={handleImageChange}
        
        />

          </div>
          
          <div className="form-group">
            <button type="submit" className="btn btn-primary registershopsubmit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBarsForm;























/*
       <input
          type="file"
          className="form-control"
          required='true'  
          onChange={handleImageChange}
    
        />


   <label>Image:</label>
          <input
          type="file"
          accept="image/*"
          className="form-control-file"
          required='false'  
          onChange={handleImageChange}
          multiple
        />

    const requestBody = {
      barName: formData.barName,
      barAddress: formData.barAddress,
      barPhone: formData.barPhone,
      barState: formData.barState,
      barManagerUserName: barManagerUserName,
      barImages: formData.barImages
    
    };
  
  
    console.log("Request body:", requestBody);
   

    try {
      const response = await fetch("http://localhost:4000/registerbars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(data);
      if (data.status === "ok") {
        alert("Registration successful");
        setFormData({
          barName: '',
          barAddress: '',
          barPhone: '',
          barState: '',
          barImages: ''
          
        });
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed");
    }




     return (
    <div className='main'>
      <div className='addbarnavbar'>
        <BarsAndResturantsNavBar />
      </div>
      <div className="container form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="barName"
              value={formData.barName}
              onChange={handleChange}
              placeholder="Enter Bar Name"
              required
            />
            <input
              type="text"
              className="form-control"
              name="barAddress"
              value={formData.barAddress}
              onChange={handleChange}
              placeholder="Enter Address"
              required
            />
            <label>Select State:</label>
            <select
              className="form-control"
              name="barState"
              value={formData.barState}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              {listofstate.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
            <input
              type="text"
              className="form-control"
              name="barPhone"
              value={formData.barPhone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              required
            />
         <input
              type="file"
              className="form-control"
              accept="image/*"
              
              onChange={handleFileChange}
            />
  
          <input
          type="file"
          accept="image/*"
          className="form-control-file"
          
          required='true'  
          onChange={handleFileChange}
        />
     
          </div>
          
          <div className="form-group">
            <button type="submit" className="btn btn-primary registershopsubmit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
    

*/










/**
 *  <input
              type="file"
              className="form-control" 
              onChange={handleFileChange}
            />

              <input
              type="file"
              className="form-control-file"
              accept="image/*"
              onChange={handleFileChange}
            
            />
 */













/*
function AddBarsForm() {

   // Shoppingmall manager username to attached to the products and shop details 
   const [barManagerUserName, setBarUsername] = useState('');
   useEffect(() => {
     const storedBarUsername = localStorage.getItem('barusername');
     if (storedBarUsername) {
       setBarUsername(storedBarUsername);
     }
   }, []);
   console.log(barManagerUserName);

  
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
    textboxes: ['', '', ''],
    dropdowns: [''],
   
  });

   //selectedImage: null,
   
// const [catSelected, setCat] = useState('');
 // First Subcategory items
// const [subCatItems, setSubCat] = useState(['']);
// const [productMeasurementList, setProductMeasurement] = useState(['']);


 const [barName, setBarName] = useState('');
 const [barAddress, setBarAddress] = useState('');
 const [barState, setBarState] = useState('');
 const [barPhone, setBarPhone] = useState('');

  const [barImage, setBarImageName] = useState([]);


  const handleTextboxChange = (e, index) => {
    const updatedTextboxes = [...formData.textboxes];
    //console.log(updatedTextboxes);
    updatedTextboxes[index] = e.target.value;
    setFormData({ ...formData, textboxes: updatedTextboxes });

   switch (index) {
    case 0:
      setBarName(updatedTextboxes[index]);
      break;
    case 1:
      setBarAddress(updatedTextboxes[index]);
      break;
    case 2:
      setBarPhone(updatedTextboxes[index]);
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
            setBarState(updatedDropdowns[index]);
            break;
            default:
              break;
    }
   // console.log(catSelected);
     console.log( updatedDropdowns[index]);
  
  };

  const handleImageChange = (e) => {
  
    setBarImageName([...barImage, ...e.target.files]);

    console.log(barImage);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('barName', barName);
    formData.append('barAddress', barAddress+' '+barState);
    formData.append('barPhone', barPhone);

     console.log(barName);
  
  //  barImage.forEach((barImage)=>{
    //  formData.append('barImage', barImage);
    //})
    //formData.append('barManagerUserName',  barManagerUserName);
  
    try {
      const response = await fetch("http://localhost:4000/registerbars", {
        method: "POST",
        body: formData,
        
      });
      
      console.log(formData);
      const data = await response.json();
      console.log('data:'+data);
  
      if (data.status === "ok") {
        alert("Register successful");

        setFormData({
          textboxes: ['', '', ''],
          dropdowns: [''],
         
        });
        setBarName('');
        setBarAddress('');
        setBarPhone('');



         //selectedImage: null,
        //setBarUsername('');
        //setBarImageName([]);
      
        
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
      <div className='addbarnavbar'>
      <BarsAndResturantsNavBar/>
      </div>
    <div className="container form-container">
    <form onSubmit={handleSubmit}  enctype="multipart/form-data">

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={formData.textboxes[0]}
          onChange={(e) => handleTextboxChange(e, 0)}
          required='true' 
          placeholder="Enter Barname"  
        />
        <input
          type="text"
          className="form-control"
          value={formData.textboxes[1]}
          required='true' 
          placeholder="Enter Address"   
          onChange={(e) => handleTextboxChange(e, 1)}
        />
           <label>Select State:</label>
           <select
          className="form-control"
          value={formData.dropdowns[3]}
          required='true'  
          onChange={(e) => handleDropdownChange(e, 3)}
          placeholder="Select State"   
        >
          {listofstate.map((item, index)=>
          <option  key={index} value={item}>
            {item}
          </option>)}
         
        </select>
        <input
          type="text"
          className="form-control"
          value={formData.textboxes[2]}
          required='true'  
          onChange={(e) => handleTextboxChange(e, 2)}
          placeholder="Enter Phonenumber"   
        />
      </div>
    
    
    
      <div className="form-group">
        <button type="submit" className="btn btn-primary registershopsubmit">Submit</button>
       
      </div>
    </form>
 
  </div>
  
  </div>
  );
}

export default  AddBarsForm;
*/


/**
 *   <div className="form-group">  
        <label>Kindly upload a nice picture of your bar max 2:</label>
        <input
          type="file"
          accept="image/*"
          className="form-control-file"
          required='true'  
          onChange={handleImageChange}
          multiple
        />
      </div>
 */
/**
 * 
 * <div className='mobilenavbarregistershoppingmall'>
    <li className='mobileViewProducts'>
          <a href="/dashboardnavbar">
            <i className="fas fa-plus"></i>View
          </a>
        </li>
        <li>
          <a href="/addbarproductsform">
            <i className="fas fa-sign-out-alt"></i> Add Products
          </a>
        </li>
        <li>
          <a href="/signinformforuser">
            <i className="fas fa-sign-out-alt"></i> Sign Out
          </a>
        </li>
    </div>
 * 
 */