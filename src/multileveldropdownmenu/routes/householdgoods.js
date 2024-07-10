//import React from 'react';
import './householdgoods.css';
import cookingpots1 from '../../images/cookingpots1.jpg';
import cookingpots2 from '../../images/cookingpots2.jpg';
import cokkingpots3 from '../../images/cookingpots3.jpg';


import spoons from '../../images/spoons1.jpg';
import plates1 from '../../images/plates1.jpg';

import plates2 from '../../images/plates2.jpg';
import plates3 from '../../images/plates3.jpg';
import plates4 from '../../images/plates4.jpg';
import Navbar from '../../homepagenavbar/navbar';
import Header from '../Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const HouseHoldGoods = () => {
  const [cart, setCart] = useState([]); 

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(cart);
  };
 
  const gridItems = [
    { id: 1, name: 'Cooking Pots', image: cookingpots1, price: 'NGN1500', location:'Nkechi Stores Abakpa',  phone: '090455654' },
    { id: 2, name: 'Cooking Pots', image: cookingpots2, price: 'NGN5000', location:'Dominion Stores Abakpa',  phone: '090455654' },
    { id: 3, name: 'Spoons', image: spoons, price: 'NGN4000', location:'Roban Stores Trans Ekulu',  phone: '090455654' },
    { id: 4, name: 'Plates', image: plates1, price: 'NGN4000', location:'Okeke Stores Trans Ekulu',  phone: '090455654' },
    { id: 5, name: 'Plates', image: plates2, price: 'NGN5000', location:'Okeke Stores Trans Ekulu',  phone: '090455654' },
    { id: 6, name: 'Plates', image: plates3, price: 'NGN5000', location:'Shoppers Gate Trans Ekulu',  phone: '090455654' },
    { id: 7, name: 'Plates', image: plates4, price: 'NGN5000', location:'Shoppers Gate Trans Ekulu',  phone: '090455654' },
    { id: 8, name: 'Cooking Pots', image: cokkingpots3, price: 'NGN5000', location:'Shoppers Gate Trans Ekulu',  phone: '090455654' },
  
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
        <p>{item.price}</p>
        <button onClick={() => addToCart(item)}  className="add-to-cart-button">Add to Cart</button>
      </div>
    ))}
</div>
</div>
);  

};

export default HouseHoldGoods;
