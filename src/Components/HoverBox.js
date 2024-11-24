// HoverBox.js
import React, { useState } from 'react';

const HoverBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: 'full',
        height: '200px',
        backgroundColor: isHovered ? 'blue' : 'gray',
        transition: 'background-color 0.3s',
      }}
    >
      Hover over me!
    </div>
  );
};

export default HoverBox;
