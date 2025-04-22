import { createContext, useContext, useMemo } from "react"
import { io } from "socket.io-client";

const SocketContext = createContext(null);
// const chatContext = createContext(null);

export const useSocket =  () => {
  const socket = useContext(SocketContext)
  return socket
}

export const useChatSocket = () => {
  return useContext(SocketContext);
}

const ENDPOINT = "http://localhost:6001";
export const SocketProvider = (props) => {
  const socket = useMemo(() => io(ENDPOINT), [])
  const chatSocket = useMemo(() => io(`${ENDPOINT}/chat`), [])

  
  
  console.log('socketyyy', socket, "===========", chatSocket);
  return (
    <>
      <SocketContext.Provider value={socket}>
        {props.children}
      </SocketContext.Provider>
    </>
  )
}
