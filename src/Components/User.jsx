import React from 'react'
import { useParams } from 'react-router-dom';

export default function User({ users }) {
    let { userId } = useParams();
    const user = users.find((user) => user.id === Number(userId));
    // Now you can use userId to fetch or display user data.
    return (
    <div>
        <h2>{user.name}</h2>
        <p>ID: {user.id}</p>
    </div>
    
    );
}
