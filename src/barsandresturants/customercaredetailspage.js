import React, { useState } from "react";

const CustomerCareSubmission = () => {
  const [customerCareNumber1, setCustomerCareNumber1] = useState("");
  const [customerCareNumber2, setCustomerCareNumber2] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!customerCareNumber1 || !customerCareNumber2 || !email) {
      setMessage("Please fill out all fields.");
      return;
    }

    // Send data to the backend
    try {
      const response = await fetch("https://waterockapi.wegotam.com/createcustomercaredetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerCareNumber1,
          customerCareNumber2,
          customerCareEmail: email,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Customer care details saved successfully.");
        setCustomerCareNumber1("");
        setCustomerCareNumber2("");
        setEmail("");
      } else {
        setMessage("Failed to save customer care details. Please try again.");
        console.error(result);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Customer Care Submission</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Customer Care Number 1:</label>
          <input
            type="tel"
            value={customerCareNumber1}
            onChange={(e) => setCustomerCareNumber1(e.target.value)}
            placeholder="Enter first customer care number"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Customer Care Number 2:</label>
          <input
            type="tel"
            value={customerCareNumber2}
            onChange={(e) => setCustomerCareNumber2(e.target.value)}
            placeholder="Enter second customer care number"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Customer Care Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter customer care email"
            style={styles.input}
            required
          />
        </div>

        {message && <p style={styles.message}>{message}</p>}

        <button type="submit" style={styles.submitButton}>
          Submit
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
    width: "100%",
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    fontSize: "1em",
    marginBottom: "5px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1em",
    borderRadius: "4px",
    border: "1px solid #ccc",
    outline: "none",
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

export default CustomerCareSubmission;
