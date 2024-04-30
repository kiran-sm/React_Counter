import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((a) => (a < 10 ? a + 1 : 1));
    }, 1000); // Increment count every second
    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Run only once on component mount

  return <div>Counter: {count}</div>;
}

export default App;
