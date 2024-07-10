import React, { useState } from "react";
import Login from "../login/login";
import "./logout.css";

const Logoutuser = () =>{
            
     // const logout = () =>{
         // localStorage.clear();
     window.localStorage.removeItem("token")
         
     window.localStorage.removeItem("isLoggedIn")
     // }
     window.location.href ="./login"
    
 //   return(
   //          <div className="logout">
     //        <button onClickCapture={logout} type="submit">Logout</button>
       //      </div>
   // );
}

export default Logoutuser;