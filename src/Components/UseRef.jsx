import React, { useRef, useState, useEffect } from 'react';

const Ref = () => {
  // Create a ref to store a DOM element reference
  const myElementRef = useRef(null);

  // State to track the number of renders
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    // Access the DOM element and set its text content
    myElementRef.current.textContent = 'Hello, 123!';
  }, []); // Runs once after initial render

  return (
    <div>
      <div ref={myElementRef}></div>
      <p>Component rendered {renderCount} times.</p>
      {/* Button to manually cause a re-render */}
      <button onClick={() => setRenderCount((prevCount) => prevCount + 1)}>Force Render</button>
    </div>
  );
};

export default Ref;
