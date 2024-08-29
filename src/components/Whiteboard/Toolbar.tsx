import React from 'react'
import {fabric} from 'fabric'

interface ToolbarProps {
  fabricCanvas: fabric.Canvas | null
}

const Toolbar: React.FC<ToolbarProps> = ({fabricCanvas}) => {
  const changeColor = (color: string) => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.color = color
    }
  }

  const changeBrushSize = (size: number) => {
    if (fabricCanvas) {
      fabricCanvas.freeDrawingBrush.width = size
    }
  }

  return (
    <div>
      <button onClick={() => changeColor('red')}>Red</button>
      <button onClick={() => changeColor('blue')}>Blue</button>
      <button onClick={() => changeBrushSize(5)}>Size 5</button>
      <button onClick={() => changeBrushSize(10)}>Size 10</button>
    </div>
  )
}

export default Toolbar
