// src/AdminCalendar.js
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./AdminCalendar.css";
import AdminNavBar from "./AdminNavBar";
import AdminHeader from "./AdminHeader";

const localizer = momentLocalizer(moment);

// Sample events with categories and status
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
    participants: 245
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
    participants: 180
  },
  {
    id: 3,
    title: "Science Fair",
    start: new Date(2025, 10, 5, 9, 0),
    end: new Date(2025, 10, 5, 16, 0),
    category: "academic",
    venue: "Science Building",
    description: "Student research and innovation exhibition",
    status: "pending",
    organizer: "Science Department",
    participants: 0
  },
  {
    id: 4,
    title: "Basketball Tournament Finals",
    start: new Date(2025, 9, 28, 14, 0),
    end: new Date(2025, 9, 28, 17, 0),
    category: "sports",
    venue: "Gymnasium",
    description: "Championship match",
    status: "approved",
    organizer: "Basketball Team",
    participants: 156
  },
  {
    id: 5,
    title: "Math Olympiad",
    start: new Date(2025, 10, 10, 10, 0),
    end: new Date(2025, 10, 10, 12, 0),
    category: "academic",
    venue: "Room 301",
    description: "Mathematics competition for all levels",
    status: "approved",
    organizer: "Math Department",
    participants: 89
  },
  {
    id: 6,
    title: "Art Exhibition Opening",
    start: new Date(2025, 10, 15, 15, 0),
    end: new Date(2025, 10, 15, 18, 0),
    category: "cultural",
    venue: "Art Gallery",
    description: "Student artwork showcase",
    status: "pending",
    organizer: "Arts Club",
    participants: 0
  }
];

