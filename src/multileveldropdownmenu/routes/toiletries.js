import './toiletries.css';
import vivadetergent from '../../images/vivadetergent.jpg';
import oralb from '../../images/oralb.jpg';
import closeup from '../../images/closeup.jpg';
import klindetergent from '../../images/klindetergent.png';
import tetmosol from '../../images/tetmosol.jpg';
import delta from '../../images/deltasoap.jpg';
import Navbar from '../../homepagenavbar/navbar';
import Header from '../Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';


const Toiletries = () => {

  const [cart, setCart] = useState([]); 

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(cart);
  };
 
  const gridItems = [
    { id: 1, name: 'Oral B', image: oralb, price: 'NGN1500', location:'Nkechi Stores Abakpa' },
    { id: 2, name: 'Close Up', image: closeup, price: 'NGN2000', location:'Dominion Stores Abakpa' },
    { id: 3, name: 'Tetmosol', image: tetmosol, price: 'NGN400', location:'Roban Stores Trans Ekulu' },
    { id: 4, name: 'Delta', image: delta, price: 'NGN400', location:'Okeke Stores Trans Ekulu' },
    { id: 5, name: 'Viva', image: vivadetergent, price: 'NGN2000', location:'Okeke Stores Trans Ekulu' },
    { id: 6, name: 'Klin', image: klindetergent, price: 'NGN2000', location:'Shoppers Gate Trans Ekulu' },
  
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

export default Toiletries;
