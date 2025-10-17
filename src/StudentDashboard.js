// src/StudentDashboard.js
import React, { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";
import "./StudentDashboard.css";

function StudentDashboard() {
  useEffect(() => {
    document.title = "SEAMS - Student Dashboard";
  }, []);

  // Sample data - replace with actual API calls
  const [upcomingEvents] = useState([
    {
      id: 1,
      title: "Annual Sports Fest 2025",
      date: "Oct 25, 2025",
      category: "Sports",
      time: "8:00 AM",
      venue: "Main Campus Ground"
    },
    {
      id: 2,
      title: "Cultural Night",
      date: "Oct 30, 2025",
      category: "Cultural",
      time: "6:00 PM",
      venue: "Auditorium"
    },
    {
      id: 3,
      title: "Science Fair",
      date: "Nov 5, 2025",
      category: "Academic",
      time: "9:00 AM",
      venue: "Science Building"
    }
  ]);

  const [stats] = useState({
    registered: 5,
    completed: 12,
    certificates: 8
  });

  return (
    <div className="student-dashboard">
      {/* Navbar */}
      <UserNavbar />

      {/* Content */}
      <div className="dashboard-container">
        {/* Welcome Header */}
        <div className="welcome-section">
          <h2 className="dashboard-title">Welcome, Student 👋</h2>
          <p className="dashboard-subtitle">
            Manage your events, track activities, and stay updated with school announcements.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="stats-row">
          <div className="stat-card">
            <i className="bi bi-calendar-check stat-icon"></i>
            <div className="stat-info">
              <h3>{stats.registered}</h3>
              <p>Registered Events</p>
            </div>
          </div>
          <div className="stat-card">
            <i className="bi bi-check-circle stat-icon"></i>
            <div className="stat-info">
              <h3>{stats.completed}</h3>
              <p>Completed Events</p>
            </div>
          </div>
          <div className="stat-card">
            <i className="bi bi-award stat-icon"></i>
            <div className="stat-info">
              <h3>{stats.certificates}</h3>
              <p>Certificates Earned</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="dashboard-grid">
          {/* Upcoming Events Section */}
          <div className="dashboard-section upcoming-events-section">
            <div className="section-header">
              <h4><i className="bi bi-calendar-event"></i> Upcoming Events</h4>
              <a href="/student-calendar" className="view-all-link">View All</a>
            </div>
            <div className="events-list">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="event-item">
                  <div className="event-date-badge">
                    <span className="event-month">{event.date.split(" ")[0]}</span>
                    <span className="event-day">{event.date.split(" ")[1].replace(",", "")}</span>
                  </div>
                  <div className="event-details">
                    <h5>{event.title}</h5>
                    <div className="event-meta">
                      <span className={`category-badge ${event.category.toLowerCase()}`}>
                        {event.category}
                      </span>
                      <span><i className="bi bi-clock"></i> {event.time}</span>
                      <span><i className="bi bi-geo-alt"></i> {event.venue}</span>
                    </div>
                  </div>
                  <button className="btn-register">Register</button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions Section */}
          <div className="dashboard-section quick-actions-section">
            <div className="section-header">
              <h4><i className="bi bi-lightning-charge"></i> Quick Actions</h4>
            </div>
            <div className="quick-actions">
              <button className="action-btn">
                <i className="bi bi-calendar-plus"></i>
                Browse Events
              </button>
              <button className="action-btn">
                <i className="bi bi-list-check"></i>
                My Registrations
              </button>
              <button className="action-btn">
                <i className="bi bi-file-earmark-text"></i>
                View Certificates
              </button>
              <button className="action-btn">
                <i className="bi bi-chat-dots"></i>
                Give Feedback
              </button>
            </div>

            {/* Announcements */}
            <div className="announcements-box">
              <h5><i className="bi bi-megaphone"></i> Latest Announcements</h5>
              <div className="announcement-item">
                <p><strong>Reminder:</strong> Sports Fest registration closes Oct 20!</p>
                <small>2 hours ago</small>
              </div>
              <div className="announcement-item">
                <p><strong>New:</strong> Cultural Night auditions open now.</p>
                <small>1 day ago</small>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="feature-section">
          <h4 className="section-title">Explore More Features</h4>
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <i className="bi bi-trophy dashboard-icon"></i>
              <h5>Achievements</h5>
              <p>View your participation history and earned badges.</p>
            </div>
            <div className="dashboard-card">
              <i className="bi bi-shield-check dashboard-icon"></i>
              <h5>Blockchain Verified</h5>
              <p>All your records are secured with blockchain technology.</p>
            </div>
            <div className="dashboard-card">
              <i className="bi bi-graph-up dashboard-icon"></i>
              <h5>Activity Report</h5>
              <p>Track your engagement and performance over time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default StudentDashboard;