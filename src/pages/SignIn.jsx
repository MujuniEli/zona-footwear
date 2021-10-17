import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {loginDetails} from '../library/lib'


function SignIn() {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
          
    const onSubmitHandler = e => {
        e.preventDefault()

        if((loginDetails.email.match(email)) && (loginDetails.password.match(password))){
            localStorage.setItem("userEmail", email);
            navigate("/store");
        }else {
            setError('**use your proper Sign-in details ie email & password**')
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
          <input className="signinBtn" type="submit" value="Sign In" />
          <span className="spanone">
            <a href="https://zona-footwear.netlify.app/">
              Forgot Your Sign-in Details?
            </a>
          </span>
        </form>
      </div>
    );
}

export default SignIn
