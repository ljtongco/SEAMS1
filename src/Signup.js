import { useEffect } from "react";
import { Link } from "react-router-dom";
import SeamsHeader from "./SeamsHeader";
import bgImage from "./assets/uccbg.png";
import "./Signup.css";

function Signup() {
  useEffect(() => {
    document.title = "SEAMS - Sign Up";
  }, []);

  return (
    <div className="auth-bg" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay" />

      {/* Header */}
      <div className="header-wrapper">
        <SeamsHeader />
      </div>

      {/* Signup content */}
      <div className="signup-page">
        <div className="signup-card card p-4">
          <h3 className="signup-heading text-center mb-4">Signup as</h3>

          <Link to="/signup-student" className="btn btn-primary w-100 mb-3 py-3">
            Student
          </Link>

          <Link to="/signup-faculty" className="btn btn-primary w-100 py-3">
            Faculty/Staff
          </Link>
        </div>

        <p className="signup-bottom-text">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
