import React from "react";

const PersonalDetailsForm: React.FC = () => {
  return (
    <div style={styles.container}>
      {/* Form Section */}
      <div style={styles.formSection}>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Personal Details</h2>
          <form style={styles.form}>
            <div style={styles.row}>
              <input
                type="text"
                placeholder="First Name"
                style={styles.inputHalf}
              />
              <input
                type="text"
                placeholder="Last Name"
                style={styles.inputHalf}
              />
            </div>
            <div style={styles.row}>
              <input
                type="date"
                placeholder="Date Of Birth"
                style={styles.inputHalf}
              />
              <input
                type="text"
                placeholder="Gender"
                style={styles.inputHalf}
              />
            </div>
            <input
              type="email"
              placeholder="Enter your Email"
              style={styles.inputFull}
            />
            <input
              type="password"
              placeholder="Create Password"
              style={styles.inputFull}
            />
            <input
              type="text"
              placeholder="Enter your ID"
              style={styles.inputFull}
            />
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div style={styles.imageSection}>
        <img
          src="https://www.joinindiannavy.gov.in/images/octaginal-crest.png"
          alt="Navy Emblem"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  formSection: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f6fa",
  },
  formContainer: {
    backgroundColor: "white",
    border: "2px solid #1f3a93",
    borderRadius: "8px",
    padding: "30px",
    width: "100%",
    maxWidth: "400px",
    height: "550px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1f3a93",
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    width: "100%",
  },
  row: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  inputHalf: {
    flex: 1,
    padding: "5px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  inputFull: {
    width: "90%",
    padding: "6px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100px",
    padding: "12px",
    backgroundColor: "#1f3a93",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  imageSection: {
    flex: 1,
    backgroundColor: "#000080",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "300px",
    height: "auto",
  },
};

export default PersonalDetailsForm;
