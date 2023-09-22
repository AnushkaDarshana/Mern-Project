import React, { useState, useLayoutEffect } from 'react';

const Layout = () => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    // Measure the width of a DOM element
    const element = document.getElementById('myElement');
    if (element) {
      const elementWidth = element.clientWidth;
      setWidth(elementWidth);
    }
  }, []); // Runs synchronously after initial render

  return (
    <div>
      {/* Attach an ID to the DOM element to be measured */}
      <div id="myElement">This element's width: {width}px</div>
    </div>
  );
};

export default Layout;

{/* <div className="App">
      <h1>My App</h1>
      <Layout /> 
    </div> */}
