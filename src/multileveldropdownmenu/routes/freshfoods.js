//import React from 'react';
import './freshfoods.css';
import '../mobiledisplayproducts.css';
import dryfish from '../../images/dryfish.jpg';
import creyfish from '../../images/creyfish.jpg';
import stockfish from '../../images/stockfish.jpg';
import garri from '../../images/garri.jpg';
import chicken from '../../images/chicken.jpg';
import plantain from '../../images/plantain.jpg';
import potatoe from '../../images/potatoe.jpg';
import tomatoes from '../../images/tomatoes.jpg';
import yam from '../../images/yam.jpg';
import Navbar from '../../homepagenavbar/navbar';
import Header from '../Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import beef from '../../images/beef.jpg';
import eggs from '../../images/eggs.jpg';
import milo from '../../images/milo.jpg';
import { Link } from 'react-router-dom';

const FreshFoods = () => {

  const [cart, setCart] = useState([]); 
  const [dbProducts, setDbProducts] = useState(['']);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(cart);
  };
 
  const gridItems = [
    { id: 2, name: 'Dry Fish', image: dryfish, price: 'NGN1500', location:'Nkechi Stores Abakpa',  phone: '090455654' },
    { id: 3, name: 'CreyFish', image: creyfish, price: 'NGN5000', location:'Dominion Stores Abakpa',  phone: '090455654' },
    { id: 4, name: 'Eggs', image: eggs, price: 'NGN4000', location:'Roban Stores Trans Ekulu',  phone: '090455654' },
    { id: 5, name: 'Yam', image: yam, price: 'NGN4000', location:'Okeke Stores Trans Ekulu',  phone: '090455654' },
    { id: 6, name: 'Beef', image: beef, price: 'NGN5000', location:'Okeke Stores Trans Ekulu',  phone: '090455654' },
    { id: 7, name: 'Chicken', image: chicken, price: 'NGN5000', location:'Shoppers Gate Trans Ekulu',  phone: '090455654' },
  
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

}) => ({ _id, productName,productPrice, shopName,catSelected,subCatItemSelected,shopPhone,shopAddress,productImage,productDescription })).filter(item => item.subCatItemSelected === 'Fresh Food');
console.log('extracted',extractedProductsDataFromDb);

const filteredDbProducts = extractedProductsDataFromDb.filter(product =>
  product.productName?.toLowerCase().includes(searchQuery.toLowerCase()),
  
);


  return (
    <div className='main'>
        <Navbar/>
        <Header/>  
    <div className="grid-container">
   
    {extractedProductsDataFromDb.map((item) => (
        <div key={item._id} className="grid-item">
          <img src={`https://waterockapi.wegotam.com/uploads/${item.productImage?.substring(8)}`} className="freshfood-image" />
          <p className='freshfoodnamep'>{item.productName}</p>
          <p className='freshfoodpricepricep'>{item.productPrice}</p>
          <p className='freshfoodshopaddressp'>{item.shopAddress}</p>
          <p className='freshfoodshopphonep'>{item.shopPhone}</p>
          <button onClick={() => addToCart(item)}  className="add-to-cart-button">Add to Cart</button>
        </div>
      ))}
  </div>
  </div>
  );
};

export default FreshFoods;
