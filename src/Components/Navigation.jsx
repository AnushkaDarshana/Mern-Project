import React from 'react'
import { NavLink  } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
          <NavLink to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/profile" activeClassName="active">Profile</NavLink>
          <NavLink to="/users" activeClassName="active">Users</NavLink>
        </nav>
      );
}
