import React from "react";
import "./dashboardnavbar.css";
import RegisterShopForm from '../registershop/Registershop'
import ViewShoppingmallProducts from '../dashboard/viewshoppingmallproducts';

const DashboardNavbar = () => {
  return (
   
    <div className="dashboard">
     
      <nav className="navbar">
        <ul>
          <li>
            <a href="/productdashboard">
              <i className="fas fa-plus"></i>Home
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-list"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-sign-out-alt"></i> Sign Out
            </a>
          </li>
        </ul>
      </nav>
      
      {< ViewShoppingmallProducts />}
      
     
    </div>
  );
};

export default DashboardNavbar;
//   {< ViewShoppingmallProducts />}