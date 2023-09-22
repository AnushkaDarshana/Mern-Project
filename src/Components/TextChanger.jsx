// TextChanger.js

import React, { useState } from 'react';

function TextChanger() {
    // Create a state variable for the text content
    const [text, setText] = useState('Hello, World!');

    // Function to change the text when the button is clicked
    const hiText = () => {
        setText('Hi !');
    };

    const helloText = () => {
        setText('Hello !');
    };

    return ( 
        <div>
            <p> { text } </p> 
            <button onClick = { helloText } > Hello Text </button> 
            <button onClick = { hiText } > Hi Text </button> 
        </div>
    );
}

export default TextChanger;