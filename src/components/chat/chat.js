import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSocket } from '../../store/socket';
// import {io} from 'socket.io-client'
import "./chat.css";
import MessageBox from '../messageBox/messageBox';

const Chat = () => {
  const [msg, setMsg] = useState("");
  const [allChats, setAllChats] = useState([]);
  const [id, setId] = useState("");
  const location = useLocation();
  const socket = useSocket();
  const user = location.state.userName;
  // console.log("===============", socket)

  // const ENDPOINT = "http://localhost:6001";
  // const socket = io(ENDPOINT, { transports: ["websocket"] });

  const sendMessage = () => {
    socket.emit("message", { message: msg, id })

    setMsg("");
  }

  useEffect(() => {

    socket.on("sendMessage", ({ user, message, id }) => {
      console.log(`${user} : ${message}`)
      setAllChats([...allChats, {user, message, id}]);
    });

    return () => {
      socket.off();
    }

  }, [allChats])



  useEffect(() => {
    console.log("Inside useffect", socket.id);
    setId(socket.id);
    socket.on("connect", () => {
      // console.log('event called abc')
      // alert("connected")
    });


    socket.emit('joined', { user });

    socket.on("userJoined", (data) => {
      console.log(`${data.message}`);
      setAllChats([...allChats, data]);
    });




    // socket.on("userJoined", (data)=>{
    //   console.log(`${data.user} - ${data.message}`);
    // });

    socket.on("leave", (data) => console.log(data.message));

    return () => {
      socket.emit("disconnect");
      socket.off();
    }

  }, [socket])

  return (
    <div className='chatBox'>
      <div>{allChats.length > 0 && allChats.map((elm, index) => <MessageBox user={elm.user} text={elm.message} customClass={""}/>)}</div>
      <div className=''>
        <div className='inputBox'>
          <input value={msg} className='input' type='text' onChange={(e) => setMsg(e.target.value)} />
          <button onClick={sendMessage} className='btn'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Chat
