import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './mobiledisplayoffreshfoodsdetailspage.css';






const Mobiledisplayoffreshfoodsdetailpage = () => {
 

  const [cart, setCart] = useState([]); 
  const [dbProducts, setDbProducts] = useState(['']);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(cart);
  };
  
  
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
    <div className="shop-container">
      {extractedProductsDataFromDb.map((item, index) => (
        <div key={index} className="category-card">
         <img src={`https://waterockapi.wegotam.com/uploads/${item.productImage?.substring(8)}`} className="freshfood-image" />
          <h2>{item.productName}</h2>
          <p >{item.productPrice}</p>
          <p>{item.shopName}</p>
          <p >{item.shopAddress}</p>
          <p>{item.shopPhone}</p>

          <button onClick={() => addToCart(item)} className='addtocart'>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Mobiledisplayoffreshfoodsdetailpage;
