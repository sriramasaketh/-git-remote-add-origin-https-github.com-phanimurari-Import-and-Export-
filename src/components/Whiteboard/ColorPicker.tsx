import React from 'react'

interface ColorPickerProps {
  onColorChange: (color: string) => void
}

const ColorPicker: React.FC<ColorPickerProps> = ({onColorChange}) => {
  return (
    <input
      type='color'
      onChange={e => onColorChange(e.target.value)}
      title='Pick a color'
    />
  )
}

export default ColorPicker
