import { MouseEvent, useState, useLayoutEffect } from "react";
import rough from 'roughjs';

type ElementType = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  type: Tools;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  roughElement: any;
}

enum Tools {
  Selection = "selection",
  Line = "line",
  Rectangle = "rectangle",
}

export default function App() {
  const [elements, setElements] = useState<ElementType[]>([]);
  const [action, setAction] = useState("none");
  const [tool, setTool] = useState<Tools>(Tools.Line);

  const generator = rough.generator();

  const createElement = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    type: Tools
  ): ElementType => {
    const roughElement = type === Tools.Line ? generator.line(x1, y1, x2, y2) : generator.rectangle(x1, y1, x2 - x1, y2 - y1);
    return { x1, y1, x2, y2, type, roughElement };
  };

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.clearRect(0, 0, canvas.width, canvas.height);

    const roughCanvas = rough.canvas(canvas);

    elements.forEach(({ roughElement }) => {
      roughCanvas.draw(roughElement);
    });
  }, [elements]);

  const handleMouseDown = (event: MouseEvent<HTMLCanvasElement>) => {
    const { clientX, clientY } = event;
    if (tool === Tools.Selection) {
      /*
      TODO: implement selection
     if we are on an element
     setAction("moving"); 
     */
    } else {
      setAction("drawing");
      const element = createElement(clientX, clientY, clientX, clientY, tool);
      setElements((prevState) => [...prevState, element]);
    }
  };

  const handleMouseMove = (event: MouseEvent<HTMLCanvasElement>) => {
    if (action === "drawing") {
      const index = elements.length - 1;
      const { clientX, clientY } = event;
      const { x1, y1 } = elements[index];
      const updateElement = createElement(x1, y1, clientX, clientY, tool);

      const elementsCopy = [...elements];
      elementsCopy[index] = updateElement;
      setElements(elementsCopy);
    }
  };

  const handleMouseUp = () => {
    setAction("none");
  }

  return (
    <div>
      <div style={{ position: 'fixed', left: '50%', top: '2%' }}>
        <button onClick={() => setElements([])}>Clear</button>
        <input
          type="radio"
          name="line"
          id="line"
          checked={tool === Tools.Line}
          onChange={() => setTool(Tools.Line)}
        />
        <label htmlFor="line">line</label>

        <input
          type="radio"
          name="rectangle"
          id="rectangle"
          checked={tool ===  Tools.Rectangle}
          onChange={() => setTool(Tools.Rectangle)}
        />
        <label htmlFor="rectangle">rectangle</label>

      </div>
      <canvas id="canvas" width={innerWidth} height={innerHeight} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}></canvas>
    </div>
  )
}