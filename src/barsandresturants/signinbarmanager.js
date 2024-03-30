import React, { Component } from "react";
import Navbar from "../homepagenavbar/navbar";
import './signinbarmanager.css';


var result = '';

export default class SignInBarManager extends Component {
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
       try{
    fetch("https://waterockapi.wegotam.com/baramanagerdata", {
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
        console.log(data, "barmanagerdata");
        // result = data.uname;
        // console.log(result);
        this.setState({ checkuname: data.data });
        console.log(this.state.checkuname);
      });
    }catch(e){
        console.log(e);    
    }
   }

  handleSubmit(e) {
    e.preventDefault();
    const {uname, password } = this.state;
    console.log(uname, password);

     try{
    fetch("https://waterockapi.wegotam.com/loginbarmanager", {
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
        console.log(data, "barmanagerlogin");
        console.log(uname);
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("isLoggedIn", true);
          window.localStorage.setItem("username", this.state.uname);
          if(this.state.checkuname.uname === this.state.uname){
            window.location.href = "/barsandresturantsnavbar";
          }
          //  window.location.href = "./registerpharmacy";
          
         
        }else{
          alert("User not found");
        }

        //console.log(data.length, "userRegister");
        console.log(this.state.uname);
      });
    }catch(e){
        console.log(e);
    }
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
          <a href="/signupbarmanager">Sign Up</a>
        </p>
      </form>
      </div>
      </div>
    );
  }
}