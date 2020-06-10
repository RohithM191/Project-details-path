import React from "react";

import {BrowserRouter,Route,Link,NavLink} from 'react-router-dom';



import "./Styles.css";




import Alerting from "./Components/Alerting";
import Radio_communication_failure from "./Components/Radio_communication_failure";

import Filed_flight_plan from "./Components/Filed_flight_plan";
import Modification from "./Components/Modification";
import Cancellation from "./Components/Cancellation";
import Delay from "./Components/Delay";
import Departure from "./Components/Departure";
import Arrival from "./Components/Arrival";

import Current_flight_plan from "./Components/Current_flight_plan";
import Estimate from "./Components/Estimate";
import Coordination from "./Components/Coordination";
import Acceptance from "./Components/Acceptance";
import Logical_acknowledgement from "./Components/Logical_acknowldgement";

import Request_flight_plan from "./Components/Request_flight_plan";
import Request_supplementary_flight_plan from "./Components/Request_supplementary_flight_plan";
import Supplementary_flight_plan from "./Components/Supplementary_flight_plan";

function Main() {
  return (


    <div className="UI">
      <h1>Flight plan form of ATS_Message</h1>
      

    
  
      <BrowserRouter>


      <ul className="header">
            <li><NavLink to="/Alerting"><h3>Alerting</h3></NavLink></li>
            <li><NavLink to="/Radio_communication_failure"><h5>Radio_communication_failure</h5></NavLink></li>

            <li><NavLink to="/Arrival">Arrival</NavLink></li>
      </ul>
          
      
        <Route path = '/Alerting' exact component = {Alerting}/>
        
       
        <Route path = '/Radio_communication_failure' exact component = {Radio_communication_failure}/>
        
        


        


      
      
      
      
      
      
      
      
      </BrowserRouter>
      
      



    </div>
  );
}
export default Main;
