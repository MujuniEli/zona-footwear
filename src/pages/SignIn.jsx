import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {loginDetails} from '../library/lib'

function SignIn() {
    let navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onSubmitHandler = e => {
        e.preventDefault()

        if((loginDetails.email === email) && (loginDetails.password === password)){
            
            navigate("/admin");
        }else {
            setError('incorrect log-in details, use your proper details')
        }
    }
    return (
      <div className="signin">
        <form action="" onSubmit={onSubmitHandler}>
          <h3>Already Registered?</h3>
          <p>If you have an account, sign in with your email address.</p>
          {error !== "" ? <div className="error">{error}</div> : ""}
          <br />
          <label>Email*</label>
          <input
            className="inputtxt"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            //   onChange={handleChangle}
          />
          <br />
          <label>Password*</label>
          <input
            className="inputtxt"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            //   onChange={handleChangle}
          />
          <br />
          <input className="signinBtn" type="button" value="Sign In" />{" "}
          <span className="spanone">
            <a href="https://zona-footwear.netlify.app/">
              Forgot Your Password?
            </a>
          </span>
        </form>
      </div>
    );
}

export default SignIn
