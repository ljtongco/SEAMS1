import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SeamsHeader from "../../components/SeamsHeader";
import AuthBg from "../../components/AuthBg";

function SignupSuccess() {
  useEffect(() => {
    document.title = "Sign Up Success - SEAMS";
  }, []);

  const containerStyle = {
    position: "relative",
    zIndex: 2,
    paddingTop: "120px", // ✅ Prevent overlap with header
    paddingBottom: "40px",
    minHeight: "100vh",
  };

  const accentColor = "var(--accent-color)"; // ✅ uses your global accent color
  const greenColor = "#388E3C"; // ✅ solid green for button

  return (
    <AuthBg>
      {/* Header */}
      <div
        className="header-wrapper"
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          zIndex: 3,
        }}
      >
        <SeamsHeader />
      </div>

      {/* Card container */}
      <Container
        style={containerStyle}
        className="d-flex justify-content-center align-items-center"
      >
        <Card
          className="p-4 shadow-lg rounded-4 text-center w-100"
          style={{ maxWidth: "550px" }}
        >
          <h3
            className="fw-bold mb-2"
            style={{
              color: accentColor, // ✅ accent color used here
            }}
          >
            Sign Up Successful!
          </h3>

          <p className="text-muted mb-4">
            Your account has been successfully created.
          </p>

          <Link
            to="/login"
            className="w-100 py-2"
            style={{
              backgroundColor: greenColor,
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "1.05rem",
              fontWeight: "500",
              textAlign: "center",
              textDecoration: "none",
              transition: "0.3s ease all",
              display: "block",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#2E7D32")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = greenColor)}
          >
            Go to Login
          </Link>
        </Card>
      </Container>
    </AuthBg>
  );
}

export default SignupSuccess;
