
import { NavLink } from "react-router-dom";
import React from "react"
import './Crud.css'

const Crud = () => {
  return (
    <ul class="crud">
      
      <div class="nav">
        <li> <NavLink to="/CouponsRoute">Coupons</NavLink></li>
      </div>
      <div class="nav">
        <li> <NavLink to="/DealsRoute">Deals</NavLink></li>
      </div>
    </ul>

  )
}

export default Crud
