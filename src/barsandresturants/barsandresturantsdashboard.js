import React from 'react';
import './barsandresturantsdashboard.css';
import AddBarsForm from './addbarsform';

const BarsAndResturantsNavBar = () => {
  return (
    <div className='barandresturant'>
  
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">View</li>
        <li className="navbar-item">
            <a href='/signinbarmanager'>
            Sign Out
            </a>
            </li>
            <li className="navbar-item"><a href='/addbarproductsform'>
            Add Product
            </a></li>
      </ul>
    </nav>
     <div className='addbarformcompo'>
   
     </div>
  
    
    </div>
  );
};

export default BarsAndResturantsNavBar;

//   {<AddBarsForm />}