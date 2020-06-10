
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

height: 300px;
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
    <p>2.2.1 Alerting (ALR) message </p>
    <p>2.2.1.1 Composition </p>
  </div>
);

export default function LineButton() {
  const lines = [ 
  
  <h3><p> 2.2.1.2 Submitted Alerting Message </p><br/>
"(ALR-INCERFA/LGGGZAZX/OVERDUE<br/>
–FOX236/A3624-IM<br/>
–C141/H-S/C<br/>
–LGAT1020<br/>
–N0430F220 B9 3910N02230W/N0415F240 B9 IVA/N0415F180 B9<br/>
–EDDM0227 EDDF <br/>
–REG/A43213 EET/LYBE0020 EDMI0133 OPR/USAF RMK/NO<br/>
POSITION REPORT SINCE DEP PLUS 2 MINUTES
–E/0720 P/12 R/UV J/LF D/02 014 C ORANGE A/SILVER C/SIGGAH<br/>
–USAF LGGGZAZX 1022 126.7 GN 1022 PILOT REPORT OVER NDB ATS<br/>
UNITS ATHENS FIR ALERTED NIL)"
    
</h3> ]
  const [state, setState] = useState(lines);

  return (
    <div className="App">
      <TextAbove />
      <div className="row">
        <p>(</p>
        <MyCanvas  number="3" content="Message type, number & reference dats" /><p>-</p>
        <MyCanvas number="5" content="Description of Emergency" /><p>-</p>
      </div>

      <div>
        <MyCanvas number="7" content="Aircraft identification & SSR mode and code " />
        <MyCanvas number="8" content="Flight rules and type of flight" />
      </div>
      <div>
      <MyCanvas number="9" content="Type of aircraft and wake turbulence category" />
      <MyCanvas number="10" content="Equipment and capabilities " />
      </div>

      <MyCanvas number="13" content="Departure aeurodome and time" />
      
      <div className="row">
        <MyCanvas
          number="15"
          content="Route (using more than one line if necessary) "
        />
      </div>

      <div className="row">
        <MyCanvas
          number="16"
          content="Destination aerodrome and total estimated elapsed time, destination alternate
          aerodrome(s) "
        />
      </div>
      
      <div className="row">
        <MyCanvas
          number="18"
          content="Other information (using more than one line if necessary) "
        /></div>
      <MyCanvas number="19" content="Supplementary information (using more than one line if necessary) " />
      
      <div className = "row">
      <MyCanvas number="20" content="Alerting search and rescue information (using more than one line if necessary)" /><p>)</p>
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



