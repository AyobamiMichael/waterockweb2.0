//import React from 'react';
import './consumerelectronics.css';
import samsungtv from '../../images/samsung43inchTv.jpg';
import lgac from '../../images/lghisenseac.jpg';
import hondagenerator from '../../images/hondageneratorhmn.jpg';
import hisensesplitac from '../../images/splitachisense.jpg';
import lgwashingmachine from '../../images/lgwashingmachine1.jpg';
import thermacoolgenerator from '../../images/thermacoolgenerator.jpg';
import lg43inchestv from '../../images/43inchTv1.jpg';

import Navbar from '../../homepagenavbar/navbar';
import Header from '../Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const ConsumerElectronics = () => {
  const [cart, setCart] = useState([]); 

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(cart);
  };
 
  const gridItems = [
    { id: 1, name: 'LG Tv 43 inches', image: lg43inchestv, price: 'NGN70000', location:'Nkechi Stores Abakpa', phone: '090455654' },
    { id: 2, name: 'Honda Generator', image: hondagenerator, price: 'NGN250000', location:'Dominion Stores Abakpa',  phone: '080456362'  },
    { id: 3, name: 'Hisense AC', image: hisensesplitac, price: 'NGN344000', location:'Roban Stores Trans Ekulu',  phone: '098765332' },
    { id: 4, name: 'Samsung Tv 43 inches', image: samsungtv, price: 'NGN94000', location:'Okeke Stores Trans Ekulu',  phone: '08663322' },
    { id: 5, name: 'LG washing machine', image: lgwashingmachine, price: 'NGN235000', location:'Okeke Stores Trans Ekulu',  phone: '0806543522' },
    { id: 6, name: 'Thermacool Generator', image: thermacoolgenerator, price: 'NGN345000', location:'Shoppers Gate Trans Ekulu',  phone: '0863534222' },
  
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

export default ConsumerElectronics;
