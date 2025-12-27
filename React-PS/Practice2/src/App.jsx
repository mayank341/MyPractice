import React, { createContext, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

// create context with a safe default
export const UserContext = createContext({
  user: {
    username: 'Guest',
    email: '',
    profilePic: 'https://i.pravatar.cc/150?img=1'
  },
  setUser: () => {}
});

const App = () => {
  const [user, setUser] = useState({
    username: 'Mayank',
    email: 'mayank@example.com',
    profilePic: 'https://i.pravatar.cc/150?img=3'
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="app">
        <Navbar />
      </div>
    </UserContext.Provider>
  );
};

export default App;
