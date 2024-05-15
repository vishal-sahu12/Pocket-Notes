import React, { useState } from 'react';

const colors = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'];

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (color) => {
    setSelectedColor(color);
    
  };
  let i=0;
  return (
    <div className='colour-picker'>
      {colors.map((color) => (
       <div key={colors.indexOf(color)}  style={{backgroundColor:color}}>
        
         {/* <label key={color}>
          <input 
            type="radio"
            name="color"
            value={color}
            checked={selectedColor === color}
            onChange={() => handleColorChange(color)}
          />
          {color}
        </label> */}
       </div>
      ))}
      
    </div>
  );
}

export default ColorPicker;
