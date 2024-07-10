import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import './editproduct.css'


const EditProduct = () => {
  const { _id: productId } = useParams();
 // const history = useHistory();

  const [editedProduct, setEditedProduct] = useState({
    catSelected:'',
    productName: "",
    productPrice: "",
    shopAddress: '',
    shopName: '',
    shopPhone: ''
  
  });
  
  //console.log('edited',editedProduct);
  //console.log('ParmeterId', productId);
  useEffect(() => {
    fetch(`https://waterockapi.wegotam.com/getproductforediting/${productId}`, {
      method: "GET",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
       // console.log('data',data);
        setEditedProduct(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [productId]);

  console.log('EditedProduct',editedProduct);
  const handleSave = () => {
    // Make an API call to save the edited product to the database
    fetch(`https://waterockapi.wegotam.com/updateandsaveproduct/${productId}`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
        editedProduct: editedProduct,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Assuming the server responds with the updated product
        // Redirect to the main page after saving
      //  history.push("/view-shopping-mall-products");
       console.log('Edited sucessfully', data);
       alert("Edited successful");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="editmain">
          <nav className="editnavbar">
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



      <div className="editcontainer">
      <div className="form-group editform1">
      <label htmlFor="productname">Product Name:</label>
      <input 
        className="form-control productdetails"
        type="text"
        value={editedProduct.productName}
        onChange={(e) =>
          setEditedProduct({
            ...editedProduct,
            productName: e.target.value,
          })
        }
      />
       <label>Product Price:</label>
      <input 
        className="form-control  productdetails"
        type="text"
        value={editedProduct.productPrice}
        onChange={(e) =>
          setEditedProduct({
            ...editedProduct,
            productPrice: e.target.value,
          })
        }
      />
      </div>
      </div>
      <div className="form-control">
      <button  className="btn btn-primary editsavebtn" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default EditProduct;
