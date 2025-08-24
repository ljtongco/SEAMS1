// src/App.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Login from "./Login";
import Signup from "./Signup";
import SignupStudent from "./SignupStudent";

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
        <Button variant="success">
          Go to Signup
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
      </Routes>
    </Router>
  );
}

export default App;