
import { NavLink } from "react-router-dom";
import React from "react"
import './CouponsRoute.css'

const CouponsRoute = () => {
  return (
    <ul class="up">
      <div class="nav">
        <li> <NavLink to="/GetCoupons">Get All Coupons</NavLink></li>
      </div>
      <div class="nav">
        <li> <NavLink to="/AddCoupons">Add Coupons</NavLink></li>
      </div>
      <div class="nav">
        <li> <NavLink to="/UpdateCoupons">Update Coupons</NavLink></li>
      </div>
      <div class="nav">
        <li> <NavLink to="/DeleteCoupons">Delete Coupons</NavLink></li>
      </div>
    </ul>

  )
}

export default CouponsRoute
