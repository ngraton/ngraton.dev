import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "./UserLinks";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <UserLinks config={config} labeled />
        <div className="notice-container">
          <Link to={url}>
            <button type="button">Subscribe</button>
          </Link>
          <h4>{copyright}</h4>
        </div>
      </footer>
    );
  }
}

export default Footer;
