// src/pages/auth/Signup.js
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SeamsHeader from "../../components/SeamsHeader";
import AuthBg from "../../components/AuthBg";
import "../../styles/Signup.css";

function Signup() {
  useEffect(() => {
    document.title = "SEAMS - Sign Up";
  }, []);

  return (
    <AuthBg>
      <div className="header-wrapper">
        <SeamsHeader />
      </div>

      <div className="signup-page">
        <div className="signup-card card p-4">
          <h3 className="signup-heading text-center mb-4">Sign up as</h3>

          <Link to="/signup-student" className="green-btn w-100 mb-3 py-3">
            Student
          </Link>

          <Link to="/signup-faculty" className="green-btn w-100 py-3">
            Faculty / Staff
          </Link>
        </div>

        <p className="signup-bottom-text text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Log in
          </Link>
        </p>
      </div>
    </AuthBg>
  );
}

export default Signup;
