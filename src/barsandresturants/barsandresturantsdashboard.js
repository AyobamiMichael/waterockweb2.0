import './barsandresturantsdashboard.css';
import BarsAndResturantsNavBar from './barnavbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BarsAndResturantsDashBoard () {

  const [barManagerUserName, setBarUsername] = useState('');
  const[allbars, setAllBars] = useState([]);
   const[filteredbars, setBarNumberOfViews] = useState([]);

   var newfilteredBars = [];
   var barNamesList = []; 

   useEffect(() => {
    const storedBarUsername = localStorage.getItem('barusername');
     if (storedBarUsername) {
       setBarUsername(storedBarUsername);
     }
      
   }, []);
   console.log(barManagerUserName);
  // Use the username to get all the bars assigned to this username in the db
 
   useEffect(()=>{
    fetchAllBarsData();
   }, []);

   const fetchAllBarsData = async () => {
    try {
      const response = await axios.get('https://waterockapi.wegotam.com/allbars');
      setAllBars(response.data);
      //console.log(response.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
     // console.log(allbars);

    
  };

  useEffect(()=>{
    filterBarNumberOfViews();
    console.log(allbars);
    },[allbars, barManagerUserName]);
  
    const filterBarNumberOfViews = () =>{
          
          newfilteredBars = allbars.filter(item => item.barManagerUserName === barManagerUserName);
         barNamesList =  newfilteredBars.map(item => item.barNumberOfViews);
         setBarNumberOfViews(barNamesList);
         console.log(filteredbars);
  }

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

