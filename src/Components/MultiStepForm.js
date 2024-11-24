import React, { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    payment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  // Styling
  const formContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  const backButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '10px',
    transition: 'background-color 0.3s',
  };

  const backButtonHoverStyle = {
    backgroundColor: '#d32f2f',
  };

  return (
    <div style={formContainerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            <div>
              <button
                type="button"
                onClick={nextStep}
                style={buttonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            <div>
              <button
                type="button"
                onClick={prevStep}
                style={backButtonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = backButtonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = backButtonStyle.backgroundColor}
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                style={buttonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <label>Payment Info:</label>
            <input
              type="text"
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            <div>
              <button
                type="button"
                onClick={prevStep}
                style={backButtonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = backButtonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = backButtonStyle.backgroundColor}
              >
                Back
              </button>
              <button
                type="submit"
                style={buttonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
