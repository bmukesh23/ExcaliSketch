import { useLayoutEffect } from "react";
import rough from 'roughjs';

export default function App() {
  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.clearRect(0, 0, canvas.width, canvas.height);

    const roughCanvas = rough.canvas(canvas);
    roughCanvas.rectangle(10, 10, 200, 200);
  });

  return (
    <div>
      <canvas id="canvas" width={innerWidth} height={innerHeight}></canvas>
    </div>
  )
}