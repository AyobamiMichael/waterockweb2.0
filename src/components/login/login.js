import React, { Component } from "react";
import './login.css';

var result = '';

export default class Login extends Component {
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
        console.log(data, "userData");
        // result = data.uname
        this.setState({ checkuname: data.data });
        //console.log(result);
      });
   }

  handleSubmit(e) {
    e.preventDefault();
    const {uname, password } = this.state;
    console.log(uname, password);
    fetch("https://waterockapi.wegotam.com/login-user", {
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
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("isLoggedIn", true);
         // if(this.state.checkuname.uname == this.state.uname){
            window.location.href = "./userdetails";
         // }
          //  window.location.href = "./registerpharmacy";
          
         
        }else{
          alert("User not found");
        }

        console.log(data.length, "userRegister");
      });

  }
  render() {
    return (
    
      <div className="logincontainer">
      <form onSubmit={this.handleSubmit} className="loginform">
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>User Name</label>
          <input
            type="text"
            className="form-control custom-width"
            placeholder="Enter user name"
            onChange={(e) => this.setState({uname: e.target.value })}
            
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control custom-width"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
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
          <button type="submit" className="btnsumbit btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/sign-up">Sign Up</a>
        </p>
      </form>
      </div>
    );
  }
}