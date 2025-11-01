import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../styles/StudentCalendar.css"; // ✅ moved CSS to /src/style
import UserNavbar from "../../components/UserNavbar"; // ✅ fixed import path
import Footer from "../../components/Footer"; // ✅ fixed import path

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
  },
  {
    id: 2,
    title: "Cultural Night",
    start: new Date(2025, 9, 30, 18, 0),
    end: new Date(2025, 9, 30, 21, 0),
    category: "cultural",
    venue: "Auditorium",
    description: "Showcase of cultural performances and talents",
  },
  {
    id: 3,
    title: "Science Fair",
    start: new Date(2025, 10, 5, 9, 0),
    end: new Date(2025, 10, 5, 16, 0),
    category: "academic",
    venue: "Science Building",
    description: "Student research and innovation exhibition",
  },
  {
    id: 4,
    title: "Basketball Tournament Finals",
    start: new Date(2025, 9, 28, 14, 0),
    end: new Date(2025, 9, 28, 17, 0),
    category: "sports",
    venue: "Gymnasium",
    description: "Championship match",
  },
  {
    id: 5,
    title: "Math Olympiad",
    start: new Date(2025, 10, 10, 10, 0),
    end: new Date(2025, 10, 10, 12, 0),
    category: "academic",
    venue: "Room 301",
    description: "Mathematics competition for all levels",
  },
  {
    id: 6,
    title: "Art Exhibition Opening",
    start: new Date(2025, 10, 15, 15, 0),
    end: new Date(2025, 10, 15, 18, 0),
    category: "cultural",
    venue: "Art Gallery",
    description: "Student artwork showcase",
  },
];

function StudentCalendar() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("month");

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

    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        opacity: 0.9,
        color: "white",
        border: "0px",
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

  return (
    <div className="student-calendar-page">
      <UserNavbar />

      <div className="calendar-container">
        <div className="calendar-header">
          <h2 className="calendar-title">
            <i className="bi bi-calendar-event"></i> Event Calendar
          </h2>
          <p className="calendar-subtitle">
            View and manage all school events and activities
          </p>
        </div>

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
            views={["month", "week", "day", "agenda"]}
            view={currentView}
            onView={handleViewChange}
            date={currentDate}
            onNavigate={handleNavigate}
            defaultView="month"
          />
        </div>
      </div>

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
                    {moment(selectedEvent.start).format("h:mm A")} -{" "}
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

   
    </div>
  );
}

export default StudentCalendar;