function AdminCalendar() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("month");
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const handleNavCollapse = (collapsed) => {
    setIsNavCollapsed(collapsed);
  };

  // Filter events based on selected category
  const filteredEvents = selectedCategory === "all" 
    ? allEvents 
    : allEvents.filter(event => event.category === selectedCategory);

  // Custom event styling based on category
  const eventStyleGetter = (event) => {
    let backgroundColor = "#388e3c";
    
    switch(event.category) {
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

    // Add opacity for pending events
    const opacity = event.status === "pending" ? 0.6 : 0.9;

    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        opacity,
        color: "white",
        border: event.status === "pending" ? "2px dashed white" : "0px",
        display: "block"
      }
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

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const handleNavigate = (date) => {
    setCurrentDate(date);
  };

  const handleSelectSlot = (slotInfo) => {
    setCurrentDate(slotInfo.start);
    setCurrentView("day");
  };

  // Admin functions
  const handleApproveEvent = () => {
    console.log("Approving event:", selectedEvent.id);
    // Add your approval logic here
    alert(`Event "${selectedEvent.title}" has been approved!`);
    closeModal();
  };

  const handleRejectEvent = () => {
    if (window.confirm(`Are you sure you want to reject "${selectedEvent.title}"?`)) {
      console.log("Rejecting event:", selectedEvent.id);
      // Add your rejection logic here
      alert(`Event "${selectedEvent.title}" has been rejected.`);
      closeModal();
    }
  };

  const handleEditEvent = () => {
    console.log("Editing event:", selectedEvent.id);
    // Navigate to edit page or open edit modal
    alert(`Opening edit form for "${selectedEvent.title}"`);
  };

  const handleDeleteEvent = () => {
    if (window.confirm(`Are you sure you want to delete "${selectedEvent.title}"? This action cannot be undone.`)) {
      console.log("Deleting event:", selectedEvent.id);
      // Add your delete logic here
      alert(`Event "${selectedEvent.title}" has been deleted.`);
      closeModal();
    }
  };

  const handleViewParticipants = () => {
    console.log("Viewing participants for:", selectedEvent.id);
    // Navigate to participants page or open participants modal
    alert(`Viewing ${selectedEvent.participants} participants for "${selectedEvent.title}"`);
  };

  return (
    <div className="admin-calendar-page">
      <AdminNavBar onCollapse={handleNavCollapse} activePage="calendar" />
      <AdminHeader isNavCollapsed={isNavCollapsed} />

      <div className={`admin-calendar-container ${isNavCollapsed ? 'navbar-collapsed' : ''}`}>
        <div className="calendar-header">
          <h2 className="calendar-title">
            <i className="bi bi-calendar-event"></i> Event Calendar
          </h2>
          <p className="calendar-subtitle">Manage and oversee all school events and activities</p>
        </div>

        {/* Ongoing Event Banner */}
        <div className="ongoing-banner">
          <div className="banner-content">
            <div className="banner-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Ongoing Event Today [26/10/2025]</span>
            </div>
            <div className="banner-title">CSD WEEK</div>
            <div className="banner-location">University of Caloocan City Building Q 3rd Floor</div>
          </div>
          <button className="view-details-btn" onClick={() => console.log('View details clicked')}>
            View Details
          </button>
        </div>

        {/* Category Filters with Create Button */}
        <div className="filters-row">
          <div className="category-filters">
            <button 
              className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              <i className="bi bi-grid-3x3-gap"></i> All Events
            </button>
            <button 
              className={`filter-btn sports ${selectedCategory === "sports" ? "active" : ""}`}
              onClick={() => setSelectedCategory("sports")}
            >
              <i className="bi bi-trophy"></i> Sports
            </button>
            <button 
              className={`filter-btn cultural ${selectedCategory === "cultural" ? "active" : ""}`}
              onClick={() => setSelectedCategory("cultural")}
            >
              <i className="bi bi-palette"></i> Cultural
            </button>
            <button 
              className={`filter-btn academic ${selectedCategory === "academic" ? "active" : ""}`}
              onClick={() => setSelectedCategory("academic")}
            >
              <i className="bi bi-book"></i> Academic
            </button>
          </div>
          <button className="btn-create-event" onClick={() => console.log('Create event clicked')}>
            <i className="bi bi-plus-circle"></i> Create Event
          </button>
        </div>

        {/* Legend */}
        <div className="calendar-legend">
          <span className="legend-item">
            <span className="legend-color sports"></span> Sports
          </span>
          <span className="legend-item">
            <span className="legend-color cultural"></span> Cultural
          </span>
          <span className="legend-item">
            <span className="legend-color academic"></span> Academic
          </span>
          <span className="legend-item">
            <span className="legend-color pending"></span> Pending Approval
          </span>
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
            selectable={true}
            views={['month', 'week', 'day', 'agenda']}
            view={currentView}
            onView={handleViewChange}
            date={currentDate}
            onNavigate={handleNavigate}
            defaultView="month"
          />
        </div>
      </div>

      {/* Admin Event Detail Modal */}
      {showModal && selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="bi bi-x-lg"></i>
            </button>
            
            <div className="modal-header">
              <div className="modal-badges">
                <span className={`modal-category-badge ${selectedEvent.category}`}>
                  {selectedEvent.category.toUpperCase()}
                </span>
                <span className={`modal-status-badge ${selectedEvent.status}`}>
                  {selectedEvent.status === "pending" ? "PENDING APPROVAL" : "APPROVED"}
                </span>
              </div>
              <h3>{selectedEvent.title}</h3>
            </div>

            <div className="modal-body">
              <div className="modal-info-row">
                <i className="bi bi-calendar3"></i>
                <div>
                  <strong>Date:</strong>
                  <p>{moment(selectedEvent.start).format("MMMM D, YYYY")}</p>
                </div>
              </div>

              <div className="modal-info-row">
                <i className="bi bi-clock"></i>
                <div>
                  <strong>Time:</strong>
                  <p>
                    {moment(selectedEvent.start).format("h:mm A")} - 
                    {moment(selectedEvent.end).format("h:mm A")}
                  </p>
                </div>
              </div>

              <div className="modal-info-row">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <strong>Venue:</strong>
                  <p>{selectedEvent.venue}</p>
                </div>
              </div>

              <div className="modal-info-row">
                <i className="bi bi-person-badge"></i>
                <div>
                  <strong>Organizer:</strong>
                  <p>{selectedEvent.organizer}</p>
                </div>
              </div>

              <div className="modal-info-row">
                <i className="bi bi-people"></i>
                <div>
                  <strong>Registered Participants:</strong>
                  <p>{selectedEvent.participants} students</p>
                </div>
              </div>

              <div className="modal-info-row">
                <i className="bi bi-info-circle"></i>
                <div>
                  <strong>Description:</strong>
                  <p>{selectedEvent.description}</p>
                </div>
              </div>
            </div>

            <div className="modal-footer admin-actions">
              {selectedEvent.status === "pending" && (
                <>
                  <button className="btn-modal-approve" onClick={handleApproveEvent}>
                    <i className="bi bi-check-circle"></i> Approve Event
                  </button>
                  <button className="btn-modal-reject" onClick={handleRejectEvent}>
                    <i className="bi bi-x-circle"></i> Reject
                  </button>
                </>
              )}
              
              <button className="btn-modal-edit" onClick={handleEditEvent}>
                <i className="bi bi-pencil"></i> Edit
              </button>
              
              <button className="btn-modal-participants" onClick={handleViewParticipants}>
                <i className="bi bi-people"></i> View Participants
              </button>
              
              <button className="btn-modal-delete" onClick={handleDeleteEvent}>
                <i className="bi bi-trash"></i> Delete
              </button>
              
              <button className="btn-modal-secondary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCalendar;