import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import _ from "lodash";
import Layout from "../layout";
import PostTags from "../components/PostTags";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import config from "../../data/SiteConfig";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const logEdges = data.projectLogs.edges
    const postNode = data.projectPost;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    // var linkList = []
    // for var key in Object()

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <h1 className={`${_.kebabCase(post.title)}-title`}>{post.title}</h1>
          <div className="project-container">
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} className="project-post" />
            <div className="sidebar">
              <div className="project-log-container">
                <h2>Project Logs</h2>
                <PostListing postEdges={logEdges} showDate />
              </div>
              <PostTags tags={post.tags} />
            </div>
          </div>
          <Footer config={config} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
query ProjectPage($logtag: String, $slug: String!) {
  projectLogs: allMarkdownRemark(
    limit: 1000
    sort: { fields: [fields___date], order: DESC }
    filter: { frontmatter: { project: { eq: $logtag } } }
  ) {
    totalCount
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
  projectPost: markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    timeToRead
    excerpt
    frontmatter {
      title
      cover
      date
      tags
      blurb
      category
    }
    fields {
      slug
      date
    }
  }
}
`;
