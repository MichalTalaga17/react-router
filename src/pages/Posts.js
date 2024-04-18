import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Posts.css'; // Importowanie pliku CSS

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="posts-container">
      <h1 className="posts-title">Posts</h1>
      <ul className="post-list">
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
