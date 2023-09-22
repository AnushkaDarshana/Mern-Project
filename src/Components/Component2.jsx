// Component2.js

import React, { useState } from 'react';

function Component2() {
    // Create a state variable for the text content
    const [text, setText] = useState('Compoent2');

    return ( 
        <div>
            <p> { text } </p> 
        </div>
    );
}

export default Component2;