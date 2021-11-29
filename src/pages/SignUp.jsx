import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


function SignIn() {
    const navigate = useNavigate();
    
    const [avatar, setAvatar] = useState(
      "https://res.cloudinary.com/zona/image/upload/v1634990252/zonafootwear/default_avatar_qqzuna.jpg"
    );
    const [imgLoad, setImgLoad] = useState(1);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    // eslint-disable-next-line
    const [error, setError] = useState("");

    const changeAvatar = async (e) => {
      setImgLoad(0.6)
      const imgData = new FormData()
      imgData.append("file", e.target.files[0]);
      imgData.append("upload_preset", "mylmco4n");
      await Axios.post('https://api.cloudinary.com/v1_1/zona/image/upload', imgData).then(res => {
        setAvatar(res.data.secure_url)             
        setImgLoad(1)
      })
    }


    const changeFirstName = e => {
      setFirstName(e.target.value)
    }

    const changeLastName = (e) => {
      setLastName(e.target.value);
    }

    const changeUsername = (e) => {
      setUsername(e.target.value);
    }

    const changeEmail = (e) => {
      setEmail(e.target.value);
    }

    const changePassword = (e) => {
      setPassword(e.target.value);
    }

    const changeCpassword = (e) => {
      setCPassword(e.target.value);
    };
          
    const onSubmitHandler = e => {
        e.preventDefault()
        let userDetails = {
          avatar: avatar,
          firstName: firstName,
          lastName: lastName,
          username: username,
          email: email,
          password: password,
        };
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        navigate("/sign-in");

        // if((loginDetails.email.match(email)) && (loginDetails.password.match(password))){
        //     localStorage.setItem("userEmail", email);
        //     navigate("/store");
        // }else {
        //     setError('**use your proper Sign-in details ie email & password**')
        // }
    }
    return (
      <div className="signin">
        <form action="" onSubmit={onSubmitHandler}>
          <h4>Create Account</h4>
          <p>Please fill in your details below.</p>
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div>
            <p>Profile Picture</p>
            <img src={avatar} width={90} style={{ opacity: imgLoad }} alt="" />
            <input
              type="file"
              style={{ display: "block" }}
              onChange={changeAvatar}
            />
          </div>
          <br />
          <label>First Name</label>
          <input
            className="inputtxt"
            type="text"
            onChange={changeFirstName}
            value={firstName}
            //   onChange={handleChangle}
          />
          <br />
          <label>Last Name</label>
          <input
            className="inputtxt"
            type="text"
            onChange={changeLastName}
            value={lastName}
            //   onChange={handleChangle}
          />
          <br />
          <label>Username</label>
          <input
            className="inputtxt"
            type="text"
            onChange={changeUsername}
            value={username}
            //   onChange={handleChangle}
          />
          <br />
          <label>Email*</label>
          <input
            className="inputtxt"
            type="email"
            onChange={changeEmail}
            value={email}
            //   onChange={handleChangle}
          />
          <br />
          <label>Password*</label>
          <input
            className="inputtxt"
            type="password"
            onChange={changePassword}
            value={password}
            //   onChange={handleChangle}
          />
          <br />

          <label>Confirm Password*</label>
          <input
            className="inputtxt"
            type="password"
            onChange={changeCpassword}
            value={cPassword}
            //   onChange={handleChangle}
          />
          <br />
          <input className="signinBtn" type="submit" value="Sign Up" />
          <span className="spanone">
            <a href="/sign-in">Sign-in here</a>
          </span>
        </form>
      </div>
    );
}

export default SignIn
