import React, { useRef } from "react"
import './DeleteDeals.css'

function DeleteDeals() {

  const refdealno = useRef('');
  const handleSubmit = (e) => {
    e.preventDefault()
    const dealno = refdealno.current.value
    const token = localStorage.getItem('token')
    const user = {
      dealno: dealno
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
        let response = await fetch(`http://localhost:9091/api/d1/deletedeal/${dealno}`, requestOptions) //,,{Credential:'dealno'}
        let data = await response.json();
        console.log(data)
        alert("Deleted Deals Successfully")
      } catch (err) {
        console.log(err)
        alert("Invalid data!! Login First")
      }
    }
    fetchApi()
  }

  return (

    <div class="ddelete"><center>
      <h2>Delete Deals Data</h2><br />

      <form onSubmit={handleSubmit}  >
        <label htmlFor="dealno">dealno: &nbsp;&nbsp; </label>
        <input type="number" id="dealno" name="dealno" ref={refdealno} autoComplete="off" placeholder="Deals code" />&nbsp;&nbsp;<br /><br />

        <button className="btn btn-lg btn-info" type="submit" value="Submit">Delete</button>
      </form> </center>
    </div>

  );
}

export default DeleteDeals;