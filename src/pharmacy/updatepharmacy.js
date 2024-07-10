import React, { Component } from 'react'
import "./updatepharmacy.css";
//import RegisterDrug from '../drugs/registerdrug';
import Tabs from '../components/Tab/tabs';
import Navbar from '../components/sidenavbar/Navbar';
//import image from '../images/pharmacology.jpg';



export default class UpdatePharmacy extends Component {
    constructor(props){
      super (props)
      this.state ={
        pname:'',
        paddress:'',
        phone: "",
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
         e.preventDefault();
          const { pname, paddress, phone} = this.state;
          console.log(pname, paddress, phone);
          fetch("https://api1.wegotam.com/updatepharmacy",{
             method: "POST",
             crossDomain: true,
             headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
               "Access-Control-Allow-Origin": "*",
             },
             body: JSON.stringify({
              pname,
              paddress,
              phone,
            }),
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "pharmacyRegister");
            if (data.status === "ok") {
              alert("Pharma successfully updated");
              window.localStorage.setItem("token", data.data);
             // window.location.href = "./login";
               // <Tabs />
            }
          });
    }
    render() {
      return (
         <>
         <div>
         <Navbar />
         <div className='updatepharmacontainer'>
        <form onSubmit={this.handleSubmit}>
          <h3>Update Pharmacy</h3>
          <div className="mb-3">
          <label>Pharmacy Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Pharmacy Name"
            onChange={(e) => this.setState({ pname: e.target.value })}
          />
        </div>

          <div className="mb-3">
            <label>New Pharmacy Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="New Pharmacy Name"
              onChange={(e) => this.setState({ pname: e.target.value })}
            />
          </div>
  
          <div className="mb-3">
            <label>New Address Of Pharmacy</label>
            <input type="text" className="form-control" placeholder="Enter New Pharmacy Address" 
            onChange={(e) => this.setState({ paddress: e.target.value })}
            />   
          </div>
          <div className="mb-3">
            <label>New Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter New Phone Number"
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        </div>
        </div>
        </>
      )
    }
  }