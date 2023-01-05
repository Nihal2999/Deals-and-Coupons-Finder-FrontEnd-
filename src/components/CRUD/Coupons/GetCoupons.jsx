import React, { useState } from "react"
import './GetCoupons.css'

function GetCoupons() {
  const [data, setData] = useState([])
  //const [token,setToken]=useState(initialToken)
  const handleSubmit = (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')



    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NDAxNDk3NCwiaWF0IjoxNjUzOTk2OTc0fQ.IsfuZJu1JbijLWzzak6Qu2aLBpFeLfUUBj3Ve30sHizFS9JfIvzkdhD1uhHYAPUO13zZBpXSIFwL00fGtrG8rA',
        'Authorization': `Bearer ${token}`,
      },
    };
    const fetchApi = async () => {
      try {
        let response = await fetch(`http://localhost:9094/api/c2/getcoupons`, requestOptions)
        let data = await response.json();
        console.log(data)
        setData(data)
      } 
      catch (err) {
        console.log(err)
        alert("Invalid data!! Login First")
      }
    }
    fetchApi()

  }

  return (

    <div class="cdata">
      <center> <br/>
        <h2>Coupons Data</h2>

        <form onSubmit={handleSubmit} > <br/>

          <input type="submit" class="button" value="Get Data" />
        </form> <br />

        <table>

          <tr>
            <th><center>coupon no</center></th>
            <th><center>Coupons Name</center></th>
            <th><center>Coupons Details</center></th>

          </tr>

          {data.map(user => (



            <tr>
              <td>{user.couponno}</td>

              <td>{user.cname}</td>

              <td>{user.cdetails}</td>


            </tr>





          ))}

        </table>
      </center>
    </div>

  );
}

export default GetCoupons;