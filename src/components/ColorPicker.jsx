import React, { useState } from 'react';
import Color from 'color';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('#EF4444');

  const generatePalette = (color) => {
    const hslColor = Color(color).hsl().object();

    const paletteColors = [
      Color(selectedColor).lighten(0.3).hex(),
      Color(selectedColor).saturate(0.3).hex(),
      Color(selectedColor).rotate(10).hex(),
      Color(selectedColor).desaturate(0.3).hex()
    ];

    return paletteColors;
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const paletteColors = generatePalette(selectedColor);

  return (
    <div className="flex items-center justify-around w-full">
      <div className='flex '>
        <input
          className="w-60 h-60"
          type="color"
          value={selectedColor}
          onChange={handleColorChange}
        />

      </div>
      <div className="w-1/2 flex no-wrap justify-center">
        {paletteColors.map((color, index) => (
          <div
            key={index}
            className="w-1/4 h-60 bg-gray-300"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;