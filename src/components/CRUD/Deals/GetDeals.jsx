import React, { useState } from "react"
import './GetDeals.css'

function GetDeals() {

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
        let response = await fetch(`http://localhost:9092/api/d2/getdeals`, requestOptions)
        let data = await response.json();
        console.log(data)
        setData(data)
      } catch (err) {
        console.log(err)
        alert("Invalid data!! Login First")
      }
    }
    fetchApi()
  }

  return (

    <div class="ddata"> 
      <center> <br/>
        <h2>Deals Data</h2>

        <form onSubmit={handleSubmit}  > <br/>

          <input type="submit" class="button3" value="Get Data" />
        </form><br />

        <table>

          <tr>
            <th><center>Deals No</center></th>
            <th><center>Deals Name</center></th>
            <th><center>Deals Details</center></th>
            <th><center>Payment</center></th>
          </tr>

          {data.map(user => (

            <tr>
              <td>{user.dealno}</td>
              <td>{user.dname}</td>
              <td>{user.ddetails}</td>
              <td><button><a href="/pay">Buy</a></button></td>
            </tr>
          ))}

        </table>
      </center>
    </div>

  );
}

export default GetDeals;