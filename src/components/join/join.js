import React, { useEffect, useState } from 'react'
import "./join.css";
import { Link, useNavigate } from 'react-router-dom';
import { useSocket } from '../../store/socket';

const Login = () => {
  const [userName, setUserName] = useState();
  const navigate = useNavigate();



  // const socket = useSocket();
  
  // console.log("===============",socket)

  // const ENDPOINT = "http://localhost:6001";
  // const socket = io(ENDPOINT, { transports: ["websocket"] });

  // useEffect(() => {
  //   console.log("Inside useffect",socket.id);
  //   // socket.on("abc",()=>{
  //   //   console.log('event called abc')
  //   //   // alert('abc')
  //   // });
    
  // }, [socket])

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
