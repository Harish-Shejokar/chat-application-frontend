import "./App.css";
import socketIO from "socket.io-client";
import {  Routes, Route } from "react-router-dom";
import Join from "./components/join/join";
import Chat from "./components/chat/chat";
import { SocketProvider, useSocket } from "./store/socket";
import { useEffect } from "react";



function App() {


  return <div className="">
  <SocketProvider>
  <Routes>
  
  <Route exact path="/" Component={Join}/>
  <Route  path="/chat" Component={Chat}/>
</Routes>
  </SocketProvider>
   
  </div>;
}

export default App;
