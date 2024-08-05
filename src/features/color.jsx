// color.js
import React from 'react';
import { useSelector } from 'react-redux';


const Color = () => {
  const color = useSelector(state => state.colors.color);

  return (
    <div style={{ backgroundColor: color, height: '100vh' }}>
      <h1>The background color is: {color}</h1>
    </div>
  );
};

export default Color;
