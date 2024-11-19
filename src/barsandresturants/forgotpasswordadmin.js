import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ForgotPasswordAdmin = () => {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the username exists in local storage
    const storedPassword = localStorage.getItem('adminUsername');
    if (!storedPassword) {
      setMessage("Username does not exist.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Update the password in local storage
    localStorage.setItem('adminPassword', newPassword);
    setMessage("Password successfully updated.");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    // Retrieve the current password for the username
    const storedPassword = localStorage.getItem(e.target.value);
    if (storedPassword) {
      setMessage("Username found. You can update the password.");
    } else {
      setMessage("Username not found. You can create a new password.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Reset Password</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={handleUsernameChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputContainer}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={styles.input}
            required
          />
          <span onClick={togglePasswordVisibility} style={styles.icon}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div style={styles.inputContainer}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
            required
          />
          <span onClick={togglePasswordVisibility} style={styles.icon}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {message && <p style={styles.message}>{message}</p>}

        <button type="submit" style={styles.submitButton}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
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
    color: "green",
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
};

export default ForgotPasswordAdmin;
