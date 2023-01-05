import React, { useRef } from "react"
import './DeleteCoupons.css'

function DeleteCoupons() {

  const refcouponno = useRef('');
  const handleSubmit = (e) => {
    e.preventDefault()
    const couponno = refcouponno.current.value
    const token = localStorage.getItem('token')
    const user = {
      couponno: couponno
    }
    console.log(user)
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NDAxNDk3NCwiaWF0IjoxNjUzOTk2OTc0fQ.IsfuZJu1JbijLWzzak6Qu2aLBpFeLfUUBj3Ve30sHizFS9JfIvzkdhD1uhHYAPUO13zZBpXSIFwL00fGtrG8rA'
        'Authorization': `Bearer ${token}`,

      },
      body: JSON.stringify(user)
    };
    const fetchApi = async () => {
      try {
        let response = await fetch(`http://localhost:9093/api/c1/deletecoupon/${couponno}`, requestOptions) //,,{Credential:'couponno'}
        let data = await response.json();
        console.log(data)
        alert("Deleted Coupons Successfully")
      } catch (err) {
        console.log(err)
        alert("Invalid data!! Login First")
      }
    }
    fetchApi()
  }

  return (

    <div class="cdelete"><center>
      <h2>Delete Coupons Data</h2><br />

      <form onSubmit={handleSubmit}  >
        <label htmlFor="couponno">couponno: &nbsp;&nbsp; </label>
        <input type="number" id="couponno" name="couponno" ref={refcouponno} />&nbsp;&nbsp;<br /><br />

        <button className="btn btn-lg btn-info" type="submit" value="Submit">Delete</button>
      </form> </center>
    </div>

  );
}

export default DeleteCoupons;