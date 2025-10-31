import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

// Components
import AdminNavBar from "../../components/AdminNavBar";
import AdminHeader from "../../components/AdminHeader";

// CSS
import "../../styles/AdminPendingApproval.css";

function AdminPendingApproval() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const navigate = useNavigate();
  const handleNavCollapse = (collapsed) => setIsNavCollapsed(collapsed);

  // Mock pending events data
  const pendingEvents = [
    {
      id: 1,
      title: "Tech Summit 2025",
      organizer: "CSD",
      category: "academic",
      type: "Summit",
      description: "Workshop on emerging technologies",
      date: "Oct 26",
      time: "2:00 PM",
      venue: "Auditorium",
      status: "pending",
    },
    {
      id: 2,
      title: "Workshop: React Basics",
      organizer: "CSD",
      category: "academic",
      type: "Workshop",
      description: "Workshop on basics of React",
      date: "Nov 23",
      time: "2:00 PM",
      venue: "Lab 401",
      status: "pending",
    },
    {
      id: 3,
      title: "Sports Fest Opening",
      organizer: "Sports Club",
      category: "sports",
      type: "Ceremony",
      description: "Kick-off of the annual sports fest",
      date: "Dec 10",
      time: "8:00 AM",
      venue: "Gymnasium",
      status: "pending",
    },
    {
      id: 4,
      title: "Music Festival 2025",
      organizer: "Cultural Committee",
      category: "cultural",
      type: "Music",
      description: "Annual music festival with student performances",
      date: "Dec 20",
      time: "6:00 PM",
      venue: "Auditorium",
      status: "pending",
    },
  ];

  // Filter events by category
  const filteredEvents =
    selectedCategory === "all"
      ? pendingEvents
      : pendingEvents.filter((event) => event.category === selectedCategory);

  // Handlers
  const handleApprove = (eventId) => {
    console.log("Approving event:", eventId);
    alert(`Event ${eventId} approved!`);
  };

  const handleReject = (eventId) => {
    if (window.confirm("Are you sure you want to reject this event?")) {
      console.log("Rejecting event:", eventId);
      alert(`Event ${eventId} rejected!`);
    }
  };

  const handleView = (event) => {
    setSelectedEvent(event);
    setShowViewModal(true);
  };

  // Inline styles for the modal
  const modalStyles = {
    modalContent: {
      borderRadius: "14px",
      border: "none",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
      padding: "10px 5px",
    },
    title: {
      fontWeight: "700",
      color: "#2e7d32",
      textAlign: "center",
      marginBottom: "16px",
    },
    detailsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      padding: "6px 4px",
    },
    row: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      borderBottom: "1px solid #eee",
      paddingBottom: "8px",
    },
    label: {
      fontWeight: "600",
      color: "#555",
      fontSize: "14px",
    },
    value: {
      color: "#333",
      fontSize: "15px",
    },
    description: {
      color: "#444",
      whiteSpace: "pre-line",
    },
    status: {
      fontWeight: "700",
    },
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "#e67e22";
      case "approved":
        return "#2e7d32";
      case "rejected":
        return "#d32f2f";
      default:
        return "#333";
    }
  };

  return (
    <div className="admin-container">
      <AdminNavBar onCollapse={handleNavCollapse} activePage="events" />
      <AdminHeader isNavCollapsed={isNavCollapsed} />

      <main
        className={`admin-main-content ${
          isNavCollapsed ? "navbar-collapsed" : ""
        }`}
      >
        {/* Page Header */}
        <div className="approve-events-header">
          <h1 className="page-title">Approve Events</h1>
        </div>

        {/* Category Filter */}
        <div className="filter-section">
          <select
            className="category-dropdown"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="academic">Academic / Educational</option>
            <option value="cultural">Cultural</option>
            <option value="sports">Sports</option>
            <option value="community">Community</option>
            <option value="student-life">Student Life / Social</option>
            <option value="administrative">Administrative</option>
          </select>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-card-header">
                  <h3 className="event-card-title">{event.title}</h3>
                  <span className="event-status-badge pending">Pending</span>
                </div>

                <div className="event-card-body">
                  <div className="event-info-row">
                    <i className="bi bi-building"></i>
                    <span>{event.organizer}</span>
                  </div>
                  <div className="event-info-row">
                    <i className="bi bi-tag"></i>
                    <span>{event.type}</span>
                  </div>
                  <div className="event-info-row">
                    <i className="bi bi-file-text"></i>
                    <span>{event.description}</span>
                  </div>
                  <div className="event-info-row">
                    <i className="bi bi-calendar"></i>
                    <span>
                      {event.date} – {event.time}
                    </span>
                  </div>
                  <div className="event-info-row">
                    <i className="bi bi-geo-alt"></i>
                    <span>{event.venue}</span>
                  </div>
                  <div className="event-status-row">
                    <span className="status-label">Status:</span>
                    <span className="status-value pending-status">Pending</span>
                  </div>
                </div>

                <div className="event-card-actions">
                  <button className="btn-view" onClick={() => handleView(event)}>
                    View
                  </button>
                  <button
                    className="btn-approve"
                    onClick={() => handleApprove(event.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="btn-reject"
                    onClick={() => handleReject(event.id)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-events">
              <i
                className="bi bi-inbox"
                style={{ fontSize: "48px", color: "#ccc" }}
              ></i>
              <p>No pending events in this category</p>
            </div>
          )}
        </div>

        {/* Inline Modal */}
        <Modal
          show={showViewModal}
          onHide={() => setShowViewModal(false)}
          centered
          size="md"
          backdrop="static"
        >
          <div style={modalStyles.modalContent}>
            <Modal.Header closeButton>
              <Modal.Title>Event Details</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {selectedEvent && (
                <div style={modalStyles.detailsContainer}>
                  <h4 style={modalStyles.title}>{selectedEvent.title}</h4>

                  <div style={modalStyles.row}>
                    <span style={modalStyles.label}>Organizer:</span>
                    <span style={modalStyles.value}>
                      {selectedEvent.organizer || "—"}
                    </span>
                  </div>

                  <div style={modalStyles.row}>
                    <span style={modalStyles.label}>Category:</span>
                    <span style={modalStyles.value}>
                      {selectedEvent.category || "—"}
                    </span>
                  </div>

                  <div style={modalStyles.row}>
                    <span style={modalStyles.label}>Type:</span>
                    <span style={modalStyles.value}>
                      {selectedEvent.type || "—"}
                    </span>
                  </div>

                  <div style={modalStyles.row}>
                    <span style={modalStyles.label}>Description:</span>
                    <span
                      style={{
                        ...modalStyles.value,
                        ...modalStyles.description,
                      }}
                    >
                      {selectedEvent.description ||
                        "No description provided."}
                    </span>
                  </div>

                  <div style={modalStyles.row}>
                    <span style={modalStyles.label}>Date & Time:</span>
                    <span style={modalStyles.value}>
                      {selectedEvent.date && selectedEvent.time
                        ? `${selectedEvent.date} – ${selectedEvent.time}`
                        : "—"}
                    </span>
                  </div>

                  <div style={modalStyles.row}>
                    <span style={modalStyles.label}>Venue:</span>
                    <span style={modalStyles.value}>
                      {selectedEvent.venue || "—"}
                    </span>
                  </div>

                  <div style={{ ...modalStyles.row, borderBottom: "none" }}>
                    <span style={modalStyles.label}>Status:</span>
                    <span
                      style={{
                        ...modalStyles.value,
                        ...modalStyles.status,
                        color: getStatusColor(selectedEvent.status),
                      }}
                    >
                      {selectedEvent.status || "—"}
                    </span>
                  </div>
                </div>
              )}
            </Modal.Body>

            <Modal.Footer style={{ borderTop: "none" }}>
              <Button variant="secondary" onClick={() => setShowViewModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </main>
    </div>
  );
}

export default AdminPendingApproval;
