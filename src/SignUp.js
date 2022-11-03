import React from "react";
import './SignUp.css';
import one from "../src/images/one.jpg";
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";
//import { NavLink } from "react-router-dom";

const SignUp =()=>{
  return(
    <>
    <section id='header'className="d-flex align-item-centre">
      <div className="container-fluid nav-bg">
      <div className="row">
      <div className="col-10 mx-auto">
        <div className="row">
      <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-centre flex-column">
      <br></br><br></br><br></br><br></br>
      <h1 className="mx-auto">Sign Up</h1> 
    <div className="container contact_div">
       <div className="row">
         <div className="col-md-6 col-10 mx-auto">
           <form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="+91-XXXXXXXXXX" />
      </Form.Group>
{/* <button class="btn-get-started" to="/Login">Submit form</button> */}
      <NavLink className="btn-get-started" to="/Login" >Submit form</NavLink>
           </form>
         </div>
       </div>
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
    </>
      );
};

export default SignUp;
