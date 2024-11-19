import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  // Preload credentials into localStorage
  useEffect(() => {
    localStorage.setItem("adminUsername", "admin");
    localStorage.setItem("adminPassword", "admin");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored credentials from localStorage
    const storedUsername = localStorage.getItem("adminUsername");
    const storedPassword = localStorage.getItem("adminPassword");

    if (username === storedUsername && password === storedPassword) {
      setMessage("Login successful!");
    
      setTimeout(() => {
        window.location.href = "/customercaredetailspage";
      }, 1000);
    } else {
      setMessage("Invalid username or password.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={styles.loginContainer}>
      <h2 style={styles.header}>Admin Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputContainer}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <span onClick={togglePasswordVisibility} style={styles.icon}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {message && <p style={styles.message}>{message}</p>}

        <button type="submit" style={styles.submitButton}>
          Login
        </button>
      </form>
      <p style={styles.resetPassword}>
        <a href="/forgotpasswordadmin" style={styles.link}>
          Forgot Password?
        </a>
      </p>
    </div>
  );
};

// Inline styles
const styles = {
  loginContainer: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  header: {
    fontSize: "1.8em",
    marginBottom: "15px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputContainer: {
    position: "relative",
    width: "100%",
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1em",
    borderRadius: "4px",
    border: "1px solid #ccc",
    outline: "none",
  },
  icon: {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#333",
  },
  message: {
    color: "red",
    marginBottom: "10px",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    fontSize: "1em",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
  },
  resetPassword: {
    marginTop: "15px",
  },
  link: {
    color: "#4CAF50",
    textDecoration: "none",
  },
};

export default AdminLogin;
