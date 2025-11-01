import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SeamsHeader from "../../components/SeamsHeader";
import AuthBg from "../../components/AuthBg";

function VerifyEmail() {
  useEffect(() => {
    document.title = "Verify Email - SEAMS";
  }, []);

  const accentColor = "var(--accent-color)"; // orange accent
  const greenColor = "#388E3C";
  const darkGreen = "#2E7D32";

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

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: "100px", // spacing under header
          paddingBottom: "60px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container
          className="d-flex flex-column align-items-center justify-content-start"
          style={{ marginTop: "20px" }}
        >
          <Card
            style={{
              maxWidth: "420px",
              width: "100%",
              borderRadius: "15px",
              backgroundColor: "#fff",
              padding: "1.5rem",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            {/* Title */}
            <h4
              className="fw-bold mb-3"
              style={{
                color: "#000", // ✅ now black
                fontWeight: "600",
              }}
            >
              Verify your email
            </h4>

            {/* Stepper */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  flex: 1,
                  height: "6px",
                  backgroundColor: darkGreen,
                  borderRadius: "3px",
                }}
              />
              <div
                style={{
                  flex: 1,
                  height: "6px",
                  backgroundColor: darkGreen,
                  borderRadius: "3px",
                }}
              />
              <div
                style={{
                  flex: 1,
                  height: "6px",
                  backgroundColor: "#dcdcdc",
                  borderRadius: "3px",
                }}
              />
            </div>

            {/* Email Info */}
            <p className="mb-1" style={{ color: "#6c757d" }}>
              Link has been sent to{" "}
              <span style={{ color: accentColor }}>l******@gmail.com</span>
            </p>

            <p style={{ marginBottom: "8px" }}>
              A confirmation link has been sent to your{" "}
              <a
                href="#"
                style={{
                  color: accentColor,
                  textDecoration: "none",
                }}
              >
                email
              </a>
              .
            </p>

            <p
              style={{
                color: "#6c757d",
                fontSize: "0.9rem",
                marginBottom: "0.5rem",
              }}
            >
              Please check your inbox (and spam/junk folder). Once you click the{" "}
              <a
                href="#"
                style={{
                  color: accentColor,
                  textDecoration: "none",
                }}
              >
                link
              </a>
              , you'll be redirected to{" "}
              <span className="fw-bold">complete your signup.</span>
            </p>

            <p
              style={{
                color: "#6c757d",
                fontSize: "0.9rem",
                marginTop: "1rem",
              }}
            >
              Didn’t receive email?{" "}
              <a
                href="#"
                style={{
                  color: accentColor,
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                resend
              </a>
            </p>
          </Card>

          {/* Green button */}
          <Link
            to="/complete-signup"
            style={{
              marginTop: "20px",
              backgroundColor: greenColor,
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "10px 0",
              width: "200px",
              fontSize: "1rem",
              fontWeight: "500",
              textAlign: "center",
              textDecoration: "none",
              transition: "0.3s ease all",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = darkGreen)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = greenColor)}
          >
            Next
          </Link>
        </Container>
      </div>
    </AuthBg>
  );
}

export default VerifyEmail;
