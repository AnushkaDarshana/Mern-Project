import React, { useContext } from 'react'
import { UserContext } from './UserProvider';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    const { user } = useContext(UserContext); 
    // use useContext to consume UserContext

    if (!user) return <Navigate to="/login" />; 
    // navigate to login if user is not authenticated
  
    return children; // render children if user is authenticated
}
