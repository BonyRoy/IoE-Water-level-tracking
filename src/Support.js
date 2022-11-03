import React from "react";
import Form from 'react-bootstrap/Form';
import './Support.css';

//import { NavLink } from "react-router-dom";

const Support =()=>{
  return(
    <>
    <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
    </div>
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
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <button class="btn-get-support" style={{color: "blue"}}>Submit form</button>
           </form>
         </div>
       </div>
    </div>
    </>
      );
};

export default Support;
