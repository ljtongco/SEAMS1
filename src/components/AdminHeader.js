// src/AdminHeader.js
import React, { useState } from 'react';

import seamsuccLogo from "../assets/seamsucc.png";


function AdminHeader({ isNavCollapsed }) {
  const [searchValue, setSearchValue] = useState('');

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      left: isNavCollapsed ? '72px' : '250px',
      right: 0,
      height: '60px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #dee2e6',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      zIndex: 999,
      transition: 'left 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      gap: '16px'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '24px',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginRight: '24px'
    },
    logoIcon: {
      width: '32px',
      height: '32px',
      objectFit: 'contain'
    },
    searchContainer: {
      position: 'relative',
      flex: 1,
      maxWidth: '500px'
    },
    searchIcon: {
      position: 'absolute',
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '20px',
      height: '20px',
      color: '#6c757d',
      pointerEvents: 'none'
    },
    searchInput: {
      width: '100%',
      padding: '8px 12px 8px 40px',
      border: '1px solid #dee2e6',
      borderRadius: '8px',
      fontSize: '14px',
      outline: 'none',
      transition: 'all 0.2s ease',
      backgroundColor: '#f8f9fa'
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginLeft: 'auto'
    },
    iconButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.2s ease',
      position: 'relative'
    },
    icon: {
      width: '24px',
      height: '24px',
      color: '#495057'
    },
    badge: {
      position: 'absolute',
      top: '4px',
      right: '4px',
      width: '8px',
      height: '8px',
      backgroundColor: '#dc3545',
      borderRadius: '50%',
      border: '2px solid #ffffff'
    },
    profileButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.2s ease'
    },
    profileAvatar: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      backgroundColor: '#d4e7d7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid #388e3c'
    }
  };

  const handleSearchFocus = (e) => {
    e.target.style.borderColor = '#388e3c';
    e.target.style.backgroundColor = '#ffffff';
  };

  const handleSearchBlur = (e) => {
    e.target.style.borderColor = '#dee2e6';
    e.target.style.backgroundColor = '#f8f9fa';
  };

  const handleIconHover = (e, isEnter) => {
    e.currentTarget.style.backgroundColor = isEnter ? '#f8f9fa' : 'transparent';
  };

  const handleProfileHover = (e, isEnter) => {
    e.currentTarget.style.transform = isEnter ? 'scale(1.05)' : 'scale(1)';
  };

  return (
    <header style={styles.header}>
      {/* Logo */}
      <div style={styles.logo}>
        <img 
        src={seamsuccLogo}
        alt="SEAMS Logo" 
        style={styles.logoIcon}
/>
        <span>SEAMS</span>
      </div>

      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <svg style={styles.searchIcon} viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          style={styles.searchInput}
        />
      </div>

      {/* Right Section */}
      <div style={styles.rightSection}>
        {/* Notifications */}
        <button
          style={styles.iconButton}
          onMouseEnter={(e) => handleIconHover(e, true)}
          onMouseLeave={(e) => handleIconHover(e, false)}
          title="Notifications"
        >
          <svg style={styles.icon} viewBox="0 0 24 24" fill="none">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={styles.badge}></span>
        </button>

        {/* Messages */}
        <button
          style={styles.iconButton}
          onMouseEnter={(e) => handleIconHover(e, true)}
          onMouseLeave={(e) => handleIconHover(e, false)}
          title="Messages"
        >
          <svg style={styles.icon} viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={styles.badge}></span>
        </button>

        {/* Profile */}
        <button
          style={styles.profileButton}
          onMouseEnter={(e) => handleProfileHover(e, true)}
          onMouseLeave={(e) => handleProfileHover(e, false)}
          title="Profile"
        >
          <div style={styles.profileAvatar}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#388e3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="#388e3c" strokeWidth="2"/>
            </svg>
          </div>
        </button>
      </div>
    </header>
  );
}

export default AdminHeader;