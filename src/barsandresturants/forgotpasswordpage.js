import React, { Component } from "react";
import Navbar from "../homepagenavbar/navbar";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons for show/hide password
import './forgotpasswordbarmanager.css';

export default class ForgotPasswordBarManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      newPassword: "",
      confirmPassword: "",
      message: "",
      showPassword: false, // State to toggle password visibility
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { uname, newPassword, confirmPassword } = this.state;

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      this.setState({ message: "Passwords do not match." });
      return;
    }

    console.log(uname, newPassword);
     // https://waterockapi.wegotam.com/updatepassword
    try {
      fetch("http://localhost:4000/updatepassword", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          uname,
          newPassword,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "passwordupdate");
          if (data.status === "Password updated successfully") {
            this.setState({ message: "Password updated successfully." });
            // Optionally, redirect to login page after a successful update
            window.location.href = "/signinbarmanager";
          } else {
            this.setState({ message: data.error || "Error updating password." });
          }
        });
    } catch (e) {
      console.log(e);
      this.setState({ message: "An error occurred. Please try again later." });
    }
  }

  togglePasswordVisibility() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    const { showPassword, message } = this.state;

    return (
      <div className="main">
        <Navbar />
        <div className="forgotpasswordcontainer">
          <form onSubmit={this.handleSubmit}>
            <h3>Reset Password</h3>

            <div className="mb-3 username-container">
              <input
                type="text"
                className="form-control usernamesignin"
                placeholder="Enter your username"
                onChange={(e) => this.setState({ uname: e.target.value })}
                required
              />
            </div>

            <div className="mb-3 password-container">
              <input
                type={showPassword ? "text" : "password"} // Toggle input type based on state
                className="form-control passwordsignin"
                placeholder="Enter new password"
                onChange={(e) => this.setState({ newPassword: e.target.value })}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={this.togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="mb-3 password-container">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control passwordsignin"
                placeholder="Confirm new password"
                onChange={(e) => this.setState({ confirmPassword: e.target.value })}
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary submitforgotpassword">
                Submit
              </button>
            </div>

            {message && <p className="forgot-password-message">{message}</p>}

            <p className="back-to-signin">
              <a href="/signinbarmanager">Back to Sign In</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
