import React, { useContext } from 'react';
import UserInfo from './UserInfo';
import { UserContext } from '../App';

const ProfileMenu = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-menu">
      {/* you can show a tiny name / caret etc */}
      <span className="username-short">{user.username}</span>

      {/* deeper component consumes same context */}
      <UserInfo />
    </div>
  );
};

export default ProfileMenu;
