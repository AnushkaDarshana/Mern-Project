import React, { useReducer, useContext } from 'react'; // Correct import statement
import { UserContext } from './UserProvider';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
          return { count: state.count + 1 };
        case 'DECREMENT':
          return { count: state.count - 1 };
        default:
          return state;
      }
};

const initialState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useContext(UserContext); // Moved useContext inside functional component
  
  if (!user) return <p>Please login to see the counter.</p>;

  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;
