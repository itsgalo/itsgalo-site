import React, { useRef, useEffect, useState } from 'react'

function Canvas(props) {
  const { draw, ...rest } = props;
  const canvasRef = useRef(null);
  
  useEffect(() => {
    
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    let frameCount = 0;
    let animationFrameId;
    
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }

    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    }
  }, [draw]);
  
  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas