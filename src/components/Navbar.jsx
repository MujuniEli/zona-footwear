import React, { useContext } from "react";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { CartContext } from '../context/CartContext'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function Navbar() {

  const { cartData } = useContext(CartContext)

  const navigate = useNavigate();
  const isAuth = localStorage.getItem("auth");
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const email = "Welcome " + userDetails.username;
  const signOut = () =>{
    localStorage.removeItem('auth')
    navigate("/store")
  }

  const goToCart = () => {
    navigate("/cart")
  }
  
  const navStyle = {
    color:'black',
    textDecoration: 'none'
  };

  return (
    <div className="nav" style={{ zIndex: '200' }}>
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
        {/* <span className="icon">
          <ShoppingCartSharpIcon />
        </span> */}
        <IconButton onClick={goToCart}>
          <StyledBadge badgeContent={cartData.length} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
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
        )}
        &nbsp;
      </div>
    </div>
  );
}

export default Navbar;
