// src/App.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// Auth pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import SignupStudent from "./pages/auth/SignupStudent";
import CompleteSignup from "./pages/auth/CompleteSignup";
import VerifyEmail from "./pages/auth/VerifyEmail";
import SignupSuccess from "./pages/auth/SignupSuccess";

// Public pages
import About from "./pages/public/About";
import Contact from "./pages/public/Contact"; // ✅ added contact page

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCalendar from "./pages/admin/AdminCalendar";
import AdminCreateEvent from "./pages/admin/AdminCreateEvent";

// Student pages
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentCalendar from "./pages/student/StudentCalendar";
import Profile from "./pages/common/Profile";

// Components
import Footer from "./components/Footer";

function Home() {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to SEAMS</h1>
      <p>This is a temporary landing page</p>

      <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
        <LinkContainer to="/login">
          <Button variant="primary">Login</Button>
        </LinkContainer>

        <LinkContainer to="/signup">
          <Button variant="success">Sign Up</Button>
        </LinkContainer>

        {/* Admin access button */}
        <LinkContainer to="/admin-dashboard">
          <Button variant="warning">Admin</Button>
        </LinkContainer>

        {/* Student access button */}
        <LinkContainer to="/student-dashboard">
          <Button variant="info">Student</Button>
        </LinkContainer>
      </div>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* ✅ Added route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />

        {/* Auth flow */}
        <Route path="/signup-student" element={<SignupStudent />} />
        <Route path="/complete-signup" element={<CompleteSignup />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/signupsuccess" element={<SignupSuccess />} />

        {/* Admin */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-calendar" element={<AdminCalendar />} />
        <Route path="/admin-create-event" element={<AdminCreateEvent />} />

        {/* Student */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-calendar" element={<StudentCalendar />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
