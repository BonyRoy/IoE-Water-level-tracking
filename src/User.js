import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

// var fb = require('firebase')

// var appIni =fb.initializeApp({
//   apiKey: "AIzaSyBSiy_vw0RTckQwLTOelDXU76BPasDt05w",
//   authDomain: "ioewater.firebaseapp.com",
//   projectId: "ioewater",
//   databaseURL: "https://ioewater-default-rtdb.firebaseio.com/",
//   storageBucket: "ioewater.appspot.com",
//   messagingSenderId: "766474679659",
//   appId: "1:766474679659:web:f53b5e5c15721cb7dd882e",
//   measurementId: "G-K7MVSCX617"
// })

// var f = fb.firebaseDB()
// f.ref('Users').child().child()
const User =()=>{

  const motorOn = (e)=>{
    fetch("/motoron").then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }

    const motorOff = (e)=>{
    fetch("/motoroff").then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }

  const manualOff = (e)=>{
    fetch("/manualoff").then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }

  return(
    <>
    <div className="align-item-centre">
      <h1>Progress Bar</h1>
    <ProgressBar>
      <ProgressBar striped variant="success" now={35} key={1} />
      <ProgressBar variant="warning" now={20} key={2} />
      <ProgressBar striped variant="danger" now={10} key={3} />
    </ProgressBar>
    <br></br><br></br>
    <div className="mx-auto">
    <div className="container-fluid nav-bg">
      <div className="row">
      <div className="col-1 mx-auto">
    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
  <button onClick={manualOff} type="button" className="btn btn-outline-primary">Automate</button>

  <div className="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Manual
    </button>
    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <li><button onClick={motorOn} type="button" className="btn btn-outline-success">Start Moter</button></li>
      <li><button onClick={motorOff} type="button" className="btn btn-outline-danger">Stop Moter</button></li>
    </ul>
  </div>
</div>
</div>
</div>
</div>
    </div>
    
    
    
    </div>
    </>
      );
};

export default User;
