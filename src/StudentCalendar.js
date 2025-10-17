// src/StudentCalendar.js
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./StudentCalendar.css";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";

const localizer = momentLocalizer(moment);

// Sample events with categories
const allEvents = [
  {
    id: 1,
    title: "Annual Sports Fest 2025",
    start: new Date(2025, 9, 25, 8, 0), // Oct = month 9
    end: new Date(2025, 9, 25, 17, 0),
    category: "sports",
    venue: "Main Campus Ground",
    description: "Annual inter-department sports competition"
  },
  {
    id: 2,
    title: "Cultural Night",
    start: new Date(2025, 9, 30, 18, 0),
    end: new Date(2025, 9, 30, 21, 0),
    category: "cultural",
    venue: "Auditorium",
    description: "Showcase of cultural performances and talents"
  },
  {
    id: 3,
    title: "Science Fair",
    start: new Date(2025, 10, 5, 9, 0), // Nov = month 10
    end: new Date(2025, 10, 5, 16, 0),
    category: "academic",
    venue: "Science Building",
    description: "Student research and innovation exhibition"
  },
  {
    id: 4,
    title: "Basketball Tournament Finals",
    start: new Date(2025, 9, 28, 14, 0),
    end: new Date(2025, 9, 28, 17, 0),
    category: "sports",
    venue: "Gymnasium",
    description: "Championship match"
  },
  {
    id: 5,
    title: "Math Olympiad",
    start: new Date(2025, 10, 10, 10, 0),
    end: new Date(2025, 10, 10, 12, 0),
    category: "academic",
    venue: "Room 301",
    description: "Mathematics competition for all levels"
  },
  {
    id: 6,
    title: "Art Exhibition Opening",
    start: new Date(2025, 10, 15, 15, 0),
    end: new Date(2025, 10, 15, 18, 0),
    category: "cultural",
    venue: "Art Gallery",
    description: "Student artwork showcase"
  }
];

function StudentCalendar() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("month");

  // Filter events based on selected category
  const filteredEvents = selectedCategory === "all" 
    ? allEvents 
    : allEvents.filter(event => event.category === selectedCategory);

  // Custom event styling based on category
  const eventStyleGetter = (event) => {
    let backgroundColor = "#388e3c"; // default green
    
    switch(event.category) {
      case "sports":
        backgroundColor = "#1976d2"; // blue
        break;
      case "cultural":
        backgroundColor = "#7b1fa2"; // purple
        break;
      case "academic":
        backgroundColor = "#f57c00"; // orange
        break;
      default:
        backgroundColor = "#388e3c";
    }

    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        opacity: 0.9,
        color: "white",
        border: "0px",
        display: "block"
      }
    };
  };

  // Handle event click
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  // Handle view change
  const handleViewChange = (view) => {
    console.log("View changed to:", view);
    setCurrentView(view);
  };

  // Handle navigation
  const handleNavigate = (date) => {
    console.log("Date changed to:", date);
    setCurrentDate(date);
  };

  // Handle clicking on a day slot
  const handleSelectSlot = (slotInfo) => {
    console.log("Day clicked:", slotInfo.start);
    setCurrentDate(slotInfo.start);
    setCurrentView("day");
  };

  return (
    <div className="student-calendar-page">
      {/* Navbar */}
      <UserNavbar />

      {/* Calendar Section */}
      <div className="calendar-container">
        <div className="calendar-header">
          <h2 className="calendar-title">
            <i className="bi bi-calendar-event"></i> Event Calendar
          </h2>
          <p className="calendar-subtitle">View and manage all school events and activities</p>
        </div>

        {/* Category Filters */}
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
        </div>

        {/* Calendar */}
        <div className="calendar-wrapper">
          <Calendar
            localizer={localizer}
            events={filteredEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
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

      {/* Event Detail Modal */}
      {showModal && selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="bi bi-x-lg"></i>
            </button>
            
            <div className="modal-header">
              <span className={`modal-category-badge ${selectedEvent.category}`}>
                {selectedEvent.category.toUpperCase()}
              </span>
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
                <i className="bi bi-info-circle"></i>
                <div>
                  <strong>Description:</strong>
                  <p>{selectedEvent.description}</p>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-modal-register">
                <i className="bi bi-check-circle"></i> Register for Event
              </button>
              <button className="btn-modal-secondary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default StudentCalendar;