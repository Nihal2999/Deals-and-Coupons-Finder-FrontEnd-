import { NavLink } from "react-router-dom";
import React from "react"
import './Navbar.css'


function Navbar() {
  return (
    <div>
      <upper>
        <div class="nav">
          <li><NavLink to="/">Home</NavLink></li>
        </div>
        <div class="nav">
          <li> <NavLink to="/Login">Login/Signup</NavLink></li>
        </div>
        <div class="nav">
          <li><NavLink to="/Crud">Deals/Coupons</NavLink></li>
        </div>
        <div class="nav">
          <li><NavLink to="/Logout">Logout</NavLink></li>
        </div>
        <div class="nav">
          <li> <NavLink to="/Contact">Contact</NavLink></li>
        </div>
        <div class="nav">
          <li><NavLink to="/About">About</NavLink></li>
        </div>

      </upper>
    </div>
  )
}

export default Navbar;

