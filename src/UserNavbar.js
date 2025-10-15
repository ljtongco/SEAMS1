import React from "react";
import { Link } from "react-router-dom";
import ucclogo from "./assets/seamsucc.png";

function UserNavbar() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 40px",
      }}
    >
      {/* Left: Logo + App Name */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={ucclogo}
          alt="Logo"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
        />
        <span style={{ fontWeight: "bold", fontSize: "18px", color: "green" }}>
          S.E.A.M.S
        </span>
      </div>

      {/* Center: Nav links */}
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <Link to="/student-dashboard" style={navLinkStyle}>
          HOME
        </Link>
        <Link to="/student-calendar" style={navLinkStyle}>
          CALENDAR
        </Link>
        <a href="#" style={navLinkStyle}>
          ABOUT
        </a>
        <a href="#" style={navLinkStyle}>
          CONTACT
        </a>
        <a href="#" style={navLinkStyle}>
          PROFILE
        </a>
      </div>
    </div>
  );
}

// Reusable inline style for links
const navLinkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "500",
  fontSize: "15px",
};

export default UserNavbar;
