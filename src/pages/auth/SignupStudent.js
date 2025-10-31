import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SeamsHeader from "../../components/SeamsHeader";
import AuthBg from "../../components/AuthBg"; // ✅ imported AuthBg
import "../../styles/SignupStudent.css"; // signup css

function SignupStudent() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // step 2 = verify email

  useEffect(() => {
    document.title = "SEAMS - Signup";
  }, []);

  return (
    <AuthBg>
      {/* Header */}
      <div className="header-wrapper">
        <SeamsHeader />
      </div>

      {/* Signup card */}
      <div className="app-signup-wrapper">
        <div className="card p-4">
          {/* Stepper */}
          <div className="signup-stepper mb-4">
            <div className={`step ${currentStep >= 1 ? "active" : ""}`}></div>
            <div className={`step ${currentStep >= 2 ? "active" : ""}`}></div>
            <div className={`step ${currentStep >= 3 ? "active" : ""}`}></div>
          </div>
          <h3 className="text-center mb-3">Signup</h3>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="signupEmail" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="signupEmail" />
            </div>

            {/* Password */}
            <div className="mb-3 position-relative">
              <label htmlFor="signupPassword" className="form-label">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="signupPassword"
              />
              <i
                className={`bi ${
                  showPassword ? "bi-eye" : "bi-eye-slash"
                } password-toggle`}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                role="button"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-3 position-relative">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                id="confirmPassword"
              />
              <i
                className={`bi ${
                  showConfirmPassword ? "bi-eye" : "bi-eye-slash"
                } password-toggle`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
                role="button"
              />
            </div>

            {/* Signup button */}
            <Link to="/verifyemail" className="btn btn-primary w-100 mt-3">
              Signup
            </Link>

            {/* OR separator */}
            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="px-1 text-secondary">OR</span>
              <hr className="flex-grow-1" />
            </div>

            {/* Google signup */}
            <button
              type="button"
              className="btn btn-google w-100 d-flex align-items-center justify-content-center"
            >
              <i className="bi bi-google me-2" />
              Sign up with Google
            </button>

            {/* Login link */}
            <p className="text-center mt-3 mb-0">
              Already have an account?{" "}
              <Link to="/login" className="login-link">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </AuthBg>
  );
}

export default SignupStudent;
