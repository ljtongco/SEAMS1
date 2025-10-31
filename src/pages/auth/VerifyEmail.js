import React from "react";
import { Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/VerifyEmail.css";
import SeamsHeader from "../../components/SeamsHeader";
import AuthBg from "../../components/AuthBg"; // ✅ use shared background
import { Link } from "react-router-dom";

function VerifyEmail() {
  return (
    <AuthBg> {/* ✅ wraps the content in the background component */}
      <div className="verify-email-container d-flex flex-column align-items-center justify-content-center vh-100">
        {/* Header */}
        <SeamsHeader />

        <Container className="d-flex flex-column align-items-center">
          <Card className="verify-card p-4 text-center shadow-lg">
            <h4 className="fw-bold mb-3">Verify your email</h4>

            {/* Stepper */}
            <div className="stepper mb-3">
              <div className="step active" />
              <div className="step active" />
              <div className="step" />
            </div>

            {/* Email Info */}
            <p className="text-muted mb-1">
              Link has been sent to <span className="text-orange">l******@gmail.com</span>
            </p>
            <p>
              A confirmation link has been sent to your{" "}
              <a href="#" className="text-orange text-decoration-none">
                email
              </a>.
            </p>
            <p className="text-secondary small">
              Please check your inbox (and spam/junk folder). Once you click the{" "}
              <a href="#" className="text-orange text-decoration-none">
                link
              </a>
              , you'll be redirected to{" "}
              <span className="fw-bold">complete your signup.</span>
            </p>

            <p className="text-muted small mt-4">
              Didn’t receive email?{" "}
              <a href="#" className="text-orange text-decoration-none fw-bold">
                resend
              </a>
            </p>
          </Card>

          {/* Next button */}
          <Link to="/complete-signup" className="btn btn-primary w-25 mt-3">
            Next
          </Link>
        </Container>
      </div>
    </AuthBg>
  );
}

export default VerifyEmail;
