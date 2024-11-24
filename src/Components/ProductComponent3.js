import React, { useState, useMemo } from 'react';

// Heavy calculation function
const heavyCalculation = (num) => {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += num * i;
  }
  return result;
};

// Memoized component to avoid re-renders on props change
const HeavyCalculationComponent = React.memo(({ num }) => {
  const result = useMemo(() => heavyCalculation(num), [num]);

  console.log('HeavyCalculationComponent Rendered');
  return <div>Heavy Calculation Result: {result}</div>;
});

const ParentComponent3 = () => {
  const [num, setNum] = useState(1);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>Increment Number</button>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <HeavyCalculationComponent num={num} />
      <p>Counter: {counter}</p>
    </div>
  );
};

export default ParentComponent3;
