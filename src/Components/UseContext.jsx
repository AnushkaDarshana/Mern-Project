import React, { createContext, useContext, useState } from 'react';

// Create a context with 'light' as the default value
const ThemeContext = createContext('light');

export default function UseContext() {
  const [theme, setTheme] = useState('light'); // State to hold the current theme
  
  // Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Accessing context values
  
  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#000', color: theme === 'light' ? '#000' : '#fff', padding: '10px' }}>
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
