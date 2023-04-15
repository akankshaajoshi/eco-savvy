import React from 'react';
import './Navbar.css';

export function Navbar(){
    return (
        <div>
        <a className="navbar-brand" href="#">EcoSavvy</a>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-fixed-top">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item float-right">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Resources</a>
        </li>        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">News</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">CFC</a>
        </li>        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;