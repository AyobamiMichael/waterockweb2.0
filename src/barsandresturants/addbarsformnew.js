import React, { useState, useEffect } from 'react';
import './addbarsform.css';
import 'bootstrap/dist/css/bootstrap.css';
import BarsAndResturantsNavBar from './barnavbar';



function RegisterBarForm(){
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

  const listOfBusinessType = ['Bars','Fast Foods','Joints', 'Resturants']

  const [formData, setFormData] = useState({
    textboxes: ['', '', '',],
    dropdowns: [''],
    selectedImage: null,
  });


  const [barName, setBarName] = useState('');
 const [barAddress, setBarAddress] = useState('');
 const [barState, setBarState] = useState('');
 const [barPhone, setBarPhone] = useState('');
 const [barImage, setBarImageName] = useState('');
 const [businessType, setBusinessType] = useState('');
 



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
        case 1:
        setBusinessType(updatedDropdowns[index]);
        break;
       default:
              break;
    }
   // console.log(catSelected);
     console.log( updatedDropdowns[index]);
}

const handleImageChange = (e) => {
    // const selectedImageBuffer = e.target.files[0]['size'];
     const selectedImage = e.target.files[0];
    // setFormData({ ...formData, selectedImage });
   //  console.log(selectedImageBuffer/1000);
      console.log(selectedImage);
  //   setProductImageBuffer(selectedImageBuffer);
     setBarImageName(selectedImage);
 
   };


   const handleSubmit = async (e) => {
    e.preventDefault();
  
    
    const formData = new FormData();
    formData.append('barName', barName);
    formData.append('barAddress', barAddress);
    formData.append('barState', barState);
    formData.append('barPhone', barPhone);
    formData.append('barImage', barImage);
    formData.append('barManagerUserName',barManagerUserName);
    formData.append('businessType', businessType); // Yet to be add to the server and DB

    if(!/^0\d{10}$/.test(barPhone)){
        alert('Invalid number');
        return;      
    }
    
    try {
      const response = await fetch("https://waterockapi.wegotam.com/registerbars", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      console.log(response);
  
      if (data.status === "ok") {
        alert("Register successful");

        setFormData({
          textboxes: ['', '', ''],
          dropdowns: [''],
          selectedImage: null,
        });
        setBarName('');
        setBarAddress('');
        setBarState('');
        setBarPhone('');
        setBarImageName('');
        setBarUsername('');
        setBusinessType('');
        
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
              placeholder="Business Name"
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

<label>Business Type:</label>
             <select
              className="form-control"
              value={formData.dropdowns[1]}
              onChange={(e) => handleDropdownChange(e, 1)}
              placeholder="Business Type"  
              required = 'true'
            >
              {listOfBusinessType.map((item, index)=>
          <option  key={index} value={item}>
            {item}
          </option>)}
         
            </select> 
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
}


export default RegisterBarForm;