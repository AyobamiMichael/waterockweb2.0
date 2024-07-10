import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './mobiledisplayproducts.css';
import baveragebasketimage from '../images/beveragesbasket.jpg';
import dryfoodsimage from '../images/dryfoods.jpg';
import nonalcoholicimage from '../images/nonealcoholicdrinks.jpg';
import alcoholicimage from '../images/alcoholicdrinks.png';
import waterimage  from  '../images/waters.jpg';
import costmeticsimage from '../images/cosmetics.jpg';
import householdgoodsimage from '../images/householdgoods.jpg';
import consumerelectronicsimage from '../images/consumerelectronics.jpg';
import toiletriesImage from '../images/toiletries.jpg';
import freshfoodsimage from '../images/freshfoods.jpg';
import officesuppliesimage from '../images/officesuppliesandstationaries.jpg';
import babyproductsimage from '../images/babyproducts.jpg';




const Mobiledisplayproducts = () => {
  const categories = [
  { name: 'Dry Foods', image: dryfoodsimage, link: '/dry-foods' },
  {name: 'Beverages', image: baveragebasketimage, link:'/mobiledisplayofbeveragesdetailspage'},
    { name: 'Fresh Foods', image: freshfoodsimage, link: '/mobiledisplayoffreshfoodsdetailspage' },
    { name: 'Water', image: waterimage, link: '/viewallwater' },
    { name: 'Alcoholic Drinks', image: alcoholicimage, link: '/mobiledisplayofalcoholicdetailspage' },
    { name: 'Non-Alcoholic Drinks', image: nonalcoholicimage, link: '/non-alcoholic-drinks' },
    {name: 'Consumer Electronics', image: consumerelectronicsimage, link:'/consumerelectronics'},
    {name: 'Household Goods', image:householdgoodsimage, link:'/mobiledisplayofhouseholdgoodsdetailspage'},
    {name: 'Toiletries', image:toiletriesImage, link:'/toiletries'},
    {name: 'Cosmetics', image:costmeticsimage, link:'/cosmetics'},
    {name: 'Office Supplies & Stationaries', image:officesuppliesimage, link:'/offciesupplies'},
    {name: 'BabyCare', image:babyproductsimage, link:'/babycare'}
    
  ];

  return (
    <div className="shop-container">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <Link to={category.link}>
            <img src={category.image} alt={category.name} className="category-image" />
          </Link>
          <h2>{category.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Mobiledisplayproducts;
