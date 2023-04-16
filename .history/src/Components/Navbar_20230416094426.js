import React from 'react';
import './Navbar.css';
import { Link, NavLink} from "react-router-dom";
function Navbar (){
    return (
        <div id="nav">
        <Link className="navbar-brand" to='/home'><img src="https://github.com/akankshaajoshi/EcoSavvy/blob/master/Resources/logo2.png?raw=true" alt="logo1" /></Link>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-fixed-top">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item float-right">
        <Link to="/home">Home</Link>
        </li>
        <li className="nav-item">
        <a href="/GPT">Eco-chat</a>
        </li>        
        <li className="nav-item">
        <NavLink to="/News">News</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink to="/CFC">CFC</NavLink>
        </li>        <li className="nav-item">
          <NavLink to="/About">About</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;