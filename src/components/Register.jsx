import React, { useRef } from "react"
import { useNavigate } from "react-router-dom";
import "./Register.css"

function Register() {
  const refuserName = useRef('');
  const refpassWord = useRef('');
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    const userName = refuserName.current.value
    const passWord = refpassWord.current.value
    const user = {
      userName: userName, passWord: passWord
    }
    console.log(user)
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    };
    const fetchApi = async () => {
      try {
        let response = await fetch(`http://localhost:8081/api/jwt/register`, requestOptions)
        let data = response.json();

        console.log(data)
        alert('Registered Successfully')
        Navigate("/")

      } catch (err) {
        console.log(err)
        alert('error')
      }

    }
    fetchApi()

  }

  return (

    <div className="register" data-testid="RegisterTest"><center><br /><br />
      <h2>Register here</h2><br />

      <form onSubmit={handleSubmit}  >
        <label htmlFor="userName">Username: &nbsp;&nbsp; </label>
        <input type="text" maxlength = "15" id="userName" name="userName" ref={refuserName} autoComplete="off" placeholder="your username" maxLength={10} required/>&nbsp;&nbsp;<br /><br />
        
        <label htmlFor="passWord">Password: &nbsp;&nbsp; </label>
        <input type="passWord"   minlength = "8" maxlength = "15" id="passWord" name="passWord" ref={refpassWord} placeholder="your password" maxLength={10} 
        required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?\|\]\[\(\)\-<>/]).{8,}"/>&nbsp;&nbsp;<br /><br />
        
        <input type="submit" className="button" value="                           submit                           " />
      </form> <br /><br /><br /><br /><br /><br /><br /><br />
    </center>
    </div>

  );
}

export default Register;




