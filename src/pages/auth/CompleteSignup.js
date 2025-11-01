import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SeamsHeader from "../../components/SeamsHeader";
import AuthBg from "../../components/AuthBg";
import TermsAndConditions from "../../components/TermsAndConditions"; // ✅ separate modal

function CompleteSignup() {
  const navigate = useNavigate();
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

  const [showTerms, setShowTerms] = useState(false);

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
    navigate("/SignupSuccess");
  };

  useEffect(() => {
    document.title = "Complete Signup - SEAMS";
  }, []);

  return (
    <AuthBg>
      <div className="header-wrapper w-100">
        <SeamsHeader />
      </div>

      {/* Ensures spacing under header */}
      <Container
        style={{
          paddingTop: "140px", // ✅ enough gap below header
          paddingBottom: "60px",
          maxWidth: "700px",
        }}
      >
        <Card className="p-4 shadow-lg rounded-4">
          {/* Stepper */}
          <div className="stepper mb-3">
            <div className="step active" />
            <div className="step active" />
            <div className="step active" />
          </div>

          {/* Black heading */}
          <h4 className="text-center fw-bold mb-4" style={{ color: "#000" }}>
            Complete Your Signup
          </h4>

          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <Form.Control
                  placeholder="First name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Middle name"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Control
                  placeholder="Last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Extension (optional)"
                  name="extension"
                  value={formData.extension}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Col>
              <Col md={6}>
                <Form.Control
                  type="tel"
                  placeholder="+63"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Control
                  placeholder="Student Number"
                  name="studentNumber"
                  value={formData.studentNumber}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Select
                  name="campus"
                  value={formData.campus}
                  onChange={handleChange}
                >
                  <option value="">Select Campus</option>
                  <option>Main Campus</option>
                  <option>North Campus</option>
                  <option>South Campus</option>
                </Form.Select>
              </Col>
              <Col md={6}>
                <Form.Control
                  placeholder="Year & Section"
                  name="yearSection"
                  value={formData.yearSection}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="">Select Course</option>
                  <option>BSIT</option>
                  <option>BSBA</option>
                  <option>BSED</option>
                </Form.Select>
              </Col>
            </Row>

            {/* Terms Agreement */}
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label={
                  <>
                    I have read and agree to the{" "}
                    <span
                      style={{
                        color: "var(--accent-color)",
                        cursor: "pointer",
                        fontWeight: 500,
                      }}
                      onClick={() => setShowTerms(true)}
                    >
                      Terms and Conditions
                    </span>
                  </>
                }
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
            </Form.Group>

            <button type="submit" className="green-btn w-100 py-2">
              Continue
            </button>
          </Form>
        </Card>
      </Container>

      {/* Separate Modal Component */}
      <TermsAndConditions
        show={showTerms}
        handleClose={() => setShowTerms(false)}
        formData={formData}
        setFormData={setFormData}
      />
    </AuthBg>
  );
}

export default CompleteSignup;
