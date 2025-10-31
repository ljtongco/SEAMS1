// src/pages/student/StudentProfile.js
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserNavbar from "../../components/UserNavbar";
import profileImg from "../../assets/jsj.jpg";
import "../../styles/Profile.css";
import moment from "moment";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Nav,
  Tab,
  Image,
  Badge,
  Modal,
} from "react-bootstrap";

const allEventsData = [
  {
    id: 1,
    title: "Annual Sports Fest 2025",
    start: new Date(2025, 9, 25, 8, 0),
    end: new Date(2025, 9, 25, 17, 0),
    category: "sports",
    venue: "Main Campus Ground",
    description: "Annual inter-department sports competition.",
  },
  {
    id: 2,
    title: "Cultural Night",
    start: new Date(2025, 9, 30, 18, 0),
    end: new Date(2025, 9, 30, 21, 0),
    category: "cultural",
    venue: "Auditorium",
    description: "Showcase of cultural performances and talents.",
  },
  {
    id: 3,
    title: "Science Fair",
    start: new Date(2025, 10, 5, 9, 0),
    end: new Date(2025, 10, 5, 16, 0),
    category: "academic",
    venue: "Science Building",
    description: "Student research and innovation exhibition.",
  },
  {
    id: 4,
    title: "Basketball Tournament Finals",
    start: new Date(2025, 9, 28, 14, 0),
    end: new Date(2025, 9, 28, 17, 0),
    category: "sports",
    venue: "Gymnasium",
    description: "Championship match between top teams.",
  },
  {
    id: 5,
    title: "Math Olympiad",
    start: new Date(2025, 10, 10, 10, 0),
    end: new Date(2025, 10, 10, 12, 0),
    category: "academic",
    venue: "Room 301",
    description: "Mathematics competition for all levels.",
  },
  {
    id: 6,
    title: "Art Exhibition Opening",
    start: new Date(2025, 10, 15, 15, 0),
    end: new Date(2025, 10, 15, 18, 0),
    category: "cultural",
    venue: "Art Gallery",
    description: "Student artwork showcase and exhibit.",
  },
];

