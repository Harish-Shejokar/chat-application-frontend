import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./chat.css"
const Chat = () => {
    const location = useLocation();
    console.log(location.state.userName)
  return (
    <div className='chatBox'>
      <div>{location.state.userName}</div>
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
