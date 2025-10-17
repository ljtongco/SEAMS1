import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ucclogo from "./assets/seamsucc.png";

function UserNavbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      style={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #ddd",
        padding: "10px 20px",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      {/* Styling Block */}
      <style>
        {`
          .nav-links {
            position: relative;
          }

          .nav-links a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            font-size: 15px;
            padding: 8px 16px;
            border-radius: 4px;
            transition: color 0.3s ease;
            position: relative;
          }

          .nav-links a:hover {
            color: #e67e22;
          }

          .nav-links a.active-link {
            color: #e67e22 !important;
            font-weight: bold;
          }

          /* Animated underline */
          .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #e67e22;
            transition: width 0.3s ease;
          }

          .nav-links a:hover::after,
          .nav-links a.active-link::after {
            width: 100%;
          }

          /* Desktop - Center the links */
          @media (min-width: 769px) {
            .nav-container {
              display: flex;
              align-items: center;
              justify-content: space-between;
              position: relative;
            }
            
            .nav-links {
              display: flex;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              gap: 30px;
            }
            
            .menu-btn {
              display: none;
            }
          }

          /* Mobile Styles */
          @media (max-width: 768px) {
            .nav-container {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            
            .nav-links {
              display: ${menuOpen ? "flex" : "none"};
              flex-direction: column;
              gap: 15px;
              text-align: center;
              padding: 20px 0;
              position: absolute;
              top: 60px;
              left: 0;
              right: 0;
              background-color: #fff;
              border-top: 1px solid #ddd;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            
            .menu-btn {
              display: block;
            }
          }
        `}
      </style>

      <div className="nav-container">
        {/* Logo + Title */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={ucclogo}
            alt="Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
          <span style={{ fontWeight: "bold", fontSize: "18px", color: "#388e3c" }}>
            S.E.A.M.S
          </span>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="menu-btn"
          onClick={toggleMenu}
          style={{
            fontSize: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#333",
          }}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link
            to="/student-dashboard"
            className={location.pathname === "/student-dashboard" ? "active-link" : ""}
          >
            HOME
          </Link>
          <Link
            to="/student-calendar"
            className={location.pathname === "/student-calendar" ? "active-link" : ""}
          >
            CALENDAR
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active-link" : ""}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active-link" : ""}
          >
            CONTACT
          </Link>
          <Link
            to="/profile"
            className={location.pathname === "/profile" ? "active-link" : ""}
          >
            PROFILE
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;