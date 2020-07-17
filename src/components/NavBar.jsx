import React from "react";
import { Link } from "gatsby";

function NavBar() {

  return (
    <div className="navbar">
      <div className="navbar-items">
        <Link className="brand nav-link" to="/" key="home">
          <img className="brand-icon" src="/logos/flux_capacitor.svg" alt="flux capacitor icon" />
          <span className="brand-text">ngraton.dev</span>
        </Link>
        <Link className="nav-link" to="/blog" key="blog">
          Blog
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
        <button type="button" className="icon" onClick="myFunction()">
          <i className="fa fa-bars" />
        </button>
      </div>
    </div>
  )
}

export default NavBar;