import React, {  useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSocket } from '../../store/socket';
// import {io} from 'socket.io-client'

const Chat = () => {
  const location = useLocation();
  const socket = useSocket();
  const user = location.state.userName;
  console.log("===============",socket)

  // const ENDPOINT = "http://localhost:6001";
  // const socket = io(ENDPOINT, { transports: ["websocket"] });

  useEffect(() => {
    // console.log("Inside useffect",socket.id);
    socket.on("connect",()=>{
      // console.log('event called abc')
      alert("connected")
    });
    socket.emit('joined', {user});
    socket.on("userJoined",(data)=>{
      console.log(`${data.message}`);
    });

    
    // socket.on("userJoined", (data)=>{
    //   console.log(`${data.user} - ${data.message}`);
    // });
   
    
  }, [socket])

  return (
    <div className='chatBox'>
      <div>{}</div>
      <div className='box'>


        <div className='inputBox'>
          <input className='input' type='text' />
          <button className='btn'>Send</button>

        </div>
      </div>
    </div>
  )
}

export default Chat
