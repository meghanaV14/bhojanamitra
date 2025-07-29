import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundImage: "url('https://images.unsplash.com/photo-1551782450-a2132b4ba21d')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      textAlign: "center",
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      padding: "0 20px"
    }}>
      <div style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
      }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>🎉 Thank You for Using Bhojanamitra!</h1>
        <p style={{ fontSize: "1.2rem" }}>Redirecting you to the homepage...</p>
      </div>
    </div>
  );
}

export default ThankYou;
