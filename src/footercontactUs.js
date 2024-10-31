import React from "react";

const FooterContactUs = () => {
  return (
    <div style={styles.contactContainer}>
      <h2 style={styles.header}>Contact Us</h2>
      <p style={styles.description}>
        We'd love to hear from you! Please reach out using the contact details below.
      </p>

      <div style={styles.contactInfo}>
        <h3 style={styles.subHeader}>Phone Numbers</h3>
        <p><strong>Customer Support:</strong> +1 (123) 456-7890</p>
        <p><strong>Sales Inquiries:</strong> +1 (987) 654-3210</p>

        <h3 style={styles.subHeader}>Email Addresses</h3>
        <p>
          <strong>General Inquiries:</strong>{" "}
          <a href="mailto:info@example.com" style={styles.link}>
            info@example.com
          </a>
        </p>
        <p>
          <strong>Support:</strong>{" "}
          <a href="mailto:support@example.com" style={styles.link}>
            support@example.com
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
export default  FooterContactUs;
