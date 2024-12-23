import React, { Component } from "react";
import Navbar from "../homepagenavbar/navbar";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons for show/hide
import './signinbarmanager.css';

export default class SignInBarManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      password: "",
      checkuname: '',
      showPassword: false, // State to toggle password visibility
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
  }

  componentDidMount() {
    try {
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
          this.setState({ checkuname: data.data });
          console.log(this.state.checkuname);
        });
    } catch (e) {
      console.log(e);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { uname, password } = this.state;
    console.log(uname, password);

    try {
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
          if (data.status === "ok") {
            alert("login successful");
            window.localStorage.setItem("token", data.data);
            window.localStorage.setItem("isLoggedIn", true);
            window.localStorage.setItem("barusername", this.state.uname);
            if (this.state.checkuname.uname === this.state.uname) {
              window.location.href = "/barsandresturantsdashboard";
            }
          } else {
            alert("User not found");
          }
        });
    } catch (e) {
      console.log(e);
    }
  }

  togglePasswordVisibility() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    const { showPassword } = this.state;

    return (
      <div className="main">
        <Navbar />
        <div className="logincontainer">
          <form onSubmit={this.handleSubmit}>
            <h3>Sign In</h3>
            
            <div className="signinusernametextbox">
            <div className="mb-3 username-container">
              <input
                type="text"
                className="form-control usernamesignin"
                placeholder="Enter user name"
                onChange={(e) => this.setState({ uname: e.target.value })}
                required
              />
            </div>
            </div>
              
           <div className="signinpasswordtextbox">
            <div className="mb-3 password-container">
              <input
                type={showPassword ? "text" : "password"} // Toggle input type based on state
                className="form-control passwordsignin"
                placeholder="Enter password"
                onChange={(e) => this.setState({ password: e.target.value })}
                required
              />
            
            </div>
            </div>

            <span
                className="signinpassword-toggle-icon"
                onClick={this.togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
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

            <div className="signinsubmitbutton">
            <div className="d-grid">
              <button type="submit" className="btn btn-primary submitsignin">
                Submit
              </button>
            </div>
            </div>
            <p className="auth-links">
              <a href="/forgotpasswordbarmanager">Forgot Password?</a>
              <br />
              <a href="/signupbarmanager">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}


