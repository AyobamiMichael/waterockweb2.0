import { Link } from 'react-router-dom';
import Navbar from '../../homepagenavbar/navbar';
import Header from '../Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import cway from '../../images/cway.jpg';
import cwayrefill from '../../images/cwayrefillwater.jpg';
import aquafina from '../../images/aquafina.jpg';
import evawater from '../../images/evawater.jpg';



const AllWater = () => {

  const [cart, setCart] = useState([]); 

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(cart);
  };
 
  const gridItems = [
    { id: 2, name: 'Cway Water', image: cway, price: 'NGN500', location:'Nkechi Stores Abakpa' },
    { id: 3, name: 'Eva', image: evawater, price: 'NGN300', location:'Dominion Stores Abakpa' },
    { id: 4, name: 'Cway Refill', image: cwayrefill, price: 'NGN4000', location:'Roban Stores Trans Ekulu' },
    { id: 5, name: 'Aquafina', image: aquafina, price: 'NGN400', location:'Okeke Stores Trans Ekulu' },
   
  
  ];
 
  return (
    <div className='main'>
    <Navbar/>
    <Header/>
  
    <div class="grid-container">
    {gridItems.map((item) => (
        <div key={item.id} className="grid-item">
          <img src={item.image} className="freshfood" />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.location}</p>
          <button onClick={() => addToCart(item)}  className="add-to-cart-button">Add to Cart</button>
        </div>
      ))}
  </div>
  </div>

  );
};

export default AllWater;
