import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import About from "../components/About"
import config from "../../data/SiteConfig";

class Landing extends React.Component {
  render() {
    const { data } = this.props
    const postEdges = data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="landing-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <About />
          <div className="posts-container">
            <PostListing postEdges={postEdges} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Landing;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQuery {
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
