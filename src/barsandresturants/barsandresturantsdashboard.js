import './barsandresturantsdashboard.css';
import BarsAndResturantsNavBar from './barnavbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BarsAndResturantsDashBoard () {
  const [barManagerUserName, setBarUsername] = useState('');
  const [allBars, setAllBars] = useState([]);
  const [filteredBars, setFilteredBars] = useState([]);

  useEffect(() => {
    const storedBarUsername = localStorage.getItem('barusername');
    if (storedBarUsername) {
      setBarUsername(storedBarUsername);
    }
  }, []);

  useEffect(() => {
    fetchAllBarsData();
  }, []);

  const fetchAllBarsData = async () => {
    try {
      const response = await axios.get('https://waterockapi.wegotam.com/allbars');
      setAllBars(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    filterBarNumberOfViews();
  }, [allBars, barManagerUserName]);

  const filterBarNumberOfViews = () => {
    const filtered = allBars.filter(item => item.barManagerUserName === barManagerUserName);
    setFilteredBars(filtered);
  };

  const handleImageClick = (barName) => {
    document.getElementById(`fileInput-${barName}`).click(); // Trigger the file input click
  };

  const handleImageUpload = async (e, barName) => {
    const file = e.target.files[0]; // Get the uploaded file
    if (!file) return;

    const formData = new FormData();
    formData.append('barImage', file); // Append the file to FormData
    // https://waterockapi.wegotam.com/updatebarimage/${barName}
    // http://localhost:4000/updatebarimage
    try {
      const response = await fetch(`https://waterockapi.wegotam.com/updatebarimage/${barName}`, {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      console.log(response);
  
      if (data.status === "ok") {

        alert('Image updated successfully!');
        fetchAllBarsData(); // Refresh bar data to reflect the updated image
        
      } else {
        alert('Error updating image.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image.');
    }



/*
    try {
      // Make an axios request to the backend to update the image
      // https://waterockapi.wegotam.com/updatebarimage/${barName}
      const response = await axios.post(`http://localhost:4000/updatebarimage/${barName}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      if (response.data.status === 'ok') {
        alert('Image updated successfully!');
        fetchAllBarsData(); // Refresh bar data to reflect the updated image
      } else {
        alert('Error updating image.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image.');
    }*/
  };

  const getHighestRating = (ratings) => {
    const validRatings = ratings.filter(rating => rating !== "").map(Number);
    return validRatings.length > 0 ? Math.max(...validRatings) : "No rating";
  };

  const getRandomComment = (comments) => {
    const validComments = comments.filter(comment => comment !== "");
    if (validComments.length > 0) {
      const randomIndex = Math.floor(Math.random() * validComments.length);
      return validComments[randomIndex];
    }
    return "No comments available";
  };

  return (
    <div className='main'>
      <div className='barandresturantdashboardnavbar'><BarsAndResturantsNavBar/></div>
     
      <div className='barsandresturantlandingpage'>
        <h1>Welcome {barManagerUserName}</h1>
        <h2>Your Registered Bars</h2>

        {/* Display bars in a grid */}
        <div className='bars-grid'>
          {filteredBars.length > 0 ? (
            filteredBars.map((bar, index) => (
              <div key={index} className='bar-item'>
                <h3>{bar.barName}</h3>
                <img 
                  src={`https://waterockapi.wegotam.com/${bar.barImage}`} 
                  alt={bar.barName} 
                  className='bar-image' 
                  onClick={() => handleImageClick(bar.barName)} // Image click triggers file input
                />
                {/* Hidden file input */}
                <input
                  type="file"
                  id={`fileInput-${bar.barName}`}
                  style={{ display: 'none' }}
                  onChange={(e) => handleImageUpload(e, bar.barName)}
                />
                <p>Views: {bar.barNumberOfViews}</p>
                <p>Highest Rating: {getHighestRating(bar.rating)}</p>
                <p>Random Comment: {getRandomComment(bar.customerReview)}</p>
              </div>
            ))
          ) : (
            <p>No bars found for this user.</p>
          )}
        </div>

       
      </div>
    </div>
  );
};

export default BarsAndResturantsDashBoard;

















































