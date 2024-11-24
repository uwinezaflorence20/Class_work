import React, { useState } from 'react';

const ControlledForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Styling for the form container and form elements
  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f6f8',
  };

  const formStyle = {
    backgroundColor: '#ffffff',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '300px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    fontSize: '16px',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '16px',
    marginBottom: '10px',
    color: '#333',
  };

  const outputStyle = {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#e0f7fa',
    borderRadius: '5px',
    color: '#00796b',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  return (
    <div style={formContainerStyle}>
      <form style={formStyle}>
        <label htmlFor="inputText" style={labelStyle}>Enter some text:</label>
        <input
          type="text"
          id="inputText"
          value={inputValue}
          onChange={handleChange}
          style={inputStyle}
        />
      </form>
      <p style={outputStyle}>You typed: {inputValue}</p>
    </div>
  );
};

export default ControlledForm;
