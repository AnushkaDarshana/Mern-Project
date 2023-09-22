import React, { useState, useCallback } from 'react';

// Child component
const ChildComponent = ({ onClick }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me!</button>;
};

// Parent component
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setCount(count + 1);
  }, [count]); // Depend on the 'count' state

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;


{/* <div className="App">
      <h1>My App</h1>
      <ParentComponent /> 
    </div> */}