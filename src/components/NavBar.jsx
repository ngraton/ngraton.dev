import React from "react";
import { Link } from "gatsby";

function NavBar() {


  return (
    <div className="navbar">
      <Link to="/blog" key="blog">
        <h1>Blog</h1>
      </Link>
      <Link to="/projects" key="projects">
        <h1>Projects</h1>
      </Link>
      <Link to="/about" key="about">
        <h1>About</h1>
      </Link>
      <Link to="/now" key="now">
        <h1>Now</h1>
      </Link>
    </div>
  )
}

export default NavBar;