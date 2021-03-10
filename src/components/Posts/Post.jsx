import React from "react";
import ListPosts from "./ListPosts";

const Post = (props) => {
  const { posts } = props;
  return (
    <div>
      {posts.map((post) => {
        return <ListPosts key={`id-post-${post._id}`} post={post}></ListPosts>;
      })}
    </div>
  );
};

export default Post;
