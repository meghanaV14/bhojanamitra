import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import background from '../assets/bhojanamitra.png';

const Welcome = () => {
  const navigate = useNavigate();

  const styles = {
    background: {
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100%',
      position: 'relative',
      fontFamily: 'Segoe UI, sans-serif',
    },
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(6px)',
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      textAlign: 'center',
      color: '#7a1f1f', // Maroon color from the logo
      zIndex: 1,
    },
    logo: {
      width: '180px',
      marginBottom: '20px',
    },
    heading: {
      fontSize: '3rem',
      marginBottom: '10px',
    },
    subheading: {
      fontSize: '1.3rem',
      marginBottom: '30px',
    },
    button: {
      backgroundColor: '#7a1f1f',
      color: 'white',
      padding: '12px 24px',
      margin: '10px',
      border: 'none',
      borderRadius: '30px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: '0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#5e1616',
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.overlay}>
        <div style={styles.container}>
          <img src={logo} alt="Bhojanamitra Logo" style={styles.logo} />
          <h1 style={styles.heading}>Welcome to Bhojanamitra</h1>
          <p style={styles.subheading}>Your Culinary Companion</p>
          <div>
            <button
              style={styles.button}
              onClick={() => navigate('/login')}
              onMouseOver={e => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseOut={e => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            >
              Login
            </button>
            <button
              style={styles.button}
              onClick={() => navigate('/register')}
              onMouseOver={e => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseOut={e => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
