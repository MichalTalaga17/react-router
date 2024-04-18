import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.css'; // Importowanie pliku CSS

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="users-container">
      <h1 className="users-title">Users</h1>
      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className="user-item" onClick={() => handleUserClick(user)}>
            <h3 className="user-name">{user.name}</h3>
          </div>
        ))}
      </div>
      {selectedUser && (
        <div className="user-details">
          <h2 className="selected-user-name">{selectedUser.name}</h2>
          <p className="selected-user-email">Email: {selectedUser.email}</p>
          <p className="selected-user-phone">Phone: {selectedUser.phone}</p>
          <p className="selected-user-address">Address: {selectedUser.address.street}, {selectedUser.address.city}, {selectedUser.address.zipcode}</p>
          <p className="selected-user-company">Company: {selectedUser.company.name}</p>
        </div>
      )}
    </div>
  );
};

export default Users;
