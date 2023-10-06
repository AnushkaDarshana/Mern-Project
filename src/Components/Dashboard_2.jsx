import React from 'react';
import Profile from './Profile';
import { NavLink, Routes, Route, Outlet } from 'react-router-dom';

function DashboardContent() {
  return (
    <div>
      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </nav>
      <hr />
      Dashboard Page
    </div>
  );
}

export default function Dashboard_2() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardContent />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
