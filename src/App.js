// src/App.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Login from "./Login";
import Signup from "./Signup";
import SignupStudent from "./SignupStudent";
import StudentDashboard from "./StudentDashboard"; // ✅ import dashboard
import StudentCalendar from "./StudentCalendar";
import About from "./AboutUs"; // ✅ import AboutUs
import Contact from "./ContactUs"; // ✅ import ContactUs
import Footer from "./Footer";
// Home component
function Home() {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to SEAMS</h1>
      <p>This is the landing page</p>

      <LinkContainer to="/login">
        <Button variant="primary" className="me-2">
          Go to Login
        </Button>
      </LinkContainer>

      <LinkContainer to="/signup">
        <Button variant="success" className="me-2">
          Go to Signup
        </Button>
      </LinkContainer>

      {/* ✅ New button to navigate to dashboard */}
      <LinkContainer to="/student-dashboard">
        <Button variant="info">Go to Student Dashboard</Button>
      </LinkContainer>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-student" element={<SignupStudent />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-calendar" element={<StudentCalendar />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
  
  <Footer />;
}
export default App;
