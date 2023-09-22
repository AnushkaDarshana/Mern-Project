import React, { useContext } from 'react';
import { UserContext } from './UserProvider';

export default function Login() {

  const { login } = useContext(UserContext);
  return (
    <div>
      <button onClick={() => login({ name: 'John Doe', email: 'john.doe@example.com' })}>
        Login
      </button>
    </div>
  )
}
