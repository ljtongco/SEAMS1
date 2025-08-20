import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { useState, useEffect } from "react";

import SeamsHeader from "./SeamsHeader"; // Header lives in src/
import bgImage from "./assets/uccbg.png"; // Background lives in src/assets/

function App() {
  const [showPassword, setShowPassword] = useState(false);

  // Set the browser tab title
  useEffect(() => {
    document.title = "SEAMS - Login";
  }, []);

  return (
    <div
      className="login-bg"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="overlay" />

      {/* Header */}
      <div className="header-wrapper">
        <SeamsHeader />
      </div>

      {/* Login card */}
      <div className="app-login-wrapper">
        <div className="card p-4">
          <h3 className="text-center mb-3">Login</h3>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="loginEmail" />
            </div>

            {/* Password with eye toggle */}
            <div className="mb-3 position-relative">
              <label htmlFor="loginPassword" className="form-label">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="loginPassword"
              />
              <i
                className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                role="button"
              />
            </div>

      <div className="d-flex justify-content-between align-items-center mt-2 mb-3">
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      id="rememberMe"
    />
    <label className="form-check-label small" htmlFor="rememberMe">
      Remember me
    </label>
  </div>

  <a href="#" className="small">
    Forgot password?
  </a>
</div>



            {/* Login button */}
            <button className="btn btn-primary w-100 mt-3">
  Login
</button>
    
            {/* OR separator */}
            <div className="d-flex align-items-center my-3">
  <hr className="flex-grow-1" />
  <span className="px-1 text-secondary">OR</span>  {/* smaller padding */}
  <hr className="flex-grow-1" />
</div>


            {/* Google login */}
            <button
              type="button"
              className="btn btn-google w-100 d-flex align-items-center justify-content-center"
            >
              <i className="bi bi-google me-2" />
              Log in with Google
            </button>

            {/* Sign up link */}
            <p className="text-center mt-3 mb-0">
              Don’t have an account yet? <a href="#">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
