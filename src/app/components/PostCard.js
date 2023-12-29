// PostCard.js
import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={post.coverImage.url} alt={post.title} />
      <div className="post-content">
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
      </div>
    </div>
  );
};

export default PostCard;
