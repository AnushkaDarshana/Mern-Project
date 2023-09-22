import React, { useContext } from 'react';
import { UserContext } from './UserProvider';

function UserProfile() {
  const { user, logout } = useContext(UserContext);

  if (!user) return <p>Please login to see the profile.</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UserProfile;
