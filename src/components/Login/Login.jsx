import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from '../home/Home';
// import "./login.css";

function Login() {

    const [username, setUsername] = useState('');
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);


    function handleLogin(e) {
        e.preventDefault();
        let user = localStorage.getItem('hardikSubmissionUsername').replace(/"/g, "");
        let pass = localStorage.getItem('hardikSubmissionPassword').replace(/"/g, "");
        let mail = localStorage.getItem('hardikSubmissionEmail').replace(/"/g, "");
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if (!username || !emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } 
        else if (username === user && emaillog === mail && passwordlog === pass) {
            setHome(false);
            console.log("LOGIN SUCCESSFUL");
        }
        else {
            setFlag(true);
            console.log("LOGIN FAILED");
        }
    }

   return (
        <div>
           {home ? <form onSubmit={handleLogin}>
        <div className="main">
          <div className="container"></div>
          <div className="form-field">
            <div className="signup-header">
              <h3 style={{color: 'white',fontSize: "18px", marginLeft: "20px" }}>
                Log In Now
              </h3>
            </div>
            <div className="input-field">
              <input
                style={{ height: "50px", borderBottom: "2px solid grey" }}
                type="text"
                className="form-control"
                autocomplete="off"
                placeholder=" User Name"
                onChange={(event) => setUsername(event.target.value)}
              />
              <br></br>

              <input
                style={{ height: "50px", borderBottom: "2px solid grey" }}
                type="text"
                className="form-control"
                autocomplete="off"
                placeholder="Email"
                required
                onChange={(event) => setEmaillog(event.target.value)}
                
              />

              <br />

              <input
                style={{ height: "50px", borderBottom: "2px solid grey" }}
                type="password"
                className="form-control"
                autocomplete="off"
                placeholder="Password"
                required
                onChange={(event) => setPasswordlog(event.target.value)}
              />
              <br />
              <button
                style={{ width: "100%" }}
                 type="submit"
                class="btn btn-secondary btn-lg"
              >
                Login
              </button>
            </div>

            <div className="terms" style={{color:"white",fontSize:"1rem",fontWeight:"bold", display:"flex",justifyContent:"center",marginTop:"1rem",marginLeft: "40px" }}>
              By signing up to agree to the   <p style={{color: "blue",marginLeft: "0.5rem"}}> Terms of Services</p>
            </div>
          
          </div>
        </div>
      </form>
        : <Home/>}
        {flag ? <Alert variant="danger">
            <Alert.Heading>Oh snap!</Alert.Heading>
            <p>
                Invalid Credentials
            </p>
        </Alert> : null}
        </div>
    )
}

    

export default Login
