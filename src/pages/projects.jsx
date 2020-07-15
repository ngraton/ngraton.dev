import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

class Projects extends React.Component {
  render() {
    return (
      <Layout>
        <div className="landing-container">
          <div className="projects-container">
            <Helmet title={config.siteTitle} />
            <SEO />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Projects;