//import React from "react";
import { Link } from 'react-router-dom';
import Navbar from '../../homepagenavbar/navbar';
import Header from '../Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import threebeer from '../../images/33beer.jpg';
import chivita from '../../images/chivita.jpg';
import fearless from '../../images/fearlessdrink.jpg';
import hennessy from '../../images/hennessy2.jpg';
import throphy from '../../images/trophybeer.png';
import heineken from  '../../images/heinekenbeer.jpeg';

const Alldrinks = () => {
  const [cart, setCart] = useState([]); 

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(cart);
  };
 
  const gridItems = [
    { id: 1, name: 'Heineken beer', image: heineken, price: 'NGN1500', location:'Nkechi Stores Abakpa',  phone: '090455654' },
    { id: 2, name: 'Trophy', image: throphy, price: 'NGN5000', location:'Dominion Stores Abakpa',  phone: '090455654' },
    { id: 3, name: 'Chivita', image: chivita, price: 'NGN4000', location:'Roban Stores Trans Ekulu',  phone: '090455654' },
    { id: 4, name: 'Fearless Energy Drink', image: fearless, price: 'NGN4000', location:'Okeke Stores Trans Ekulu',  phone: '090455654' },
    { id: 5, name: '33 beer', image: threebeer, price: 'NGN5000', location:'Okeke Stores Trans Ekulu',  phone: '090455654' },
    { id: 6, name: 'Henessy', image: hennessy, price: 'NGN50000', location:'Shoppers Gate Trans Ekulu',  phone: '090455654' },
  
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
          <p>{item.phone}</p>
          <button onClick={() => addToCart(item)}  className="add-to-cart-button">Add to Cart</button>
        </div>
      ))}
  </div>
  </div>

  );
};

export default Alldrinks;
