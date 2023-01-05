import React, { useRef } from "react"
import './UpdateCoupons.css'

function UpdateCoupons() {
  const refcouponno = useRef('');
  const refcname = useRef('');
  const refcdetails = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const couponno = refcouponno.current.value
    const cname = refcname.current.value
    const cdetails = refcdetails.current.value
    const token = localStorage.getItem('token')
    const user = {
      couponno: couponno, cname: cname, cdetails: cdetails
    }

    console.log(user)
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NDAxNDk3NCwiaWF0IjoxNjUzOTk2OTc0fQ.IsfuZJu1JbijLWzzak6Qu2aLBpFeLfUUBj3Ve30sHizFS9JfIvzkdhD1uhHYAPUO13zZBpXSIFwL00fGtrG8rA'
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(user)
    };
    const fetchApi = async () => {
      try {
        let response = await fetch(`http://localhost:9093/api/c1/updatecoupon`, requestOptions)
        let data = await response.json();
        console.log(data)
        alert("Coupons Updated Successfully")
      } catch (err) {
        console.log(err)
        alert("Invalid data!! Login First")
      }
    }
    fetchApi()
  }

  return (

    <div class="cupdate"><center>
      <h2>Enter Coupons Data</h2><br />

      <form onSubmit={handleSubmit}  >
        <label htmlFor="couponno">couponno: &nbsp;&nbsp; </label>
        <input type="text" id="couponno" name="couponno" ref={refcouponno} />&nbsp;&nbsp;<br /><br />

        {/* <label htmlFor="citycode">cityCode: &nbsp;&nbsp; </label>
        <input type="text" id="citycode" name="citycode" ref={refCityCode} />&nbsp;&nbsp;<br /><br /> */}

        <label htmlFor="cname">cname: &nbsp;&nbsp; </label>
        <input type="text" id="cname" name="cname" ref={refcname} />&nbsp;&nbsp;<br /><br />

        <label htmlFor="cdetails">cdetails: &nbsp;&nbsp; </label>
        <input type="text-area" id="cdetails" name="cdetails" ref={refcdetails} />&nbsp;&nbsp;<br /><br />
        
        <button className="btn btn-lg btn-info" type="submit" value="Submit">Insert Data</button>
      </form> </center>
    </div>

  );
}

export default UpdateCoupons;


