import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

// Components
import AdminNavBar from "../../components/AdminNavBar";
import AdminHeader from "../../components/AdminHeader";

// CSS
import "../../styles/AdminPendingApproval.css";

// Inline ConfirmationModal component
function ConfirmationModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = 'Confirm Action', 
  message = 'Are you sure you want to proceed?', 
  confirmText = 'Confirm', 
  cancelText = 'Cancel', 
  type = 'default', 
  icon = null 
}) {
  if (!isOpen) return null;

  const overlayStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    animation: 'fadeIn 0.2s ease-in-out'
  };

  const modalStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    width: '90%',
    maxWidth: '480px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    animation: 'slideUp 0.3s ease-out',
    overflow: 'hidden'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    padding: '24px 24px 20px',
    borderBottom: '2px solid #f0f0f0'
  };

  const iconWrapperStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    backgroundColor: 
      type === 'danger' ? '#ffebee' :
      type === 'success' ? '#e8f5e9' :
      type === 'warning' ? '#fff3e0' : '#f5f5f5'
  };

  const iconStyle = { fontSize: '24px' };
  const headerContentStyle = { flex: 1 };
  const titleStyle = { fontSize: '20px', fontWeight: 700, color: '#333', margin: 0, marginBottom: '8px', lineHeight: 1.3 };
  const bodyStyle = { padding: '24px' };
  const messageStyle = { fontSize: '15px', color: '#666', margin: 0, lineHeight: 1.6 };
  const footerStyle = { padding: '20px 24px', backgroundColor: '#f9f9f9', borderTop: '2px solid #f0f0f0', display: 'flex', gap: '12px', justifyContent: 'flex-end' };

  const buttonBaseStyle = {
    padding: '12px 28px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const cancelButtonStyle = { ...buttonBaseStyle, backgroundColor: '#f5f5f5', color: '#333', border: '2px solid #e0e0e0' };
  const confirmButtonStyle = {
    ...buttonBaseStyle,
    backgroundColor: type === 'danger' ? '#f44336' : type === 'success' ? '#388e3c' : type === 'warning' ? '#e67e22' : '#388e3c',
    color: 'white'
  };

  const handleOverlayClick = (e) => e.target === e.currentTarget && onClose();
  const handleConfirm = () => { onConfirm(); onClose(); };

  const getDefaultIcon = () => {
    if (icon) return icon;
    switch (type) {
      case 'danger': return <span style={iconStyle}>⚠️</span>;
      case 'success': return <span style={iconStyle}>✓</span>;
      case 'warning': return <span style={iconStyle}>⚠</span>;
      default: return <span style={iconStyle}>?</span>;
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn { from {opacity:0} to {opacity:1} }
        @keyframes slideUp { from {transform:translateY(30px); opacity:0} to {transform:translateY(0); opacity:1} }
      `}</style>

      <div style={overlayStyle} onClick={handleOverlayClick}>
        <div style={modalStyle}>
          <div style={headerStyle}>
            <div style={iconWrapperStyle}>{getDefaultIcon()}</div>
            <div style={headerContentStyle}>
              <h3 style={titleStyle}>{title}</h3>
            </div>
          </div>
          <div style={bodyStyle}>
            <p style={messageStyle}>{message}</p>
          </div>
          <div style={footerStyle}>
            <button
              style={cancelButtonStyle}
              onClick={onClose}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            >
              {cancelText}
            </button>
            <button
              style={confirmButtonStyle}
              onClick={handleConfirm}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function AdminPendingApproval() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Confirmation modal state
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmAction, setConfirmAction] = useState(() => {});
  const [confirmMessage, setConfirmMessage] = useState("");
  const [confirmTitle, setConfirmTitle] = useState("");
  const [confirmType, setConfirmType] = useState("default");

  const navigate = useNavigate();
  const handleNavCollapse = (collapsed) => setIsNavCollapsed(collapsed);

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

  const filteredEvents =
    selectedCategory === "all"
      ? pendingEvents
      : pendingEvents.filter((event) => event.category === selectedCategory);

  const handleApprove = (eventId) => {
    setConfirmTitle("Approve Event");
    setConfirmMessage(`Are you sure you want to approve event ${eventId}?`);
    setConfirmType("success");
    setConfirmAction(() => () => {
      console.log("Approving event:", eventId);
      alert(`Event ${eventId} approved!`);
    });
    setShowConfirmModal(true);
  };

  const handleReject = (eventId) => {
    setConfirmTitle("Reject Event");
    setConfirmMessage(`Are you sure you want to reject event ${eventId}?`);
    setConfirmType("danger");
    setConfirmAction(() => () => {
      console.log("Rejecting event:", eventId);
      alert(`Event ${eventId} rejected!`);
    });
    setShowConfirmModal(true);
  };

  const handleView = (event) => {
    setSelectedEvent(event);
    setShowViewModal(true);
  };

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

        {/* Inline View Modal */}
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
              <Button
                variant="secondary"
                onClick={() => setShowViewModal(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>

        {/* Confirmation Modal */}
        <ConfirmationModal
          isOpen={showConfirmModal}
          onClose={() => setShowConfirmModal(false)}
          onConfirm={confirmAction}
          title={confirmTitle}
          message={confirmMessage}
          type={confirmType}
        />
      </main>
    </div>
  );
}

export default AdminPendingApproval;
