import React from 'react';
import './barnavbar.css';


const BarsAndResturantsNavBar = () => {
  return (
    <div className='barandresturantnavbar'>
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="homenavbar-item">
        <a href='/barsandresturantsdashboard'>Home</a>
        </li>
        <li className="addbarnavbar-item"><a href='/addbarform'>
            Add Bar
            </a></li>
            <li className="addproductnavbar-item"><a href='/addbarproductsform'>
            Add Product
            </a></li>
            <li className="editnavbar-item"><a href=''>
              Edit
            </a></li>
        <li className="signoutnavbar-item">
            <a href='/signinbarmanager'>
            Sign Out
            </a>
            </li>
          
      </ul>
    </nav> 
    </div>
  );
};

export default BarsAndResturantsNavBar;

//   {<AddBarsForm />}