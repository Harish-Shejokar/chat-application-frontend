import React, { useState } from 'react'
import "./join.css";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState();
  const navigate = useNavigate();
  const handleJoinChat = () => {
    navigate("/chat",{state : {userName}})
  }
  return (
    <div>
       Join Page
       <input type='text' placeholder='Enter Your Name' onChange={(e)=> setUserName(e.target.value)}/>
       <button onClick={handleJoinChat}>Join Chat</button>
    </div>
  )
}

export default Login
