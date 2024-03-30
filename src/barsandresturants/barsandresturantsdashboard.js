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
      </ul>
    </nav>
     <div className='addbarformcompo'>
     {<AddBarsForm />}
     </div>
  
    
    </div>
  );
};

export default BarsAndResturantsNavBar;
