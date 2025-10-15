// src/StudentCalendar.js
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./StudentCalendar.css";
import UserNavbar from "./UserNavbar";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Math Class",
    start: new Date(2025, 8, 25, 10, 0), // Sept = month 8
    end: new Date(2025, 8, 25, 11, 0),
  },
  {
    title: "Group Meeting",
    start: new Date(2025, 8, 26, 14, 0),
    end: new Date(2025, 8, 26, 15, 0),
  },
];

function StudentCalendar() {
  return (
    <div>
      {/* Navbar */}
      <UserNavbar />

      {/* Calendar Section */}
      <div className="calendar-container">
        <h2 className="calendar-title">Student Calendar</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
        />
      </div>
    </div>
  );
}

export default StudentCalendar;
