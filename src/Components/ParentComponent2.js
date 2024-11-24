import React, { useState } from 'react';

// Counter component with React.memo to avoid unnecessary re-renders
const Counter = React.memo(({ count, increment }) => {
  console.log('Counter Rendered');
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
});

// Parent component with a list of unrelated items
const ParentComponent2 = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <Counter count={count} increment={increment} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParentComponent2;
