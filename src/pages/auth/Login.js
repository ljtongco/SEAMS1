// src/pages/auth/Login.js
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SeamsHeader from "../../components/SeamsHeader";
import AuthBg from "../../components/AuthBg";
import "../../styles/Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "SEAMS - Login";
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    setLoading(true);
    try {
      // Update this URL to match your backend endpoint
      const res = await axios.post("http://localhost/backend/api/login.php", {
        email,
        password,
      });

      // expected response format:
      // { success: true, role: 'admin' } or { success: false, message: '...' }
      if (res?.data?.success) {
        const role = res.data.role || "student";
        localStorage.setItem("userRole", role);

        if (role === "admin") navigate("/admin-dashboard");
        else if (role === "student") navigate("/student-dashboard");
        else if (role === "faculty") navigate("/faculty-dashboard");
        else navigate("/");
      } else {
        setError(res?.data?.message || "Invalid credentials.");
      }
    } catch (err) {
      console.error(err);
      // friendly message
      setError(
        err?.response?.data?.message ||
          "Unable to reach server. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthBg>
      <div className="header-wrapper">
        <SeamsHeader />
      </div>

      <div className="login-page">
        <div className="login-card card p-4">
          <h3 className="text-center mb-3">Login</h3>

          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="mb-3 position-relative">
              <label htmlFor="loginEmail" className="form-label">
                Email address
              </label>
              <input
                id="loginEmail"
                type="email"
                className="login-input form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="username"
              />
            </div>

            {/* Password */}
            <div className="mb-3 position-relative">
              <label htmlFor="loginPassword" className="form-label">
                Password
              </label>
              <input
                id="loginPassword"
                type={showPassword ? "text" : "password"}
                className="login-input form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                title={showPassword ? "Hide password" : "Show password"}
              >
                <i className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`} />
              </button>
            </div>

            {/* Remember + Forgot */}
            <div className="remember-forgot">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input login-checkbox"
                  id="rememberMe"
                />
                <label className="form-check-label small" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="small forgot-link">
                Forgot password?
              </Link>
            </div>

            {error && <p className="text-danger small mb-2">{error}</p>}

              <button
              className="btn-green w-100"
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Login"}
            </button>


            {/* OR */}
            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="px-1 text-secondary">OR</span>
              <hr className="flex-grow-1" />
            </div>

            <button
              type="button"
              className="btn login-google-btn w-100 d-flex align-items-center justify-content-center"
            >
              <i className="bi bi-google me-2" /> Log in with Google
            </button>

            <p className="text-center mt-3 mb-0">
              Don't have an account yet?{" "}
              <Link to="/signup" className="signup-link">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </AuthBg>
  );
}

export default Login;
