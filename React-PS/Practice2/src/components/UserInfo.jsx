import React, { useContext } from 'react';
import { UserContext } from '../App';

const UserInfo = () => {
  const { user, setUser } = useContext(UserContext);

  // Example: quick edit to show updating via context
  const changeName = () => {
    setUser(prev => ({ ...prev, username: prev.username === 'Mayank' ? 'Mayank Kumar' : 'Mayank' }));
  };

  return (
    <div className="user-info-box">
      <img src={user.profilePic} alt="profile" className="profile-pic-small" />
      <h3>{user.username}</h3>
      <p>{user.email}</p>

      <div style={{ marginTop: '0.5rem' }}>
        <button className="edit-btn" onClick={changeName}>Toggle Short Name</button>
      </div>
    </div>
  );
};

export default UserInfo;