function StudentProfile() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [pinnedEvents, setPinnedEvents] = useState([]);
  const [activeTab, setActiveTab] = useState("events");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const events = allEventsData.map((e) => ({
    ...e,
    category: e.category.charAt(0).toUpperCase() + e.category.slice(1),
  }));

  const handleShowModal = (event) => setSelectedEvent(event);

  useEffect(() => {
    document.title = "Student Profile";
  }, []);

  const getBadgeColor = (category) => {
    const key = (category || "").toString().toLowerCase();
    const colors = {
      sports: "primary",
      cultural: "warning",
      academic: "success",
    };
    return colors[key] || "secondary";
  };

  const handlePinEvent = (event) => {
    if (!pinnedEvents.find((e) => e.id === event.id)) {
      setPinnedEvents([...pinnedEvents, event]);
    }
  };

  const handleUnpinEvent = (event) => {
    setPinnedEvents(pinnedEvents.filter((e) => e.id !== event.id));
  };

  const renderEventCard = (event, isPinnedTab = false) => (
    <Card
      key={event.id}
      className={`shadow event-card border-0 ${
        pinnedEvents.some((e) => e.id === event.id) ? "border-warning border-3" : ""
      }`}
    >
      <Card.Body className="p-4 d-flex flex-column justify-content-between">
        <div>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <Badge bg={getBadgeColor(event.category)} className="text-uppercase">
              {event.category}
            </Badge>
            <small className="text-muted">
              {moment(event.start).format("MMM D, YYYY")}
            </small>
          </div>
          <Card.Title className="fw-bold fs-5">{event.title}</Card.Title>
          <Card.Text className="text-muted small mt-2 mb-1">
            <i className="bi bi-geo-alt"></i> {event.venue}
          </Card.Text>
          <Card.Text className="small text-secondary mb-3">
            {moment(event.start).format("h:mm A")} - {moment(event.end).format("h:mm A")}
          </Card.Text>
          <p className="text-muted small mb-0">{event.description}</p>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <Button
            variant="outline-success"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              handleShowModal(event);
            }}
          >
            View
          </Button>

          {isPinnedTab ? (
            <Button
              variant="outline-danger"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleUnpinEvent(event);
              }}
            >
              <i className="bi bi-x-circle"></i> Unpin
            </Button>
          ) : pinnedEvents.some((e) => e.id === event.id) ? (
            <Button
              variant="outline-danger"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleUnpinEvent(event);
              }}
            >
              <i className="bi bi-x-circle"></i> Unpin
            </Button>
          ) : (
            <Button
              variant="outline-primary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handlePinEvent(event);
              }}
            >
              <i className="bi bi-pin-angle"></i> Pin
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <div>
      <UserNavbar />
      <Container fluid className="p-4 profile-page">
        <Row className="gy-4 justify-content-center">
          {/* LEFT SIDE */}
          <Col xs={12} md={4}>
            <Card className="shadow-sm p-4 text-center h-100">
              <div className="d-flex justify-content-end">
                <Button variant="outline-warning" size="sm">
                  ✏️ Change
                </Button>
              </div>
              <Image
                src={profileImg}
                roundedCircle
                className="mx-auto my-3 profile-image"
                alt="Profile"
              />
              <div className="d-flex align-items-center justify-content-center gap-2">
                <h4 className="fw-bold mb-0">Jerson J.</h4>
                <span className="badge bg-primary">HE/HIM</span>
              </div>
              <p className="text-muted mb-3">STUDENT</p>
              <hr />
              <div className="text-start">
                <p><strong>Campus:</strong> Main Campus</p>
                <p><strong>Student No.:</strong> 20220500</p>
                <p><strong>Course:</strong><br />BSIS - Bachelor of Science in Information System</p>
                <hr />
                <p><strong>Birthday:</strong> Oct. 05, 2002</p>
                <p><strong>Contact #:</strong> 09984149561</p>
                <p><strong>E-mail:</strong><br />jerson5javier@gmail.com</p>
              </div>
            </Card>
          </Col>

          {/* RIGHT SIDE - EVENTS */}
          <Col xs={12} md={8} className="profile-right">
            <Card className="shadow-sm text-center h-100 profile-right-card">
              <Tab.Container defaultActiveKey="events" onSelect={(k) => setActiveTab(k)}>
                <Card.Header className="p-0">
                  <Nav variant="tabs" className="justify-content-center flex-wrap custom-tabs">
                    <Nav.Item><Nav.Link eventKey="events">Events</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="pinned">Pinned</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="visited">Visited</Nav.Link></Nav.Item>
                  </Nav>
                </Card.Header>

                <Card.Body>
                  <Tab.Content>
                    {/* EVENTS TAB */}
                    <Tab.Pane eventKey="events">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="m-0">Upcoming Events</h4>
                        <select
                          className="form-select"
                          style={{ width: "180px" }}
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                          <option value="All">All Categories</option>
                          <option value="Academic">Academic</option>
                          <option value="Sports">Sports</option>
                          <option value="Cultural">Cultural</option>
                        </select>
                      </div>

                      <div className="event-grid">
                        {events
                          .filter(
                            (event) =>
                              selectedCategory === "All" ||
                              event.category === selectedCategory
                          )
                          .map((event) => renderEventCard(event))}
                      </div>
                    </Tab.Pane>

                    {/* PINNED TAB */}
                    <Tab.Pane eventKey="pinned">
                      {pinnedEvents.length > 0 ? (
                        <div className="event-grid">
                          {pinnedEvents.map((event) => renderEventCard(event, true))}
                        </div>
                      ) : (
                        <p className="text-muted mt-3">No pinned events yet.</p>
                      )}
                    </Tab.Pane>

                    {/* VISITED TAB */}
                    <Tab.Pane eventKey="visited">
                      <p className="text-muted mt-3">
                        You haven’t attended any events yet.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Tab.Container>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* MODAL */}
      <Modal show={!!selectedEvent} onHide={() => setSelectedEvent(null)} centered size="lg">
        {selectedEvent && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                {selectedEvent.title}{" "}
                <Badge bg="secondary" className="ms-2 text-uppercase">
                  {selectedEvent.category}
                </Badge>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p><i className="bi bi-calendar3"></i> <strong>Date:</strong> {moment(selectedEvent.start).format("MMMM D, YYYY")}</p>
              <p><i className="bi bi-clock"></i> <strong>Time:</strong> {moment(selectedEvent.start).format("h:mm A")} - {moment(selectedEvent.end).format("h:mm A")}</p>
              <p><i className="bi bi-geo-alt"></i> <strong>Venue:</strong> {selectedEvent.venue}</p>
              <p><i className="bi bi-info-circle"></i> <strong>Description:</strong> {selectedEvent.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success"><i className="bi bi-check-circle"></i> Register for Event</Button>
              <Button variant="secondary" onClick={() => setSelectedEvent(null)}>Close</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}

export default StudentProfile;
