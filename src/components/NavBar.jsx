import React from "react";
import { Link } from "gatsby";

function NavBar() {
  const [responsive, setResponsive] = React.useState('')
  return (
    <div className={responsive ? "navbar responsive" : "navbar"}>
      <div className="navbar-container">
        <div className="brand-container">
          <Link className="brand" to="/" key="home">
            <img className="brand-icon" src="/logos/flux_capacitor.svg" alt="flux capacitor icon" />
            <span className="brand-text">ngraton.dev</span>
            <p className="brand-tagline">...and the quest for digital craftsmanship</p>
          </Link>
        </div>
        <div className="navbar-items">
          <Link className="nav-link" to="/writing" key="writing">
            Writing
          </Link>
          <Link className="nav-link" to="/projects" key="projects">
            Projects
          </Link>
          <Link className="nav-link" to="/about" key="about">
            About
          </Link>
          <Link className="nav-link" to="/now" key="now">
            Now
          </Link>
          <button type="button" className="icon" onClick={() => setResponsive(!responsive)}>
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;