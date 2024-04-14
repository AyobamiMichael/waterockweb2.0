import React from 'react';
import './barnavbar.css';


const BarsAndResturantsNavBar = () => {
  return (
    <div className='barandresturantnavbar'>
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
        <a href='/barsandresturantsdashboard'>Home</a>
        </li>
        <li className="navbar-item">
            <a href='/signinbarmanager'>
            Sign Out
            </a>
            </li>
            <li className="navbar-item"><a href='/addbarform'>
            Add Bar
            </a></li>
            <li className="navbar-item"><a href='/addbarproductsform'>
            Add Product
            </a></li>
      </ul>
    </nav> 
    </div>
  );
};

export default BarsAndResturantsNavBar;

//   {<AddBarsForm />}