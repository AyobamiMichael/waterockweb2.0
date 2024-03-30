import React, { Component } from 'react'
import Select from 'react-select';
//import UserDetails from '../components/userdetails';
//import UserData from '../components/userdata';
import './editproduct.css';
import Navbar from "../components/sidenavbar/Navbar";


var result = '';
export default class EditDrug extends Component {
    constructor(props){
      super (props)
      this.state ={
        id: '',
        drugname:'',
        mg:'',
        uname:'',
        price:'',
        quantity: ''
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
    handleSubmit(e){
       e.preventDefault();
          const {id, drugname, mg, price} = this.state;

          const time = new Date().toUTCString().slice(0, 16);

          console.log( id, drugname, mg, price, time);
          
          fetch("https://waterockapi.wegotam.com/editdrug",{
             method: "POST",
             crossDomain: true,
             headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
               "Access-Control-Allow-Origin": "*",
             },
             body: JSON.stringify({
              id,
              drugname,
              mg,
              price,
              time
            
            }),
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "editdrug");
            if (data.status === "ok") {
              alert("Product successfully updated");
              window.localStorage.setItem("token", data.data);
              //window.location.href = "./viewdrugs";
            }
            
          });  
          
    }
      
     
    render() {
  
      const actions = [{label: "50mg", value: 1},
      {label: "100mg", value: 2}, 
      {label: "200mg", value: 3}];

      const quantityactions = [{label: "10", value: 1},
      {label: "20", value: 2}, 
      {label: "30", value: 3},
      {label: "40", value: 4}
    ];


      return (
        <>
       <Navbar />
        <div className='editdrugcontainer'>
        <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label>Product Id</label>
          <input
            type="text"
            className="form-control"
            placeholder="Product Id"
            onChange={(e) => this.setState({id : e.target.value })}
          />
        </div>
        <div className="mb-3">
        <label>New Product Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="New Product Name"
          onChange={(e) => this.setState({ drugname: e.target.value })}
        />
      </div>
        <div className="mb-3">
          <label>New Product Price</label>
          <input
            type="text"
            className="form-control"
            placeholder="Product Price"
            onChange={(e) => this.setState({ price: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Miligramm</label>
          <Select options={actions} className="form-control"
           onChange={(e) => this.setState({ mg: e.label })}
          />   
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      </div>

      </>
      )
    }
  }