import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'; // Importowanie pliku CSS

const Home = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setComments(response.data.slice(0, 20)); // Ograniczenie do 20 komentarzy
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Comments</h1>
      <ul className="comment-list">
        {comments.map(comment => (
          <li key={comment.id} className="comment-item">
            <h3 className="comment-title">{comment.name}</h3>
            <p className="comment-email">{comment.email}</p>
            <p className="comment-body">{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
