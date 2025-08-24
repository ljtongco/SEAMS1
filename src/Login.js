import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SeamsHeader from "./SeamsHeader";
import bgImage from "./assets/uccbg.png";
import "./Login.css"; // scoped login styles

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = "SEAMS - Login";
  }, []);

  return (
    <div className="auth-bg" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay" />

      {/* Header */}
      <div className="header-wrapper">
        <SeamsHeader />
      </div>

      {/* Login wrapper */}
      <div className="login-page">
        <div className="login-card card p-4">
          <h3 className="text-center mb-3">Login</h3>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div className="mb-3 position-relative">
              <label htmlFor="loginEmail" className="form-label">Email address</label>
              <input type="email" className="login-input form-control" id="loginEmail" />
            </div>

            {/* Password */}
            <div className="mb-3 position-relative">
              <label htmlFor="loginPassword" className="form-label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="login-input form-control"
                id="loginPassword"
              />
              <i
                className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"} login-password-toggle`}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                role="button"
              />
            </div>

            {/* Remember me + Forgot password */}
            <div className="remember-forgot">
              <div className="form-check">
                <input type="checkbox" className="form-check-input login-checkbox" id="rememberMe" />
                <label className="form-check-label small" htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#" className="small forgot-link">Forgot password?</a>
            </div>

            {/* Login button */}
            <button className="btn btn-primary login-btn w-100">Login</button>

            {/* OR separator */}
            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="px-1 text-secondary">OR</span>
              <hr className="flex-grow-1" />
            </div>

            {/* Google login */}
            <button type="button" className="btn btn-google login-google-btn w-100 d-flex align-items-center justify-content-center">
              <i className="bi bi-google me-2" /> Log in with Google
            </button>

            {/* Signup link */}
            <p className="text-center mt-3 mb-0">
              Don't have an account yet? <Link to="/signup" className="signup-link">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
