//import React from "react";
import "./viewshoppingmallproducts.css";
import DashboardNavbar from '../dashboard/dashboardnavbar';
import React, { useState } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Container, Row, Col } from 'react-grid-system';
import Navbar from "../../homepagenavbar/navbar";
import { Link } from "react-router-dom";

const productData = [
  { id: 1, name: 'Milo', price: 'NGN1000' },
  { id: 2, name: 'Peak Milk', price: 'NGN1500' },
  { id: 3, name: 'Pepsi', price: 'NGN2000' },
  { id: 4, name: 'Bag', price: 'NGN2000' },
  { id: 5, name: 'Product1', price: 'NGN2000' },
  { id: 6, name: 'Product2', price: 'NGN2000' },
  { id: 7, name: 'Product3', price: 'NGN2000' },

];
const ViewShoppingmallProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState(productData);
  const [editedProduct, setEditedProduct] = useState(null);
  const [dbProducts, setDbProducts] = useState(['']);

  
 


  // Fetch the products from the database using the datamanagerId
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


  const handleEdit = (product, e) => {
     //e.stopPropagation(); 
    setEditedProduct(product);
  };
 
  const handleDelete = (productId) => {
    fetch(`https://waterockapi.wegotam.com/deleteproduct/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log('Deleted successfully');
        alert("Deleted successful");
      })
      .catch(error => {
        console.error("Error:", error);
      });
};

  const handleSave = () => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === editedProduct.id ? editedProduct : product
      );
    });
    setEditedProduct(null);
  }; 
  const filteredProducts = productData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

 
  // Destructure list of objects from Database
 
  const extractedProductsDataFromDb = dbProducts.map(({ _id, productName,productPrice, shopName,
    catSelected, subCatItemSelected,shopPhone,shopAddress,productImage,productDescription

  }) => ({ _id, productName,productPrice, shopName,catSelected,subCatItemSelected,shopPhone,shopAddress,productImage,productDescription }));
  

  const filteredDbProducts = extractedProductsDataFromDb.filter(product =>
    product.productName?.toLowerCase().includes(searchQuery.toLowerCase()),
    
  );
  
  // const filterDbImages = extractedProductsDataFromDb.filter(image => image.productImage);

  // let imagePath = dbProducts[0]['productImage']
  // console.log('ProductImage', imagePath?.substring(8));
   
  return (
   
    <div className="mainforviewingshoppingproducts">
      
      <input className="searchproducts"
        type="text"
        placeholder="Search Products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Container fluid className="productcontainer">
        <Row className="shoppingproductsrow">
          {filteredDbProducts.map(product => (
            <Col xs={12} md={4} key={product._id}>
              <div className="product-card">
                {(     
                  <div>
                    <h3>{product.productName}</h3>
                    <p>{'NGN'+product.productPrice}</p>
                    <p>{product.productDescription}</p>
                    
                    {product.productImage && (
            <img className="shoppingproductimage"
              src={`https://waterockapi.wegotam.com/uploads/${product.productImage?.substring(8)}`}
              alt={product.productName}
              style={{ maxWidth: '200px' }} 
            />     
          )}
           <div>
           <h1 className="shopdescription">{product.shopName}</h1>
            <h1 className="shopdescription">{product.shopAddress}</h1>
            <h1 className="shopdescription">{product.shopPhone}</h1>
           </div>
          
                    <div className="product-actions">
                       <Link to={`/getproductforediting/${product._id}`}>
                    <FaEdit className="edit-icon" />
                  </Link>
                      <FaTrash
                        className="delete-icon"
                        onClick={() => handleDelete(product._id)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>

        {editedProduct && (
                  <div>
                    <input
                       type="text"
                       value={editedProduct.productName}
                       onChange={(e) =>
                         setEditedProduct({
                           ...editedProduct,
                           productName: e.target.value,
                         })
                       }
                    />
                    <input
                      type="text"
                      value={editedProduct.productPrice}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          productPrice: e.target.value,
                        })
                      }
                    />
                    <button onClick={handleSave}>Save</button>
                  </div>
                ) }
        
      </Container>
    </div>
  );
   /* return (
      <div className="main">
        <input
        type="text"
        placeholder="Search Products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Container fluid>
        <Row>
          {filteredProducts.map(product => (
            <Col xs={12} md={4} key={product.id}>
              <div className="product-card">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <div className="product-actions">
                  <FaEdit className="edit-icon"
                     onClick={() => handleEdit(product)}
                   />
                  <FaTrash className="delete-icon" 
                       onClick={() => handleDelete(product)}
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    );*/
  };
  
  export default  ViewShoppingmallProducts;
  