// src/App.js
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Login from "./Login";

function App() {
  const [page, setPage] = useState("home"); // home | login | signup

  return (
    <>
      {page === "home" && (
        <div className="container text-center mt-5">
          <h1>Welcome to SEAMS</h1>
          <p>This is the landing page</p>

          <button className="btn btn-primary me-2" onClick={() => setPage("login")}>
            Go to Login
          </button>

          <button className="btn btn-success" onClick={() => setPage("signup")}>
            Go to Signup
          </button>
        </div>
      )}

      {page === "login" && <Login onBack={() => setPage("home")} />}
      {page === "signup" && (
        <div className="container text-center mt-5">
          <h2>Signup Page (placeholder)</h2>
          <button className="btn btn-outline-secondary" onClick={() => setPage("home")}>
            Back
          </button>
        </div>
      )}
    </>
  );
}

export default App;
