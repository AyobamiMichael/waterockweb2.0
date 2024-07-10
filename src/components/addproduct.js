import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';


const AddProduct = () =>{

    const navigate = useNavigate();
    const navigateToRegdrugs = () =>{
        navigate('/registerdrug');
    }
       
     return(
             <div className="">
             <button onClickCapture={navigateToRegdrugs}>Add Product</button>
             </div>
   );
}

export default AddProduct;