// src/pages/auth/ForgotPassword.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SeamsHeader from "../../components/SeamsHeader";
import AuthBg from "../../components/AuthBg";
import "../../index.css"; // ✅ import global button styles

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "SEAMS - Forgot Password";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Please enter your registered email address.");
      return;
    }

    setLoading(true);

    // Simulate backend call
    setTimeout(() => {
      setLoading(false);
      setMessage(
        "If an account with that email exists, a reset link has been sent."
      );
    }, 1500);
  };

  return (
    <AuthBg>
      <div className="header-wrapper">
        <SeamsHeader />
      </div>

      <div className="login-page">
        <div className="login-card card p-4">
          <h3 className="text-center mb-3">Forgot Password</h3>
          <p className="text-center text-muted mb-4">
            Enter your email address and we’ll send you a link to reset your password.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-danger small">{error}</p>}
            {message && <p className="text-success small">{message}</p>}

            {/* ✅ Green Button */}
            <button
              type="submit"
              className="btn-green w-100"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>

            <p className="text-center mt-3 mb-0">
              <Link to="/login" className="small text-decoration-none">
                Back to Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </AuthBg>
  );
}

export default ForgotPassword;
