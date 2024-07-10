import { Link } from 'react-router-dom';
import './allfoods.css';
import Navbar from '../../homepagenavbar/navbar';
import dryfish from '../../images/dryfish.jpg';
import creyfish from '../../images/creyfish.jpg';
import stockfish from '../../images/stockfish.jpg';
import garri from '../../images/garri.jpg';
import chicken from '../../images/chicken.jpg';
import plantain from '../../images/plantain.jpg';
import potatoe from '../../images/potatoe.jpg';
import tomatoes from '../../images/tomatoes.jpg';
import yam from '../../images/yam.jpg';
import localrice from '../../images/localrice.jpg';
//import ofadarice from '../../images/ofadaricestew.jpg';
//import riceandstew from '../../images/riceandstew.jpg';
import foreignrice from '../../images/foreignrice.jpg';
//import friedrice from '../../images/friedrice.jpg';
import beef from '../../images/beef.jpg';
//import bellpepper from '../../images/bellpepper.jpg';
import eggs from '../../images/eggs.jpg';
//import friedricesalad from '../../images/friedricesalad.jpg';
import milo from '../../images/milo.jpg';
import milorefill from '../../images/milorefill.jpg';
import dano from '../../images/danomilk.jpg';
import cowbell from '../../images/cowbell.png';
import gino from '../../images/ginovegitableoil.png';
import peak from  '../../images/peakmilk.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Header from '../Header';


const Allfoods = () => {

  const [cart, setCart] = useState([]); 
  const [dbProducts, setDbProducts] = useState(['']);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(cart);
  };

  const gridItems = [
    { id: 1, name: 'Milo Refill', image: milo, price: 'NGN3200', location:'Roban Stores Trans Ekulu', description: '500g',  phone: '090455654' },
    { id: 2, name: 'Dry Fish', image: dryfish, price: 'NGN1500', location:'Nkechi Stores Abakpa', description: '300g',  phone: '090455654' },
    { id: 3, name: 'CreyFish', image: creyfish, price: 'NGN5000', location:'Dominion Stores Abakpa', description: '300g',  phone: '090455654'},
    { id: 4, name: 'Eggs', image: eggs, price: 'NGN4000', location:'Roban Stores Trans Ekulu',  description: 'Per cratte',  phone: '090455654' },
    { id: 5, name: 'Yam', image: yam, price: 'NGN4000', location:'Okeke Stores Trans Ekulu',  description: '500g',  phone: '090455654' },
    { id: 6, name: 'Beef', image: beef, price: 'NGN5000', location:'Think Well Trans Ekulu',  description: 'Per kg',  phone: '090455654' },
    { id: 7, name: 'Dano Milk', image: dano, price: 'NGN3200', location:'Shoppers Gate Trans Ekulu',  description: '300g',  phone: '090455654' },
    { id: 8, name: 'Peak Milk', image: peak, price: 'NGN5000', location:'Roban Stores Trans Ekulu',  description: '500g',  phone: '090455654' },
    { id: 9, name: 'Gino Oil', image: gino, price: 'NGN5000', location:'Okeke Stores Trans Ekulu',  description: '300g',  phone: '090455654' },
    { id: 10, name: 'Cowbell Milk', image: cowbell, price: 'NGN3300', location:'Zion Stores Trans Ekulu',  description: '300g',  phone: '090455654' },
 
  
  ];


  
  // Fetch the products from the database using the productCategory
  // maybe needs useEffect
  fetch("https://waterockapi.wegotam.com/viewallshoppingproducts", {
  method: "POST",
  crossDomain: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({
    token: window.localStorage.getItem("token"),
  }),
  // body: formData,
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
 // console.log(data);
  setDbProducts(data);
  //console.log('DB',dbProducts);
})
.catch(error => {
  console.error("Error:", error);
});


// Destructure list of objects from Database
 
const extractedProductsDataFromDb = dbProducts.map(({ _id, productName,productPrice, shopName,
  catSelected, subCatItemSelected,shopPhone,shopAddress,productImage,productDescription

}) => ({ _id, productName,productPrice, shopName,catSelected,subCatItemSelected,shopPhone,shopAddress,productImage,productDescription })).filter(item => item.catSelected === 'Food');
console.log('extracted',extractedProductsDataFromDb);

  return (
    <div className='main'>
   <Navbar/>
    <Header/>
   
    <div className="grid-container">
      {extractedProductsDataFromDb.map((item) => (
        <div key={item._id} className="grid-item">
          <img src={`https://waterockapi.wegotam.com/uploads/${item.productImage?.substring(8)}`} className="freshfood" />
          <p>{item.productName}</p>
          <p>{item.productPrice}</p>
          <p>{item.productDescription}</p>
          <p>{item.shopAddress}</p>
          <p>{item.shopPhone}</p>
          <button onClick={() => addToCart(item)}  className="add-to-cart-button">Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
  );
};



export default Allfoods;

