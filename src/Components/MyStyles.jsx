import React from 'react';
import '../styles.css'; // Import the external CSS file

function MyStyles() {
  return (
    <div className="my-component">
      <h1>Welcome to My React Component</h1>
      <p>This component is styled using an external CSS file.</p>
      <button className="button">Click Me</button>
    </div>
  );
}

export default MyStyles;
