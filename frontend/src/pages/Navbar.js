import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const isLoggedIn = localStorage.getItem("token");

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg px-4">

      <Link className="navbar-brand" to="/">🛒 MyStore</Link>

      <div className="ms-auto d-flex gap-3">

        <Link className="btn btn-outline-light" to="/">Home</Link>
        <Link className="btn btn-outline-light" to="/cart">Cart</Link>

        {isLoggedIn && (
          <>
            <Link className="btn btn-outline-light" to="/orders">Orders</Link>
          </>
        )}

        {!isLoggedIn ? (
          <>
            <Link className="btn btn-warning" to="/login">Login</Link>
            <Link className="btn btn-success" to="/register">Register</Link>
          </>
        ) : (
          <button 
            className="btn btn-danger"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            Logout
          </button>
        )}

      </div>
    </nav>
  );
}

export default Navbar;