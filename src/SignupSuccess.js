import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SeamsHeader from "./SeamsHeader";
import bgImage from "./assets/uccbg.png";



function SignupSuccess() {
  return (
    <div
      className="auth-bg"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay" />
        {/* Header */}
      <div className="header-wrapper">
        <SeamsHeader />
      </div>

      <Container style={{ maxWidth: "550px"}} className="d-flex justify-content-center align-items-center">
        <Card className="p-4 shadow-lg rounded-4 text-center mt-5" style={{ width: '100%' }}>
  
          <h3 className="fw-bold text-success mb-2">Sign Up Successful!</h3>
          <p className="text-muted mb-4">
            Your account has been successfully created.
          </p>

          <Link to="/Login" className="btn btn-success w-100">
            Go to Login
          </Link>
        </Card>
      </Container>
    </div>
  );
}

export default SignupSuccess;
