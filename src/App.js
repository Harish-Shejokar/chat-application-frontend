import "./App.css";
import socketIO from "socket.io-client";

const ENDPOINT = "http://localhost:4500/";
const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

function App() {

  socket.on("connection", () => {
    //task or event 
  })

  return <div className="">
    hey
  </div>;
}

export default App;
