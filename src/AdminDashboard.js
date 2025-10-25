// src/AdminDashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';
import AdminHeader from './AdminHeader';
import './AdminDashboard.css';

function AdminDashboard() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleNavCollapse = (collapsed) => {
    setIsNavCollapsed(collapsed);
  };

  // Mock data
  const upcomingEvents = [
    { id: 1, name: 'CSD WEEK', date: '2025-10-28', time: '9:00 AM', location: 'Building Q 3rd Floor', status: 'ongoing' },
    { id: 2, name: 'Tech Summit 2025', date: '2025-10-30', time: '2:00 PM', location: 'Auditorium', status: 'upcoming' },
    { id: 3, name: 'Workshop: React Basics', date: '2025-11-02', time: '10:00 AM', location: 'Lab 401', status: 'upcoming' },
    { id: 4, name: 'Sports Fest Opening', date: '2025-11-05', time: '8:00 AM', location: 'Sports Complex', status: 'upcoming' },
    { id: 5, name: 'Career Fair', date: '2025-11-08', time: '1:00 PM', location: 'Gym', status: 'upcoming' }
  ];

  const recentActivity = [
    { id: 1, action: 'New event created', details: 'Music Festival 2025', time: '10 minutes ago', type: 'create' },
    { id: 2, action: 'Event approved', details: 'Tech Summit 2025', time: '25 minutes ago', type: 'approve' },
    { id: 3, action: 'Student registered', details: 'John Doe registered for CSD WEEK', time: '1 hour ago', type: 'register' },
    { id: 4, action: 'Event updated', details: 'Sports Fest - Venue changed', time: '2 hours ago', type: 'update' },
    { id: 5, action: 'New event pending', details: 'Graduation Ball awaiting approval', time: '3 hours ago', type: 'pending' }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'create':
        return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="#388e3c" strokeWidth="2" strokeLinecap="round"/></svg>;
      case 'approve':
        return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
      case 'register':
        return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#f57c00" strokeWidth="2"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="#f57c00" strokeWidth="2"/></svg>;
      case 'update':
        return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="#7b1fa2" strokeWidth="2"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#7b1fa2" strokeWidth="2"/></svg>;
      case 'pending':
        return <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#f9a825" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="#f9a825" strokeWidth="2" strokeLinecap="round"/></svg>;
      default:
        return null;
    }
  };

  return (
    <div className="admin-container">
      <AdminNavBar onCollapse={handleNavCollapse} activePage="dashboard" />
      <AdminHeader isNavCollapsed={isNavCollapsed} />
      
      <main className={`admin-main-content ${isNavCollapsed ? 'navbar-collapsed' : ''}`}>
        {/* Ongoing Event Banner */}
        <div className="ongoing-banner">
          <div className="banner-content">
            <div className="banner-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Ongoing Event Today [DD/MM/YYYY]</span>
            </div>
            <div className="banner-title">CSD WEEK</div>
            <div className="banner-location">University of Caloocan City Building Q 3rd Floor</div>
          </div>
          <button className="view-details-btn">View Details</button>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Total Events</div>
            <div className="stat-value">48</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total Participants</div>
            <div className="stat-value">1,234</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Pending Approvals</div>
            <div className="stat-value">12</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Events This Month</div>
            <div className="stat-value stat-success">24</div>
          </div>
        </div>

        {/* Quick Actions */}
        <h2 className="section-title">Quick Actions</h2>
        <div className="quick-actions-grid">
          <div className="action-card" onClick={() => navigate('/admin-create-event')}>
            <svg className="action-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="action-text">Create Event</span>
          </div>
          <div className="action-card" onClick={() => navigate('/admin-approve-events')}>
            <svg className="action-icon" viewBox="0 0 24 24" fill="none">
              <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="action-text">Approve Events</span>
          </div>
          <div className="action-card" onClick={() => navigate('/admin-calendar')}>
            <svg className="action-icon" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M3 10h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="action-text">View Calendar</span>
          </div>
          <div className="action-card" onClick={() => navigate('/admin-reports')}>
            <svg className="action-icon" viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="action-text">Generate Reports</span>
          </div>
          <div className="action-card" onClick={() => navigate('/admin-users')}>
            <svg className="action-icon" viewBox="0 0 24 24" fill="none">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="action-text">Manage Users</span>
          </div>
          <div className="action-card" onClick={() => navigate('/admin-announcements')}>
            <svg className="action-icon" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="action-text">Send Announcements</span>
          </div>
          <div className="action-card" onClick={() => navigate('/admin-checkin')}>
            <svg className="action-icon" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 9h6v6H9z" fill="currentColor"/>
            </svg>
            <span className="action-text">Check-in Students</span>
          </div>
          <div className="action-card" onClick={() => navigate('/admin-analytics')}>
            <svg className="action-icon" viewBox="0 0 24 24" fill="none">
              <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2"/>
              <path d="M7 16l4-6 3 3 5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="action-text">Event Analytics</span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="two-column-layout">
          {/* Upcoming Events */}
          <div className="content-card">
            <h2 className="card-title">Upcoming Events</h2>
            <div className="events-list">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="event-item">
                  <div className="event-info">
                    <div className="event-name">{event.name}</div>
                    <div className="event-details">
                      <span>📅 {event.date}</span>
                      <span>🕐 {event.time}</span>
                      <span>📍 {event.location}</span>
                    </div>
                  </div>
                  <span className={`event-badge ${event.status === 'ongoing' ? 'badge-ongoing' : 'badge-upcoming'}`}>
                    {event.status === 'ongoing' ? 'Ongoing' : 'Upcoming'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="content-card">
            <h2 className="card-title">Recent Activity</h2>
            <div className="activity-list">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className={`activity-icon activity-icon-${activity.type}`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="activity-content">
                    <div className="activity-action">{activity.action}</div>
                    <div className="activity-details">{activity.details}</div>
                    <div className="activity-time">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;