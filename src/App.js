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
import StudentDashboard from "./StudentDashboard";
import StudentCalendar from "./StudentCalendar";
import About from "./AboutUs";
import Contact from "./ContactUs";
import Footer from "./Footer";
import VerifyEmail from "./VerifyEmail";
import SignupSuccess from "./SignupSuccess";
import CompleteSignup from "./CompleteSignup";
import StudentProfile from "./StudentProfile";
import AdminDashboard from "./AdminDashboard";
import AdminCalendar from "./AdminCalendar"; // ✅ Add this import

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

      <LinkContainer to="/student-dashboard">
        <Button variant="info" className="me-2">
          Go to Student Dashboard
        </Button>
      </LinkContainer>

      <LinkContainer to="/admin-dashboard">
        <Button variant="warning">
          Go to Admin Dashboard
        </Button>
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
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/CompleteSignup" element={<CompleteSignup />} />
        <Route path="/SignupSuccess" element={<SignupSuccess />} />
        <Route path="/profile" element={<StudentProfile />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-calendar" element={<AdminCalendar />} /> {/* ✅ Add this route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;