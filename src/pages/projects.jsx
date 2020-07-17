import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const postEdges = data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="landing-container">
          <div className="projects-container">
            <Helmet title={config.siteTitle} />
            <SEO />
            <PostListing postEdges={postEdges} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Projects;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: {frontmatter: { category: { eq: "projects" } } }
      ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;