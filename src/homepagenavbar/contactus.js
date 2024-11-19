import React, { useState, useEffect } from "react";

const ContactUs = () => {
  const [customerCareDetails, setCustomerCareDetails] = useState({
    customerCareNumber1: "",
    customerCareNumber2: "",
    customerCareEmail: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch customer care details from the backend
    const fetchCustomerCareDetails = async () => {
      try {
        const response = await fetch("https://waterockapi.wegotam.com/getcustomercaredetails");
        const data = await response.json();

        if (response.ok) {
          setCustomerCareDetails(data);
        } else {
          console.error("Error fetching customer care details:", data.message);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomerCareDetails();
  }, []);

  if (loading) {
    return <p style={styles.loading}>Loading contact details...</p>;
  }

  return (
    <div style={styles.contactContainer}>
      <h2 style={styles.header}>Contact Us</h2>
      <p style={styles.description}>
        We'd love to hear from you! Please reach out using the contact details below.
      </p>

      <div style={styles.contactInfo}>
        <h3 style={styles.subHeader}>Phone Numbers</h3>
        <p>
          <strong>Customer Support:</strong> {customerCareDetails.customerCareNumber1 || "N/A"}
        </p>
        <p>
          <strong>Sales Inquiries:</strong> {customerCareDetails.customerCareNumber2 || "N/A"}
        </p>

        <h3 style={styles.subHeader}>Email Address</h3>
        <p>
          <strong>General Inquiries:</strong>{" "}
          <a
            href={`mailto:${customerCareDetails.customerCareEmail}`}
            style={styles.link}
          >
            {customerCareDetails.customerCareEmail || "N/A"}
          </a>
        </p>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  contactContainer: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  header: {
    fontSize: "1.8em",
    color: "#4CAF50",
    marginBottom: "15px",
  },
  description: {
    fontSize: "1em",
    marginBottom: "20px",
    color: "#333",
  },
  contactInfo: {
    fontSize: "1em",
    color: "#333",
  },
  subHeader: {
    fontSize: "1.2em",
    marginTop: "20px",
    color: "#333",
  },
  link: {
    color: "#4CAF50",
    textDecoration: "none",
  },
  loading: {
    fontSize: "1.2em",
    color: "#4CAF50",
    textAlign: "center",
  },
};

export default ContactUs;

























/*import React from 'react';

const ContactUs = () => {

  return (
    <div style={styles.contactContainer}>
      <h2 style={styles.header}>Contact Us</h2>
      <p style={styles.description}>
        We'd love to hear from you! Please reach out using the contact details below.
      </p>

      <div style={styles.contactInfo}>
        <h3 style={styles.subHeader}>Phone Numbers</h3>
        <p><strong>Customer Support:</strong> +23480000000</p>
        <p><strong>Sales Inquiries:</strong> +234800000000</p>

        <h3 style={styles.subHeader}>Email Addresses</h3>
        <p>
          <strong>General Inquiries:</strong>{" "}
          <a href="mailto:info@example.com" style={styles.link}>
            info@waterock.com
          </a>
        </p>
        <p>
          <strong>Support:</strong>{" "}
          <a href="mailto:support@example.com" style={styles.link}>
		  info@waterock.com
          </a>
        </p>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  contactContainer: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  header: {
    fontSize: "1.8em",
    color: "#4CAF50",
    marginBottom: "15px",
  },
  description: {
    fontSize: "1em",
    marginBottom: "20px",
    color: "#333",
  },
  contactInfo: {
    fontSize: "1em",
    color: "#333",
  },
  subHeader: {
    fontSize: "1.2em",
    marginTop: "20px",
    color: "#333",
  },
  link: {
    color: "#4CAF50",
    textDecoration: "none",
  },
};

// Export the component
export default ContactUs;
*/