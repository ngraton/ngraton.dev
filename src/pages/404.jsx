import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class FourOhFour extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <h1>Nothing to See Here</h1>
        </div>
      </Layout>
    );
  }
}

export default FourOhFour;