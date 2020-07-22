import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
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

    console.log(pageContext.logtag)

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <h3>Project Logs</h3>
            <PostListing postEdges={logEdges} />
            <div className="post-meta">
              <PostTags tags={post.tags} />
            </div>
            <Footer config={config} />
          </div>
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
