
import React, { useRef } from "react"
import './AddCoupons.css'

function AddCoupons() {
  //const [ data,setData]=useState([])


  const refcouponno = useRef('');
  // const refCityCode = useRef('');
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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmMiLCJleHAiOjE2NjAwNjE1ODgsImlhdCI6MTY2MDA0MzU4OH0.q8UnL55Anu1slV0xVhunb1zjFAx4CbPWB85EfI8pjzU5kuxyR0WuQIIeSNttxVw4fzDHLR_vIaHn1w5Rwqb1Mw'
        'Authorization': `Bearer ${token}`,

      },
      body: JSON.stringify(user)
    };
    const fetchApi = async () => {
      try {
        let response = await fetch(`http://localhost:9093/api/c1/addcoupon`, requestOptions)
        let data = await response.json();

        console.log(data)
        alert("Coupons Added Successfully")
        // setData(data)    

      } catch (err) {
        console.log(err)
        alert("Invalid data!! Login First")
      }
    }
    fetchApi()
  }

  return (

    <div className="add"><center>

      <h2>Enter Coupons Data</h2><br />

      <form onSubmit={handleSubmit}  >
        
        <label htmlFor="couponno">couponno: &nbsp;&nbsp; </label>
        <input type="text" id="couponno" name="couponno" ref={refcouponno} />&nbsp;&nbsp;<br /><br />

        <label htmlFor="cname">cname: &nbsp;&nbsp; </label>
        <input type="text" id="cname" name="cname" ref={refcname} />&nbsp;&nbsp;<br /><br />

        <label htmlFor="cdetails">cdetails: &nbsp;&nbsp; </label>
        <input type="text-area" id="cdetails" name="cdetails" ref={refcdetails} />&nbsp;&nbsp;<br /><br />

        <button className="btn btn-lg btn-info" type="submit" value="Submit">Insert Data</button>

      </form> </center>
    </div>

  );
}

export default AddCoupons;
