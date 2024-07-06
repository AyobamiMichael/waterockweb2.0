import React, { useState } from 'react';
import './barnavbar.css';

const BarsAndRestaurantsNavBar = () => {
  const [isAddBarSubMenuVisible, setIsAddBarSubMenuVisible] = useState(false);
  const [isAddProductSubMenuVisible, setIsAddProductSubMenuVisible] = useState(false);

  const handleAddBarClick = () => {
    setIsAddBarSubMenuVisible(!isAddBarSubMenuVisible);
  };

  const handleAddProductClick = () => {
    setIsAddProductSubMenuVisible(!isAddProductSubMenuVisible);
  };

  return (
    <div className='bar-and-restaurant-navbar'>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item home-navbar-item">
            <a href='/barsandresturantsdashboard'>Home</a>
          </li>
          <li className="navbar-item add-bar-navbar-item" onClick={handleAddBarClick}>
            <a href='#'>Business</a>
            {isAddBarSubMenuVisible && (
              <ul className="submenu">
                <li className="submenu-item">
                  <a href='/addbarform'>Add</a>
                </li>
                <li className="submenu-item">
                  <a href='/viewdeletebar'>Edit</a>
                </li>
              </ul>
            )}
          </li>
          <li className="navbar-item add-product-navbar-item" onClick={handleAddProductClick}>
            <a href='#'>Product</a>
            {isAddProductSubMenuVisible && (
              <ul className="submenu">
                <li className="submenu-item">
                  <a href='/addbarproductsform'>Add</a>
                </li>
                <li className="submenu-item">
                  <a href='/editbarproducts'>Edit</a>
                </li>
              </ul>
            )}
          </li>
          <li className="navbar-item signout-navbar-item">
            <a href='/signinbarmanager'>Sign Out</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BarsAndRestaurantsNavBar;
