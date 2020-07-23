import React from "react";
import { Link } from "gatsby";
import moment from "moment";


class PostListing extends React.Component {
  getPostList() {
    const { postEdges } = this.props
    const postList = [];
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        blurb: postEdge.node.frontmatter.blurb
      });
    });
    return postList;
  }

  
  render() {
    const postList = this.getPostList();
    const { showDate } = this.props
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <p className="post-list-item" key={post.title}>
            <span className="postlist-date">{showDate && `${moment(post.date).format('DD MMMM YYYY')} - `}</span>
            <Link to={post.path}>
              {post.title}
            </Link>
            {post.blurb ? ` - ${post.blurb}` : ''}
          </p>
        ))
}
      </div>
    );
  }
}

export default PostListing;
