import React, { useRef } from "react"
import { useNavigate } from "react-router-dom";
import "./Login.css"

function Login() {
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
        //'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaXRlc2giLCJleHAiOjE2NTM5MzQyOTMsImlhdCI6MTY1MzkxNjI5M30.lNo-ObrcOXROukrzYDkxIJw-gIG1ddYSlGsJQYzZYsAYtmXkdecv9ItWn0WetwwxDicJcCM3LcyppG1oLnj9zQ'
      },
      body: JSON.stringify(user)
    };
    const fetchApi = async () => {
      try {
        let response = await fetch(`http://localhost:8081/api/jwt/authenticate`, requestOptions)
        let data = await response.json();
        localStorage.setItem('token', data.jwtToken);
        console.log(localStorage.getItem('token'));
        alert("logged in successfully")
        Navigate("/");
      } catch (err) {
        console.log(err);
        alert("invalid credentials");
      }
    }
    fetchApi()
  }

  return (
    <div className="divsd" data-testid="LoginTest"><center><br /><br />
      <h2>Login </h2><br />
      <form onSubmit={handleSubmit}  >
        <label htmlFor="userName">Username: &nbsp;&nbsp; </label>
        <input type="text" maxlength = "15" id="userName" name="userName" ref={refuserName} autoComplete="off" placeholder="your username" required />&nbsp;&nbsp;<br /><br />
        
        <label htmlFor="passWord">Password: &nbsp;&nbsp; </label>
        <input type="passWord" minlength = "8" maxlength = "15" id="passWord" name="passWord" ref={refpassWord} placeholder="your password" 
        required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*+`~'=?\|\]\[\(\)\-<>/]).{8,}"/>&nbsp;&nbsp;<br /><br />
        
        <input type="submit" className="button3" value="                           login                           " />
      </form>
      
      <label htmlFor="userName">new user : &nbsp;&nbsp;</label>
      <a className="register" href="/register"> Register Here </a>
      
      
      <br /><br /><br /><br /><br /><br />


    </center>
    </div>
  );
}
export default Login;