
import { NavLink } from "react-router-dom";
import React from "react"
import './DealsRoute.css'

const DealsRoute = () => {
  return (

    <ul class="up">
      <div class="nav">
        <li> <NavLink to="/GetDeals">Get All Deals</NavLink></li>
      </div>
      <div class="nav">
        <li> <NavLink to="/AddDeals">Add Deals</NavLink></li>
      </div>
      <div class="nav">
        <li> <NavLink to="/UpdateDeals">Update Deals</NavLink></li>
      </div>
      <div class="nav">
        <li> <NavLink to="/DeleteDeals">Delete Deals</NavLink></li>
      </div>
    </ul>

  )
}

export default DealsRoute
