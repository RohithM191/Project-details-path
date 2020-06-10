
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
   
    <p>2.3 Filled flight plan and associated update messages</p>
    <p>2.3.1. Filled flight plan (FPL) message</p>
    <p> 2.3.1.1 Composition </p>
  </div>
);

export default function LineButton() {
  const lines = [
  <h3><p> 2.3.1.2 Submitted Filed flight plan (FPL)</p><br/>
  ("FPL-ACA101-IS <br/>
    B773/H-CHOV/C<br/>
    EGLL1400<br/>
    N0450F310 L9 UL9 STU285036/M082F310 UL9 LIMRI<br/>
    52N020W 52N030W 50N040W 49N050W<br/>
    CYQX0455 CYYR<br/>
    EET/EISN0026 EGGX0111 020W0136 CYQX0228 040W0330 050W0415 SEL/FJEL")
    
  </h3> ]

  const [state, setState] = useState(lines);

  return (
    <div className="App">
      <TextAbove />
      <div className="row">
        <p>(</p>
        <MyCanvas number="3" content="Message type, number & reference date" /><p>-</p>
        <MyCanvas number="7" content="Aircraft identification and SSR mode" /><p>-</p>
        <MyCanvas number="8" content="Flight rules and type of flight" /><p>-</p>
      </div>
      <div>
        <MyCanvas number="9" content="Type of aircraft and wake turbulence" />
        <MyCanvas number="10" content="Equipment and capabilities" />
      </div>

      <MyCanvas number="13" content="Departure aerodrome and time" />
      <div className="row">
        <MyCanvas
          number="15"
          content="Route (using more then one line if nec.."
        />
      </div>
      <div className="row">
        <MyCanvas
          number="16"
          content="Destination aerodrome and total estimation"
        />
      </div>
      <div className="row">
        <MyCanvas
          number="18"
          content="Other information ( using more then one .."
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



