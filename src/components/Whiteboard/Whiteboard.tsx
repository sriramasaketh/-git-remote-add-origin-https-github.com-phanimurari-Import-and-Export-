import React, {useRef, useEffect} from 'react'
import {fabric} from 'fabric'
import Toolbar from './Toolbar'

const Whiteboard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const fabricCanvasRef = useRef<fabric.Canvas | null>(null)

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current)
    fabricCanvasRef.current = canvas

    return () => {
      canvas.dispose()
    }
  }, [])

  return (
    <div>
      <Toolbar fabricCanvas={fabricCanvasRef.current} />
      <canvas ref={canvasRef} id='whiteboard-canvas' />
    </div>
  )
}

export default Whiteboard
