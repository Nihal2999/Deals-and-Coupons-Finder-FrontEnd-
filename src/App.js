import './App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Home from "./components/Home/Home"
import Register from './components/Register'

import DealsRoute from "./components/CRUD/Deals/DealsRoute"
import AddDeals from './components/CRUD/Deals/AddDeals'
import DeleteDeals from './components/CRUD/Deals/DeleteDeals'
import UpdateDeals from './components/CRUD/Deals/UpdateDeals'
import GetDeals from './components/CRUD/Deals/GetDeals'

import CouponsRoute from "./components/CRUD/Coupons/CouponsRoute"
import AddCoupons from './components/CRUD/Coupons/AddCoupons'
import DeleteCoupons from './components/CRUD/Coupons/DeleteCoupons'
import UpdateCoupons from './components/CRUD/Coupons/UpdateCoupons'
import GetCoupons from './components/CRUD/Coupons/GetCoupons'

import Login from "./components/Login"
import Logout from "./components/Logout"
import Crud from './components/CRUD/Crud'

import Payment from './components/Payment/Payment'

import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="div98" >

      <Router>
        <br /><br /><br />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/Logout" element={<Logout />} />
          <Route exact path="/crud" element={<Crud />} />

          <Route exact path='/pay' element={<Payment/>}/>

          <Route exact path="/DealsRoute" element={<DealsRoute />} />
          <Route exact path="/AddDeals" element={<AddDeals />} />
          <Route exact path="/DeleteDeals" element={<DeleteDeals />} />
          <Route exact path="/UpdateDeals" element={<UpdateDeals />} />
          <Route exact path="/GetDeals" element={<GetDeals />} />

          <Route exact path="/CouponsRoute" element={<CouponsRoute />} />
          <Route exact path="/AddCoupons" element={<AddCoupons />} />
          <Route exact path="/DeleteCoupons" element={<DeleteCoupons />} />
          <Route exact path="/UpdateCoupons" element={<UpdateCoupons />} />
          <Route exact path="/GetCoupons" element={<GetCoupons />} />

        </Routes>
        <Navbar />
      </Router>
      <Header />
      <Footer />
      <div>
        <lform />
      </div>
    </div>

  )
}


export default App;
