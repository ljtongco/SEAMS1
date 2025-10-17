
import React, {useEffect} from "react";
import { Container, Button, Image } from "react-bootstrap";
import UserNavbar from "./UserNavbar";

function About() {
  useEffect(() => {
    document.title = "About SEAMS";
  }, []);

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <UserNavbar />

      <main className="py-5 text-center container">
        <h1 className="fw-bold">
          About <span className="text-success">SEAMS</span>
        </h1>
        <p className="mt-3 mx-auto" style={{ maxWidth: "800px" }}>
          The School Event and Activity Management System (SEAMS) is a web-based platform 
          designed to streamline the planning and organization of school events. It helps 
          clubs, organizations, faculty, and students collaborate efficiently through 
          features like event scheduling, announcements, registration, and attendance 
          tracking.
        </p>
      </main>

      <Container className="text-center">
        <Image
          src="/images/bsis.jpg" 
          style={{ width: 450, height: "auto" }}
          fluid
          rounded
          className="shadow mb-4"
          alt="Students attending a school event" // more descriptive alt
        />
      </Container>

      <Container className="text-center">
        <p className="mt-4 mx-auto" style={{ maxWidth: "800px" }}>
          SEAMS is committed to promoting school engagement, teamwork, and productivity by 
          providing a modern solution for managing academic programs, seminars, workshops, and 
          extracurricular activities. With SEAMS, event coordination becomes faster, easier, 
          and more organized.
        </p>
         <Button as="a" href="/contact" variant="success" size="lg" className="mt-3">
          Contact Us
        </Button>
      </Container>
    </div>
  );
}

export default About;