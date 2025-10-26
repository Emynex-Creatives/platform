import react from "react"
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
        <div className="container">
          <div className="d-flex order-0 order-lg-1" style={{ width: "48px" }}></div>
          <div className="collapse navbar-collapse order-2" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-2 px-lg-3">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item px-2 px-lg-3">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item px-2 px-lg-3">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler order-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    );
}