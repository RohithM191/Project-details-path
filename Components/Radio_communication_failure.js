
import React, { useRef, useLayoutEffect, useState } from "react";



const MyCanvas = (props = {}) => {
  const {
    number,
    content,
    width = 350,
    height = 50,
    pixelRatio = window.devicePixelRatio
  } = props;

  

  const canvas = useRef(null);

  useLayoutEffect(() => {
    const context = canvas.current.getContext("2d");

    context.save();
    context.scale(pixelRatio, pixelRatio);
    context.fillStyle = "black";
    //context.fillRect(0, 0, width, height);
    // code
    context.font = "15px Arial";

    context.fillText(number, 1, 12);
    context.fillText(content, 1, 40);
    context.stroke();
    context.restore();
  });

  const dw = Math.floor(pixelRatio * width);
  const dh = Math.floor(pixelRatio * height);
  const style = { width, height };
  return (
    <>
      <style>{`
    canvas {

height: 100px;
width: 100px;
border: 2px solid black;
margin-right: 10px;
margin-bottom: 15px;
}  
.row {
  display: flex;
justify-content: center;
} 

div.bold {
font-weight: bold;
}
      `}</style>
      <canvas id="canvas" ref={canvas} width={dw} height={dh} style={style} />
    </>
  );
};

const TextAbove = () => (
  <div className="bold">
    <p>2.2.2 Radiocommunication failure (RCF) message </p>
    <p>2.2.2.1 Composition </p>
  </div>
);

export default function LineButton() {
  const lines =   [
  <h3><p> 2.2.2.2 Submitted RCF Message </p><br/>
  (RCF-GAGAB<br/>
  –1231 121.3 CLA 1229 TRANSMITTING ONLY 126.7 MHZ LAST POSITION CONFIRMED BY RADAR)
   </h3>]

  const [state, setState] = useState(lines);

  return (
    <div className="App">
      <TextAbove />
      <div className="row">
        <p>(</p>
        <MyCanvas number="3" content="Message type, number & reference date" /><p>-</p>
        <MyCanvas number="7" content="Aircraft identification and SSR mode" /><p>-</p>
        </div>
      
      <div className = 'row'> 
      <MyCanvas number="21" content="Radio failure information (using more than one line if necessary)" />
      </div>

      <button
        onClick={() => setState(prev => ({ ...prev, text: lines }))}
     style = {{backgroundColor:'blue', color:'white'}} >
        Submit
      </button>

      <button>Reset</button>
      <br />
      <br />
      {state.text}
    </div>
  );
}

