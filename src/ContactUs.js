
import React,{useEffect} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";
import { GeoAltFill, EnvelopeFill, TelephoneFill, Facebook, Globe } from "react-bootstrap-icons";

function Contact() {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <UserNavbar />

      <Container className="py-5">
        
        <Row className="mt-4">
          <Col md={6}>
            <h2 className="fw-bold mb-3" style={{ color: "#2e7d32" }}>Contact Us</h2>
            <p>We'd love to hear from you. Reach us through any of the contact details below.</p>  
            <p><GeoAltFill className="text-success me-2" /> Biglang Awa Street, Cor 11th Ave Caloocan City</p>
            <p><EnvelopeFill className="text-success me-2" /> southcampusadmin@ucc-caloocan.edu.ph</p>
            <p><TelephoneFill className="text-success me-2" /> TRUNK LINE: 8528-4654 | Admin: 53106855</p>
            <p><Facebook className="text-success me-2" /> <a href="https://www.facebook.com/univofcaloocanofficial/" target="_blank" rel="noreferrer">Facebook Page</a></p>
            <p><Globe className="text-success me-2" /> <a href="https://ucc-caloocan.edu.ph/index.php" target="_blank" rel="noreferrer">Official Website</a></p>
          </Col>

          <Col md={6}>
            <div
              style={{
                backgroundColor: "white",
                padding: "23px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <Form>
                <Form.Control
                  as="textarea"
                  rows={12}
                  placeholder="Send a message..."
                />
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#2e7d32",
                    border: "none",
                    marginTop: "12px",
                    width: "50%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Contact;