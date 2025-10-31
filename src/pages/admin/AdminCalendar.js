// src/pages/admin/AdminCalendar.js
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../styles/AdminCalendar.css"; // ✅ Correct path for CSS

// Components
import AdminNavBar from "../../components/AdminNavBar"; // ✅ match exact file name
import AdminHeader from "../../components/AdminHeader";  // ✅ match exact file name

const localizer = momentLocalizer(moment);

// Sample events
const allEvents = [
  {
    id: 1,
    title: "Annual Sports Fest 2025",
    start: new Date(2025, 9, 25, 8, 0),
    end: new Date(2025, 9, 25, 17, 0),
    category: "sports",
    venue: "Main Campus Ground",
    description: "Annual inter-department sports competition",
    status: "approved",
    organizer: "Sports Committee",
    participants: 245,
  },
  {
    id: 2,
    title: "Cultural Night",
    start: new Date(2025, 9, 30, 18, 0),
    end: new Date(2025, 9, 30, 21, 0),
    category: "cultural",
    venue: "Auditorium",
    description: "Showcase of cultural performances and talents",
    status: "approved",
    organizer: "Cultural Club",
    participants: 180,
  },
  // ... add other events here
];

function AdminCalendar() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("month");
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const handleNavCollapse = (collapsed) => setIsNavCollapsed(collapsed);

  const filteredEvents =
    selectedCategory === "all"
      ? allEvents
      : allEvents.filter((event) => event.category === selectedCategory);

  const eventStyleGetter = (event) => {
    let backgroundColor = "#388e3c";
    switch (event.category) {
      case "sports":
        backgroundColor = "#1976d2";
        break;
      case "cultural":
        backgroundColor = "#7b1fa2";
        break;
      case "academic":
        backgroundColor = "#f57c00";
        break;
      default:
        backgroundColor = "#388e3c";
    }
    const opacity = event.status === "pending" ? 0.6 : 0.9;
    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        opacity,
        color: "white",
        border: event.status === "pending" ? "2px dashed white" : "0px",
        display: "block",
      },
    };
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  const handleViewChange = (view) => setCurrentView(view);
  const handleNavigate = (date) => setCurrentDate(date);
  const handleSelectSlot = (slotInfo) => {
    setCurrentDate(slotInfo.start);
    setCurrentView("day");
  };

  // Admin actions
  const handleApproveEvent = () => {
    alert(`Event "${selectedEvent.title}" approved!`);
    closeModal();
  };
  const handleRejectEvent = () => {
    if (window.confirm(`Reject "${selectedEvent.title}"?`)) {
      alert(`Event "${selectedEvent.title}" rejected.`);
      closeModal();
    }
  };
  const handleEditEvent = () => alert(`Editing "${selectedEvent.title}"`);
  const handleDeleteEvent = () => {
    if (window.confirm(`Delete "${selectedEvent.title}"?`)) {
      alert(`Deleted "${selectedEvent.title}"`);
      closeModal();
    }
  };
  const handleViewParticipants = () =>
    alert(`${selectedEvent.participants} participants`);

  return (
    <div className="admin-calendar-page">
      <AdminNavBar onCollapse={handleNavCollapse} activePage="calendar" />
      <AdminHeader isNavCollapsed={isNavCollapsed} />

      <div
        className={`admin-calendar-container ${
          isNavCollapsed ? "navbar-collapsed" : ""
        }`}
      >
        <div className="calendar-header">
          <h2 className="calendar-title">
            <i className="bi bi-calendar-event"></i> Event Calendar
          </h2>
          <p className="calendar-subtitle">Manage all school events</p>
        </div>

        {/* Filters */}
        <div className="filters-row">
          <div className="category-filters">
            <button
              className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              All Events
            </button>
            <button
              className={`filter-btn sports ${
                selectedCategory === "sports" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("sports")}
            >
              Sports
            </button>
            <button
              className={`filter-btn cultural ${
                selectedCategory === "cultural" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("cultural")}
            >
              Cultural
            </button>
            <button
              className={`filter-btn academic ${
                selectedCategory === "academic" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("academic")}
            >
              Academic
            </button>
          </div>
          <button className="btn-create-event">+ Create Event</button>
        </div>

        {/* Calendar */}
        <div className="calendar-wrapper">
          <Calendar
            localizer={localizer}
            events={filteredEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 700 }}
            eventPropGetter={eventStyleGetter}
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            selectable
            views={["month", "week", "day", "agenda"]}
            view={currentView}
            onView={handleViewChange}
            date={currentDate}
            onNavigate={handleNavigate}
          />
        </div>
      </div>

      {/* Event Modal */}
      {showModal && selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              X
            </button>
            <h3>{selectedEvent.title}</h3>
            <p>{selectedEvent.description}</p>
            <div className="modal-actions">
              {selectedEvent.status === "pending" && (
                <>
                  <button onClick={handleApproveEvent}>Approve</button>
                  <button onClick={handleRejectEvent}>Reject</button>
                </>
              )}
              <button onClick={handleEditEvent}>Edit</button>
              <button onClick={handleDeleteEvent}>Delete</button>
              <button onClick={handleViewParticipants}>View Participants</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCalendar;
