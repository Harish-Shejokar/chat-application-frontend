import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSocket } from '../../store/socket';
// import {io} from 'socket.io-client'
import "./chat.css";
import MessageBox from '../messageBox/messageBox';
import ScrollToBottom from "react-scroll-to-bottom"

const Chat = () => {
  const [msg, setMsg] = useState("");
  const [allChats, setAllChats] = useState([]);
  const [liveUserCount, setLiveUserCount] = useState(0);
  const [id, setId] = useState("");
  const location = useLocation();
  const socket = useSocket();
  const user = location.state.userName;
  // console.log("===============", socket)

  // const ENDPOINT = "http://localhost:6001";
  // const socket = io(ENDPOINT, { transports: ["websocket"] });

  const sendMessage = () => {
    if (msg.length > 0) {
      socket.emit("message", { message: msg, id })
      setMsg("");
    }
  }

  // useEffect for new User Joining
  useEffect(() => {
    console.log("new joining connection")
  },[socket])


  useEffect(() => {

    socket.on("sendMessage", ({ user, message, id }) => {
      console.log(`${user} : ${message} : ${id}`)
      setAllChats([...allChats, { user, message, id }]);
    });

    return () => {
      socket.off();
    }

  }, [allChats])



  
  useEffect(() => {
   
    setId(socket.id);
    socket.on("connect", () => {
      // console.log('event called abc')
      // alert("connected")
    });


    socket.emit('joined', { user });

    socket.on("userJoined", (data) => {
      console.log(`${data.user} ${data.message} ${data.id}`);
      console.log(data);
      setAllChats([...allChats, data]);
    });

    socket.on("totalUsers", (data) => {
      console.log("=====totalUsers======", data);
      setLiveUserCount(data.totalUsers)
    })

    socket.on("leave", (data) => console.log(data.message));
    console.log("#################################");
    return () => {
      socket.emit("disconnect");
      socket.off();
    }
  }, [socket])

  console.log(socket);
  return (
   
    <div className='chatBox'>
      <div className='border-b-2 border-white'>Total Live Users : {liveUserCount}</div>
      <div  className='box'>{allChats.length > 0 && allChats.map((elm, index) =>
        <MessageBox key={Math.random()} user={elm.user} text={elm.message} customClass={socket.id === elm.id ? "left" : "right"} />
      )}
      </div>
        
      {/* </ScrollToBottom> */}
      <div className=''>
        <div className='inputBox'>
          <input onKeyUp={(event)=> event.key ==="Enter" ? sendMessage() : null } value={msg} className='input' type='text' onChange={(e) => setMsg(e.target.value)} />
          <button onClick={sendMessage} className='btn'>Send</button>
        </div>
      </div>
      </div>
      
  )
}

export default Chat
