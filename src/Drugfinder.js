import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import RegisterPharmacy from './pharmacy/registerpharmacy';
//import DTabs from './components/Tab/tabs';
import ViewDrugs from './drugs/viewdrugs';
//import UserDetails from './components/userdetails';
import blueline from './images/blue-line-png-1.png';
import backgroundImg from './images/cpharma3.jpg'
import './images/image.css';
import RegisterDrug from './drugs/registerdrug';
import Logoutuser from './components/logout/logout';
import ViewAllDrugs from './drugs/viewalldrugs';
import UpdatePharmacy from './pharmacy/updatepharmacy';
import EditDrug from './drugs/editproduct';
import RegisterProduct from './drugs/registerproduct';
import UserData from './components/userdata';
import UserDetails from './components/userdetails';
import Searchdrugs from './landingpage/pharmacyitemslandingpage';
import ViewLandingPage from './components/mainlandingpage/mainlandingpage';



function DrugApp() {
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  console.log(loggedIn);
  
  return (
    <div className='backgroundImage' style={{backgroundImage: `url(${backgroundImg})`,
     height: '850px',
     
     }}>
    <div className="pharma-App">

       
     <Router>
  
     <div className="container">
     <header className="header">
       <Link className="navbar-brand" to={'/'}>
        <h1>WaterRock</h1> 
       </Link>
       </header>
     </div>
       
   
       <Routes>
    
       <Route exact path="*" element={<ViewLandingPage />} />
       <Route path="/sign-in" element={<Login />} />
       <Route path="/sign-up" element={<SignUp />} />
       <Route path="/registerpharmacy" element={<RegisterPharmacy />} />
       <Route path="/updatepharmacy" element={<UpdatePharmacy />} />

       <Route exact path="/viewdrugs" element={<ViewDrugs />} />
       <Route path="/registerdrug" element={<RegisterDrug />} />

       <Route path="/registerproduct" element={<RegisterProduct />} />
       

       <Route path="/login" element={<Login />} />
       
       <Route path="/logout" element={<Logoutuser />} />
       <Route path="/viewalldrugs" element={<ViewAllDrugs />} />
       <Route path="/editproduct" element={<EditDrug />} />
        
       <Route path="/userdetails" element={<UserDetails />} />
       <Route path="/userdata" element={<UserData />} />

      
       </Routes>       
     </Router>
    
    </div>
    </div>
  
   
  );
}


export default DrugApp;

//  <nav className="navbar navbar-expand-lg navbar-light fixed-top">

//  <Route path="/" exact component={ loggedIn ? <ViewDrugs /> : Login} />




// Remember Searchdrugs


