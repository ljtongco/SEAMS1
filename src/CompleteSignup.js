import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ add this
import { Container, Card, Form, Button, Row, Col, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CompleteSignup.css"; // ✅ Corrected import
import SeamsHeader from "./SeamsHeader"; // ✅ Header import
import bgImage from "./assets/uccbg.png";

function CompleteSignup() {
  const navigate = useNavigate(); // ✅ initialize navigation
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    extension: "",
    gender: "",
    contactNo: "",
    studentNumber: "",
    campus: "",
    course: "",
    yearSection: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please agree to the Terms and Conditions before continuing.");
      return;
    }
    console.log("Form Submitted:", formData);
    // ✅ Redirect to success page
    navigate("/SignupSuccess");
  };

   return (
    <div
      className="auth-bg"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay" />
      {/* ✅ Move SeamsHeader inside the return */}
      <div className="header-wrapper w-100">
        <SeamsHeader />
      </div>

      <Container style={{ maxWidth: "650px" }}>
        <Card className="p-4 shadow-lg rounded-4">
            {/* Stepper */}
            <div className="stepper mb-3">
              <div className="step active" />
              <div className="step active" />
              <div className="step active" />
            </div>
          <h4 className="text-center fw-bold mb-4">Complete Your Signup</h4>
          

          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col><Form.Control placeholder="First name" name="firstName" value={formData.firstName} onChange={handleChange} /></Col>
              <Col><Form.Control placeholder="Middle name" name="middleName" value={formData.middleName} onChange={handleChange} /></Col>
            </Row>

            <Row className="mb-3">
              <Col><Form.Control placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleChange} /></Col>
              <Col><Form.Control placeholder="Extension (optional)" name="extension" value={formData.extension} onChange={handleChange} /></Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Select name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Col>
              <Col md={6}><Form.Control type="tel" placeholder="+63" name="contactNo" value={formData.contactNo} onChange={handleChange} /></Col>
            </Row>

            <Row className="mb-3">
              <Col><Form.Control placeholder="Student Number" name="studentNumber" value={formData.studentNumber} onChange={handleChange} /></Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Select name="campus" value={formData.campus} onChange={handleChange}>
                  <option value="">Select Campus</option>
                  <option>Main Campus</option>
                  <option>North Campus</option>
                  <option>South Campus</option>
                </Form.Select>
              </Col>
              <Col md={6}><Form.Control placeholder="Year & Section" name="yearSection" value={formData.yearSection} onChange={handleChange} /></Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Select name="course" value={formData.course} onChange={handleChange}>
                  <option value="">Select Course</option>
                  <option>BSIT</option>
                  <option>BSBA</option>
                  <option>BSED</option>
                </Form.Select>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label={
                  <>
                    I have read and agree to the{" "}
                    <a href="#" className="text-success text-decoration-none">Terms and Conditions</a>
                  </>
                }
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" className="w-100 py-2" variant="success">
              Continue
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default CompleteSignup;

