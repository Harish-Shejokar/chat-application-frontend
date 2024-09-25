import "./App.css";
import socketIO from "socket.io-client";
import {  Routes, Route } from "react-router-dom";
import Join from "./components/join/join";
import Chat from "./components/chat/chat";

const ENDPOINT = "http://localhost:4500/";
const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

function App() {

  socket.on("connection", () => {
    //task or event 
  })

  return <div className="">
   <Routes>
  
     <Route exact path="/" Component={Join}/>
     <Route  path="/chat" Component={Chat}/>
   </Routes>
  </div>;
}

export default App;
