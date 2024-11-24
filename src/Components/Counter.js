// Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);//setCount: A function that is used to update the value of count.,count: The current value of the counter (initially 0).

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
