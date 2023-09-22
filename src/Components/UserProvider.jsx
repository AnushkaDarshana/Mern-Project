import React, { createContext, useState  } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const login = (username, password) => {
    if (username === 'admin' && password === '123') {
      setUser({ name: 'John Doe', email: 'john.doe@example.com' });
      setError('');
    } else {
      setError('Username or password is incorrect');
    }
  };
  const logout = () => setUser(null);
  
  return (
    <UserContext.Provider value={{ user, error, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
