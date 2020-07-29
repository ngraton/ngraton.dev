import React from "react";
import { Link } from "gatsby";

function NavBar() {
  const [responsive, setResponsive] = React.useState(false)

  return (
    <div className={responsive ? "navbar responsive" : "navbar"}>
      <div className="navbar-container">
        <div className="brand-container">
          <Link className="brand" to="/" key="home">
            <img className="brand-icon" src="/logos/logo.svg" alt="ngraton.com logo" />
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