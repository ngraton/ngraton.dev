import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        <h2>Tags</h2>
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
              className={`${_.kebabCase(tag)}-tag`}
            >
              <button type="button" className="tag-button">{tag}</button>
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
