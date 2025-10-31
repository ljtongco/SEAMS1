// src/components/SeamsHeader.js
import React from "react";
import ucclogo from "../assets/seamsucc.png"; // ✅ updated path

function SeamsHeader() {
  const styles = {
    header: {
      position: 'absolute',
      top: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      background: 'transparent',
      padding: '0 0 30px 0',
      margin: 0,
      zIndex: 10,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    top: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: '20px'
    },
    logo: {
      height: '90px',
      width: 'auto',
      flexShrink: 0
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: 'white',
      textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)',
      margin: 0,
      lineHeight: 1
    },
    subtitle: {
      fontSize: '1.3rem',
      color: 'white',
      fontWeight: 500,
      margin: '-8px 0 0 0',
      lineHeight: 1.4
    },
    orange: {
      color: '#f57c00',
      fontWeight: 'bold'
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.top}>
        <img src={ucclogo} alt="UCC Logo" style={styles.logo} />
        <h1 style={styles.title}>S.E.A.M.S</h1>
      </div>
      <p style={styles.subtitle}>
        <span style={styles.orange}>S</span>chool{" "}
        <span style={styles.orange}>E</span>vent{" "}
        <span>and</span>{" "}
        <span style={styles.orange}>A</span>ctivity{" "}
        <span style={styles.orange}>M</span>anagement{" "}
        <span style={styles.orange}>S</span>ystem
      </p>
    </header>
  );
}

export default SeamsHeader;
