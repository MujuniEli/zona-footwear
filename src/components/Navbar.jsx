import React from "react";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("auth");
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const email = "Welcome " + userDetails.username;
  const signOut = () =>{
    localStorage.removeItem('auth')
    navigate("/store")
  }
  
  const navStyle = {
    color:'black',
    textDecoration: 'none'
  };

  return (
    <div className="nav">
      <div className="leftItem">
        <div className="logo">
          <Link style={navStyle} to="/">
            <span>ZONA FOOTWEAR</span>
          </Link>
        </div>
        <div className="menu">
          <ul>
            <Link style={navStyle} to="/store">
              <li>Store</li>
            </Link>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="icons rightItem">
        <span className="icon">
          <SearchIcon />
        </span>
        <span className="icon">
          <ShoppingCartSharpIcon />
        </span>
        <ul>
          {isAuth ? email : " "} &nbsp;
          {isAuth ? (
            // <Link style={navStyle} to="/store">
            <button className="signotBtn" style={navStyle} onClick={signOut}>
              <li>Sign Out</li>
            </button>
          ) : (
            // {/* </Link> */}
            <Link style={navStyle} to="/sign-in">
              <li style={{ marginRight: "5em" }}>Sign In</li>
            </Link>
          )}
        </ul>
        {isAuth ? (
          <img
            src={userDetails.avatar}
            style={{ width: "50px", borderRadius: "50px" }}
            alt={userDetails.firstName}
          />
        ) : (
          " "
        )}{" "}
        &nbsp;
      </div>
    </div>
  );
}

export default Navbar;
