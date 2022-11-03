import React from "react";
import List from "./List";
import { NavLink } from "react-router-dom";
import one from "../src/images/one.jpg";

const Home =()=>{
  return(
    <>
    <section id='header'className="d-flex align-item-centre">
      <div className="container-fluid nav-bg">
      <div className="row">
      <div className="col-10 mx-auto">
        <div className="row">
      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-centre flex-column">
      <br></br><br></br><br></br><br></br>
      <h2 className="mr-auto">Optimize Your Water Consumption With Our</h2>
      <h1 className="mr-auto"
      style={{color: "blue"}}
      >Water Monitoring System.</h1>
      <h6>We are a team of IoE developers making IoE projects.</h6>
      <div className="mt-3 mx-auto">
      <br></br><br></br><br></br><br></br><br></br><br></br>
      <NavLink className="btn-get-started" to="/SignUp" >SignUp</NavLink>
      <br></br><br></br>
      <NavLink className="btn-get-started" to="/Login" >Login...</NavLink>
      <br></br><br></br>
      </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 header-img">
      <br></br><br></br><br></br>
        <img src={one} className="img-fluid animated" alt="home img"
        style={ {
          width:'100%',
          }}
        />
      </div>
      </div>

      <br></br><br></br>
      
      </div>
      </div>
      </div>

      </section>
      <List/>


    </>
      );
};

export default Home;
