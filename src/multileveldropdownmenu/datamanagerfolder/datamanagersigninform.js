import React, { Component } from "react";
import Navbar from "../../homepagenavbar/navbar";
import './datamanagersigninform.css';


var result = '';

export default class SignInFormForUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      password: "",
      checkuname: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


   componentDidMount(){

    fetch("https://waterockapi.wegotam.com/shoppingmalldatamanagerdata", {
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
        console.log(data, "shoppingdatamanagerdata");
        // result = data.uname
        this.setState({ checkuname: data.data });
        console.log(this.state.checkuname);
      });
   }

  handleSubmit(e) {
    e.preventDefault();
    const {uname, password } = this.state;
    console.log(uname, password);
    fetch("https://waterockapi.wegotam.com/loginshoppingmalldatamanager", {
      method: "POST",
      crossDomain: true,
      headers: {
           "Content-Type": "application/json",
            Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        uname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "shoppingmalldatamanagerdatalogin");
        console.log(uname);
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("isLoggedIn", true);
          window.localStorage.setItem("username", this.state.uname);
          if(this.state.checkuname.uname === this.state.uname){
            window.location.href = "/productdashboard";
          }
          //  window.location.href = "./registerpharmacy";
          
         
        }else{
          alert("User not found");
        }

        //console.log(data.length, "userRegister");
        console.log(this.state.uname);
      });

  }
  render() {
    return (
      <div className="main">
         <Navbar />   
      <div className="logincontainer">
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3">
         
          <input
            type="usernamesignin"
            className="form-control usernamesignin"
            placeholder="Enter user name"
            onChange={(e) => this.setState({uname: e.target.value })}
            required='true'  
          />
        </div>

        <div className="mb-3">
       
          <input
            type="password"
            className="form-control passwordsignin"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
            required='true'  
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submitsignin" className="btn btn-primary submitsignin">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/signupformforuser">Sign Up</a>
        </p>
      </form>
      </div>
      </div>
    );
  }
}