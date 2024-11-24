import React, { useState } from 'react';

const CheckboxForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((option) => option !== value)
        : [...prevSelected, value]
    );
  };

  // Styling
  const formContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f7fc',
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  };

  const checkboxContainerStyle = {
    marginBottom: '15px',
    fontSize: '16px',
    color: '#333',
  };

  const checkboxStyle = {
    marginRight: '10px',
  };

  const selectedOptionsStyle = {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f1f1f1',
    borderRadius: '5px',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '14px',
  };

  return (
    <div style={formContainerStyle}>
      <form style={formStyle}>
        <h3>Select Options</h3>
        <div style={checkboxContainerStyle}>
          <label>
            <input
              type="checkbox"
              value="Option 1"
              onChange={handleChange}
              style={checkboxStyle}
            />
            Option 1
          </label>
        </div>
        <div style={checkboxContainerStyle}>
          <label>
            <input
              type="checkbox"
              value="Option 2"
              onChange={handleChange}
              style={checkboxStyle}
            />
            Option 2
          </label>
        </div>
        <div style={checkboxContainerStyle}>
          <label>
            <input
              type="checkbox"
              value="Option 3"
              onChange={handleChange}
              style={checkboxStyle}
            />
            Option 3
          </label>
        </div>

        <div style={selectedOptionsStyle}>
          <p>Selected Options:</p>
          <p>{selectedOptions.length > 0 ? selectedOptions.join(', ') : 'None'}</p>
        </div>
      </form>
    </div>
  );
};

export default CheckboxForm;
