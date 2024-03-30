import React, { Component } from 'react'
import Select from 'react-select';
import UserDetails from '../components/userdetails';
//import UserData from '../components/userdata';
import './registerdrug.css';
import Navbar from "../components/sidenavbar/Navbar";


var result = '';
export default class RegisterDrug extends Component {
    constructor(props){
      super (props)
      this.state ={
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
          const { drugname, mg, uname, price, quantity} = this.state;
          console.log(drugname, mg, uname, price, quantity);
          fetch("https://waterockapi.wegotam.com/registerdrug",{
             method: "POST",
             crossDomain: true,
             headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
               "Access-Control-Allow-Origin": "*",
             },
             body: JSON.stringify({
              drugname,
              mg,
              uname,
              price,
              quantity
             
            }),
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "drugRegister");
            if (data.status === "ok") {
              alert("Drug successfully registered");
             // window.localStorage.setItem("token", data.data);
              //window.location.href = "./viewdrugs";
            }
            
          });     
          
    }
      
      componentDidMount(){
        fetch("https://waterockapi.wegotam.com/userData", {
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
        })
          .then((res) => res.json())
          .then((data) => {
           // console.log(data, "AyomiData");
            //this.setState({userData: data.data });
            result = data.data.uname
            this.setState({uname: result})
            console.log(result, 'Ayo')
          
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
        <UserDetails />
       <Navbar />
        <div className='registerdrugcontainer'>
        <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label>Product name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
            onChange={(e) => this.setState({  drugname: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Product Price</label>
          <input
            type="text"
            className="form-control"
            placeholder="Product Price"
            onChange={(e) => this.setState({  price: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Quantity</label>
          <Select options={quantityactions} className="form-control"
           onChange={(e) => this.setState({ quantity: e.label })}
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