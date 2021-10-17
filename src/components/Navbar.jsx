import React from "react";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail")
  const signOut = () =>{
    localStorage.removeItem('userEmail')
    navigate("/store")
  }
  
  const navStyle = {
    textDecoration: 'none'
  };

  return (
    <div className="nav">
      <div className="leftItem">
        <div className="logo">
          <p>ZONA FOOTWEAR</p>
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
        <ul>
          {email ? email : " "} &nbsp;
          {email ? (
            // <Link style={navStyle} to="/store">
              <button className="signotBtn" style={navStyle} onClick={signOut}>
                <li>Sign Out</li>
              </button>
            // {/* </Link> */}
          ) : (
            <Link style={navStyle} to="/sign-in">
              <li>Sign In</li>
            </Link>
          )}
        </ul>
        <span className="icon">
          <SearchIcon />
        </span>
        <span className="icon">
          <ShoppingCartSharpIcon />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
