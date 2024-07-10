import React, { Component } from 'react'
import Navbar from '../../homepagenavbar/navbar';
import './signupfromcart.css';


export default class SignUpFromCart extends Component {
  constructor(props){
    super (props)
    this.state ={
      uname: "",
      password: "",
    };
   // this.handleSubmit = this.handleSubmit.bind(this);
  }
  
 /* handleSubmit(e){
       e.preventDefault();
        const { fname, lname, uname, password } = this.state;
        console.log(fname, lname, uname, password);
        fetch("https://wegotam.com/register",{
           method: "POST",
           crossDomain: true,
           headers: {
             "Content-Type": "application/json",
             Accept: "application/json",
             "Access-Control-Allow-Origin": "*",
           },
           body: JSON.stringify({
            fname,
            lname,
            uname,
            password,
          }),
        
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Register successful");
            window.localStorage.setItem("token", data.data);
            window.location.href = "./login";
          }
          else if (data.error === 'User Exists'){
            alert("Username not available");
          }
        });
  }*/
  render() {
    return (
      <div className='main'>
        <Navbar />
      
      <div className='backgroundImage' style={{backgroundImage: `url(${'image'})`,
      height: '850px',
      
      }}>
      <div className='signupcontainer'>
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            onChange={(e) => this.setState({ uname: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="">sign in?</a>
        </p>
        <h3>Or Continue with email</h3>
      </form>
      </div>
      </div>
      </div> 
    )
  }
}