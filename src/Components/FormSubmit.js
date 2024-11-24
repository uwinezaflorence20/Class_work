// FormSubmit.js
import React, { useState } from 'react';

const FormSubmit = () => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);  // Update state with the new input value
  };

  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent form default submit behavior
    console.log(input);       // Log input value to the console
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type something" style={{ padding:'4px' }}
      />
      <button type="submit" style={{backgroundColor:'gray' , padding:'4px'}}>Submit</button>
    </form>
  );
};

export default FormSubmit;
