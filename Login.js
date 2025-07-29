import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple placeholder login check
    if (email && password) {
      navigate('/search'); // Redirect to Recipe.js
    } else {
      alert('Please enter both email and password.');
    }
  };

  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to bottom right, #fff5f5, #fbecec)',
      fontFamily: 'Segoe UI, sans-serif',
    },
    formBox: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(122, 31, 31, 0.2)',
      width: '350px',
      textAlign: 'center',
    },
    title: {
      color: '#7a1f1f',
      fontSize: '1.8rem',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '1rem',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#7a1f1f',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background 0.3s',
      marginTop: '20px',
    },
    buttonHover: {
      backgroundColor: '#5e1616',
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.formBox} onSubmit={handleLogin}>
        <div style={styles.title}>Login to Bhojanamitra</div>
        <input
          type="email"
          placeholder="email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
