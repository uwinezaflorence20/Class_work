// ProfileCard.js
import React from 'react';

const ProfileCard = ({ name, age, email }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '200px' }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
    
  );
};

export default ProfileCard;
