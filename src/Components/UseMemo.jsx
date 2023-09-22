import React, { useMemo } from 'react';

const Square = ({ number }) => {
  // Use useMemo to calculate and memoize the square
  const square = useMemo(() => {
    console.log('Calculating square...');
    return number * number;
  }, [number]); // Depend on the 'number' prop

  return (
    <div>
      <p>Number: {number}</p>
      <p>Square: {square}</p>
    </div>
  );
};

export default Square;


// function App() {
//     const [input, setInput] = useState(0);
  
//     // Ensure the input value is a valid number
//     const handleInputChange = (e) => {
//       const value = parseInt(e.target.value);
//       setInput(isNaN(value) ? 0 : value);
//     };
  
//     return (
//       <div className="App">
//         <h1>Number Square Calculator</h1>
//         <input
//           type="number"
//           value={input}
//           onChange={handleInputChange}
//         />
//         <Square number={input} /> {/* Pass the 'number' prop */}
//       </div>
//     );
//   }
  
//   export default App;