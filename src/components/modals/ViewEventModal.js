import React from "react";
import { Modal, Button } from "react-bootstrap";

function ViewEventModal({ show, onHide, event }) {
  if (!event) return null;

  const styles = {
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
    <Modal show={show} onHide={onHide} centered size="md" backdrop="static">
      <div style={styles.modalContent}>
        <Modal.Header closeButton>
          <Modal.Title>Event Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div style={styles.detailsContainer}>
            <h4 style={styles.title}>{event.title}</h4>

            <div style={styles.row}>
              <span style={styles.label}>Organizer:</span>
              <span style={styles.value}>{event.organizer || "—"}</span>
            </div>

            <div style={styles.row}>
              <span style={styles.label}>Category:</span>
              <span style={styles.value}>{event.category || "—"}</span>
            </div>

            <div style={styles.row}>
              <span style={styles.label}>Type:</span>
              <span style={styles.value}>{event.type || "—"}</span>
            </div>

            <div style={styles.row}>
              <span style={styles.label}>Description:</span>
              <span style={{ ...styles.value, ...styles.description }}>
                {event.description || "No description provided."}
              </span>
            </div>

            <div style={styles.row}>
              <span style={styles.label}>Date & Time:</span>
              <span style={styles.value}>
                {event.date && event.time
                  ? `${event.date} – ${event.time}`
                  : "—"}
              </span>
            </div>

            <div style={styles.row}>
              <span style={styles.label}>Venue:</span>
              <span style={styles.value}>{event.venue || "—"}</span>
            </div>

            <div style={{ ...styles.row, borderBottom: "none" }}>
              <span style={styles.label}>Status:</span>
              <span
                style={{
                  ...styles.value,
                  ...styles.status,
                  color: getStatusColor(event.status),
                }}
              >
                {event.status || "—"}
              </span>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer style={{ borderTop: "none" }}>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default ViewEventModal;
