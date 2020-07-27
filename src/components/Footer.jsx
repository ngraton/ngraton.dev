import React, { Component } from "react";
import { Link } from "gatsby";

class Footer extends Component {

  getLinkElements() {
    const { config } = this.props
    const { userLinks } = config;
    return userLinks.map(link => (
      <Link to={link.url} key={link.label}>
        {link.label}
      </Link>
    ));
  }

  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright } = config;
    


    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <div className="notice-container">
          <Link to={url}>
            Subscribe
          </Link>
          {this.getLinkElements()}
          <h5 className="copyright">{copyright}</h5>
        </div>
      </footer>
    );
  }
}

export default Footer;
