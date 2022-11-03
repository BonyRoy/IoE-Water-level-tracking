import React from "react";
import s1 from "../src/images/s1.png";
//import { NavLink } from "react-router-dom";

const Buy =()=>{
  return(
    <>
     <div class="card">
  <img src={s1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">
    IoE Setup</h5>
    <p class="card-text">Hardware Components that you need to setup in your water tank.</p>
    <p class="card-text">Raspberry Py ||	Ulta Sonic Sensor || Water Pump ||	Relay Module</p>
    <a href="https://www.facebook.com" class="btn btn-outline-primary">Buy &#62;</a>
  </div>

</div>
    </>
      );
};

export default Buy;
