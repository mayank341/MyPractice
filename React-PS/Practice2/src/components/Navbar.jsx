import React, { useContext } from 'react';
import ProfileMenu from './ProfileMenu';
import { UserContext } from '../App';

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar">
      <h2 className="logo">My Dashboard</h2>

      {/* small avatar + profile menu */}
      <div className="nav-right">
        <img
          src={user.profilePic}
          alt="nav avatar"
          className="profile-pic-small"
        />
        <ProfileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
