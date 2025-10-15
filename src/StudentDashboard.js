// src/StudentDashboard.js
import React, { useEffect } from "react";
import UserNavbar from "./UserNavbar";
import "./StudentDashboard.css";

function StudentDashboard() {
  useEffect(() => {
    document.title = "SEAMS - Student Dashboard";
  }, []);

  return (
    <div className="student-dashboard">
      {/* Navbar */}
      <UserNavbar />

      {/* Content */}
      <div className="dashboard-container">
        <h2 className="dashboard-title">Welcome, Student 👋</h2>
        <p className="dashboard-subtitle">
          Here you can manage your events, view announcements, and track your activities.
        </p>

        {/* Cards Section */}
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <i className="bi bi-calendar-check dashboard-icon"></i>
            <h5>My Events</h5>
            <p>View and manage your registered events and schedules.</p>
          </div>
          <div className="dashboard-card">
            <i className="bi bi-bell-fill dashboard-icon"></i>
            <h5>Announcements</h5>
            <p>Stay updated with the latest news from your department.</p>
          </div>
          <div className="dashboard-card">
            <i className="bi bi-bar-chart-fill dashboard-icon"></i>
            <h5>Activity Report</h5>
            <p>Track your event participation and achievements.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
