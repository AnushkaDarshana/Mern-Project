// UserProfile.js
import React, { useContext } from 'react';
import { Route, Routes, NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import { UserContext } from './UserProvider';
import Details from './Details'; // Import the Details component

function UserProfile() {
  const { user, logout } = useContext(UserContext);
  // const navigate = useNavigate(); // Initialize navigate
  
  if (!user) return <p>Please login to see the profile.</p>;

  // const handleLogout = () => {
  //   logout(); // calling the logout function provided by UserContext
  //   navigate('/'); // Navigating to login route after logout
  // }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button> {/* Use handleLogout function here */}
      
      <NavLink to="details">Go to Details</NavLink> 

      <Routes>
        <Route path="details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default UserProfile;
