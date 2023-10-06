// Dashboard.jsx
import React from 'react';
import Profile from './Profile';
import { NavLink, Routes, Route } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      Dashboard Page
      
      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </nav>
      <Routes>
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
