import React, { useState } from 'react';
import RegularComponent from './Regular';
import MemorizedComponent from './Memorized'; // We'll create this component next.

export default function Memo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('John');

    return (
        <div>
            <button onClick={() => {
                setCount(prevCount => prevCount + 1); 
            }}>Increment</button>
            <br/>
            {count}
            <br/>
            <RegularComponent name={name} />
            <MemorizedComponent name={name} />
        </div>
    );
}
