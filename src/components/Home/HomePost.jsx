import React from "react";
import Post from "../Posts/Post";
import "../../css/styles.css";

const PostStatus = (posts) => {
  if (posts.length === 0) {
    return (
      <div>
        <p>No hay ninguna publicación que mostrar.</p>
      </div>
    );
  } else {
    return (
      <div>
        <h3 style={{ marginLeft: 8 }}>Publicaciones recientes</h3>
        <Post posts={posts} />
      </div>
    );
  }
};
export { PostStatus };
