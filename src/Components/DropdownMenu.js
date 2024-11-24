// DropdownMenu.js
import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Toggle the dropdown menu visibility
  };

  return (
    <div>
      <button onClick={toggleMenu}>Toggle Menu</button>
      {isOpen && (
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
