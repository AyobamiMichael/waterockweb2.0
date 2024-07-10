import React from "react";
import "./productdashboard.css";
import RegisterShopForm from '../registershop/Registershop';
import ViewShoppingmallProducts from "./viewshoppingmallproducts";

const ProductDashboard = () => {
  return (
   
    <div className="dashboard">
     
      <nav className="navbar">
        <ul>
          <li>
            <a href="/dashboardnavbar">
              <i className="fas fa-plus"></i>View
            </a>
          </li>
          <li>
            <a href="/registershoppingmall">
              <i className="fas fa-list"></i> 
            </a>
          </li>
          <li>
            <a href="/signinformforuser">
              <i className="fas fa-sign-out-alt"></i> Sign Out
            </a>
          </li>
        </ul>
      </nav>
      
      {<  RegisterShopForm />}
      
    </div>
  );
};

export default ProductDashboard;

//
