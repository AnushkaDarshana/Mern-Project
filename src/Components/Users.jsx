import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import User from './User';

export default function Users() {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
      ];
    
      return (
        <div>
          <h2>Users</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <NavLink to={`${user.id}`}>{user.name}</NavLink>
              </li>
            ))}
          </ul>
          
          <Routes>
            {/* <Route path=":userId" element={<User />} /> */}
            <Route path=":userId" element={<User users={users}/>} />
          </Routes>
        </div>
      );
}
