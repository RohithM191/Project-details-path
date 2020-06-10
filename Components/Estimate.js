
import React, { useRef, useLayoutEffect, useState } from "react";



const MyCanvas = (props = {}) => {
  const {
    number,
    content,
    width = 300,
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
   
    <p>2.4.2 Estimate (EST) message<br/>
    2.4.2.1 Composition</p>
  </div>
);

export default function LineButton() {
  const lines = [
  <h3><p> 2.4.2.2 Submitted Estimate Message</p><br/>
  (ESTP/L027-BAW671/A5631-LFPG-ABB/1548F140F110A-EGLL) 
    
  </h3> ]

  const [state, setState] = useState(lines);

  return (
    <div className="App">
      <TextAbove />
      <div className="row">
        <p>(</p>
        <MyCanvas number="3" content="Message type, number & reference date" /><p>-</p>
        <MyCanvas number="7" content="Aircraft identification and SSR mode" /><p>-</p>
        <MyCanvas number="13" content="Departure aerodrome and timet" /><p>-</p>
      </div>
      
     
      
      <div className="row">
        <MyCanvas number="14" content="Estimate data" /><p>-</p>
        <MyCanvas
          number="16"
          content="Destination aerodrome and total estimated elapsed time,
          destination alternate aerodrome(s) "
        /><p>)</p></div>
      
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



