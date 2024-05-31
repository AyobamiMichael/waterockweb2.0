import React, { Component } from 'react'
import Navbar from '../homepagenavbar/navbar';
import './signupbarmanager.css';


export default class SignUpBarManager extends Component {
  constructor(props){
    super (props)
    this.state ={
      fname:'',
      lname:'',
      uname: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(e){
       e.preventDefault();
        const { fname, lname, uname, password } = this.state;
        console.log(fname, lname, uname, password);
        fetch("https://waterockapi.wegotam.com/registerbarmanager",{
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
          })
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "dataManagers");
          if (data.status === "ok") {
            alert("Register successful");
            window.localStorage.setItem("token", data.data);
            //window.location.href = "./login";
            // To go to the dashboard for uploading goods
          }
          else if (data.error === 'User Exists'){
            alert("Username not available");
          }
        });
  }
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

        <div className="mb-3 ">
       
          <input
            type="firstname"
            className="form-control firstname"
            placeholder="First name"
            onChange={(e) => this.setState({ fname: e.target.value })}
            required='true'  
          />
        </div>
        <div className="mb-3">
          
          <input type="lastname" className="form-control lastname" placeholder="Last name" 
          onChange={(e) => this.setState({ lname: e.target.value })}
          required='true'  
          />   
        </div>

        <div className="mb-3">
          
          <input
            type="username"
            className="form-control username"
            placeholder="User Name"
            onChange={(e) => this.setState({ uname: e.target.value })}
            required='true'  
          />
        </div>
        <div className="mb-3">
          
          <input
            type="password"
            className="form-control password"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
            required='true'  
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary submit">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/signinbarmanager">sign in?</a>
        </p>
        <h3>Or Sign Up with email</h3>
      </form>
      </div>
      </div>
      </div> 
    )
  }
}