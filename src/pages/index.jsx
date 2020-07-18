import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import HighFive from "../components/HighFive";
import SEO from "../components/SEO";
import About from "../components/About"
import config from "../../data/SiteConfig";

class Home extends React.Component {
  render() {
    const { data } = this.props
    const { projects, blogs, featuredPosts, featuredProjects } = data

    return (
      <Layout>
        <div className="landing-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <About />
          <div className="featured-container">
            <HighFive postEdges={featuredPosts.edges} title="Featured Posts" />
            <HighFive postEdges={featuredProjects.edges} title="Featured Projects" />
            <HighFive postEdges={blogs.edges} title="Recent Posts" />
            <HighFive postEdges={projects.edges} title="Recent Projects" />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQuery {
    projects: allMarkdownRemark(
      limit: 2
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
    blogs: allMarkdownRemark(
      limit: 2
      sort: { fields: [fields___date], order: DESC }
      filter: {frontmatter: { category: { eq: "blog" } } }
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
    featuredPosts: allMarkdownRemark(
      limit: 1
      sort: { fields: [fields___date], order: DESC }
      filter: {frontmatter: { tags: { eq: "featured" }, category: { eq: "blog" } } }
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
    featuredProjects: allMarkdownRemark(
      limit: 1
      sort: { fields: [fields___date], order: DESC }
      filter: {frontmatter: { tags: { eq: "featured" }, category: { eq: "blog" } } }
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
