import React from "react";
import PostListing from "./PostListing";

function HighFive ({ postEdges, title }) {
  return (
    <div className="top-five">
      <h1 className="top-five-title">
        {title}
      </h1>
      <PostListing postEdges={postEdges} />
    </div>
  )
}

export default HighFive;