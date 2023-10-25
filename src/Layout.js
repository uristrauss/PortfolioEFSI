import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            CATALOGO
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Creaciones" className="nav-link">
                  Creaciones
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Favoritos" className="nav-link">
                  Favoritos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Info" className="nav-link">
                  Info
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container mt-4">{children}</main>
    </div>
  );
}

export default Layout;