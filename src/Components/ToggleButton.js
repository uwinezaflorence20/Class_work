// ToggleButton.js
import React, { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);  
  };

  return (
    <button onClick={toggle} style={{width:'10%',padding:'4px', backgroundColor:'gray'}}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
};

export default ToggleButton;
