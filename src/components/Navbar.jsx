import React from "react";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <div className="nav">
      <div className="leftItem">
        <div className="logo">
          <a href="https://github.com/MujuniEli">ZONA FOOTWEAR</a> 
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>Store</li>
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
      </div>
    </div>
  );
}

export default Navbar;
