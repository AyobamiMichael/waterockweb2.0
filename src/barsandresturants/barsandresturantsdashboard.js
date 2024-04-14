import React from 'react';
import './barsandresturantsdashboard.css';
import BarsAndResturantsNavBar from './barnavbar';

const BarsAndResturantsDashBoard = () => {
  return (
    <div className='main'>
       <BarsAndResturantsNavBar/>
     <div className='barsandresturantlandingpage'>
       <h1 className=''>Welcome: </h1>
       <h1 className=''>Number of views</h1>
       <h1 className=''>Advertise Here</h1>
     </div>
    </div>
  );
};

export default BarsAndResturantsDashBoard;

