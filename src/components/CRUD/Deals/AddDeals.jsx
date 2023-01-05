import React, { useRef } from "react"
import './AddDeals.css'

function AddDeals() {
  //const [ data,setData]=useState([])
  const refdealno = useRef('');
  const refdname = useRef('');
  const refddetails = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const dealno = refdealno.current.value
    const dname = refdname.current.value
    const ddetails = refddetails.current.value
    const token = localStorage.getItem('token')
    const user = {
      dealno: dealno, dname: dname, ddetails: ddetails
    }


    console.log(user)
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NDAxNDk3NCwiaWF0IjoxNjUzOTk2OTc0fQ.IsfuZJu1JbijLWzzak6Qu2aLBpFeLfUUBj3Ve30sHizFS9JfIvzkdhD1uhHYAPUO13zZBpXSIFwL00fGtrG8rA'
        'Authorization': `Bearer ${token}`,

      },
      body: JSON.stringify(user)
    };
    const fetchApi = async () => {
      try {
        let response = await fetch(`http://localhost:9091/api/d1/adddeal`, requestOptions)
        let data = await response.json();

        console.log(data)
        alert("Deals Added Successfully")
        // setData(data)    

      } catch (err) {
        console.log(err)
        alert("Invalid data!! Login First")
      }
    }
    fetchApi()
  }

  return (

    <div class="dadd"><center>
      <h2>Enter Deals Data</h2><br />

      <form onSubmit={handleSubmit}  >
        <label htmlFor="dealno">dealno: &nbsp;&nbsp; </label>
        <input type="text" id="dealno" name="dealno" ref={refdealno} />&nbsp;&nbsp;<br /><br />

        <label htmlFor="dname">dname: &nbsp;&nbsp; </label>
        <input type="text" id="dname" name="dname" ref={refdname} />&nbsp;&nbsp;<br /><br />

        <label htmlFor="ddetails">ddetails: &nbsp;&nbsp; </label>
        <input type="text" id="ddetails" name="ddetails" ref={refddetails} />&nbsp;&nbsp;<br /><br />

        <button className="btn btn-lg btn-info" type="submit" value="Submit">Insert Data</button>
      </form> </center>
    </div>

  );
}

export default AddDeals;
