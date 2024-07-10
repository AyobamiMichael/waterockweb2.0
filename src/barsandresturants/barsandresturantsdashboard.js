import React from 'react';
import './barsandresturantsdashboard.css';
import BarsAndResturantsNavBar from './barnavbar';

function BarsAndResturantsDashBoard () {
  return (
    <div className='main'>
      <div className='barandresturantdashboardnavbar'><BarsAndResturantsNavBar/></div>
     
      <div className='barsandresturantlandingpage'>
        <h1>Welcome</h1>
        <h2>Number of views</h2>
        <div className='advertise-container'>
          <h2>Advertise Here</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default BarsAndResturantsDashBoard;

