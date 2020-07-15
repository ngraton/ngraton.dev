import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <h1>About Me</h1>
          <p>I&apos;m Nic</p>
          <h1>About this website</h1>
          <h4>
            Based on
            {" "}
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </a>
            .
          </h4>
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
