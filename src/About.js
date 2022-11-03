import React from "react";
import List from "./List";
//import { NavLink } from "react-router-dom";

const About =()=>{
  return(
    <>
    <div className="col-10 mx-auto">
      <br></br>
    <h1>About</h1>
    <br></br>
    <h6>Need of this system is to avoid wastage of water; Because sometimes people forget to turn off the motor when the tank is full, so due to the overflow of water, the water gets wasted and to avoid this problem this project came into picture. By using this water level tracking system we can monitor water level and the consumption of water.
    </h6>
    </div>
    <List/>
    </>
      );
};

export default About;
