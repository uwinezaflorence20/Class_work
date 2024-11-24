import React, { useState } from 'react';

// Child Component - React.memo used to prevent unnecessary re-renders
const ChildComponent = React.memo(({ name }) => {
  console.log('Child Component Rendered');
  return <div>Hello, {name}!</div>;
});

// Parent Component
const ParentComponent = () => {
  const [name, setName] = useState('John');

  return (
    <div>
      <button onClick={() => setName('Jane')} style={{ padding:'8px', backgroundColor:'gray' }}>Change Name</button>
      <ChildComponent name={name} />
    </div>
  );
};

export default ParentComponent;
