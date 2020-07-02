import React, { Component } from "react";

class UserLinks extends Component {
  getLinkElements() {
    const { config, labeled } = this.props
    const { userLinks } = config;
    return userLinks.map(link => (
      <a href={link.url} key={link.label}>
        <button type="button">
          {labeled ? link.label : ""}
        </button>
      </a>
    ));
  }

  render() {
    const { config } = this.props
    const { userLinks } = config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
