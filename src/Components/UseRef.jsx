import React, { useRef, useEffect } from 'react';

const Ref = () => {
  // Create a ref to store a DOM element reference
  const myElementRef = useRef(null);

  useEffect(() => {
    // Access the DOM element and set its text content
    myElementRef.current.textContent = 'Hello, useRef!';
  }, []); // Runs once after initial render

  return (
    <div>
      {/* Attach the ref to a DOM element */}
      <div ref={myElementRef}></div>
    </div>
  );
};

export default Ref;

{/* <div className="App">
      <h1>My App</h1>
      <Ref /> 
    </div> */}