import React from "react";
import PostListing from "./PostListing";

function HighFive ({ postEdges, title }) {
  return (
    <div className="top-five">
      <h2 className="top-five-title">
        {title}
      </h2>
      <PostListing postEdges={postEdges} />
    </div>
  )
}

export default HighFive;