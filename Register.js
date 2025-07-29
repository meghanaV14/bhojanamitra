import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered:", formData);
    navigate("/search"); // 👈 Redirects to Recipes after registration
  };

  const styles = {
    container: {
      backgroundImage: `url('https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textShadow: "1px 1px 5px #000"
    },
    formBox: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      padding: "30px",
      borderRadius: "10px",
      color: "white",
      width: "90%",
      maxWidth: "400px"
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px",
      border: "none"
    },
    button: {
      width: "100%",
      padding: "12px",
      marginTop: "10px",
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      cursor: "pointer"
    },
    heading: {
      fontSize: "2rem",
      marginBottom: "20px",
      textAlign: "center"
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.formBox}>
        <h2 style={styles.heading}>📝 Register</h2>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
}

export default Register;
