import { createContext, useContext, useMemo } from "react"
import { io } from "socket.io-client";

const SocketContext = createContext(null);
const chatContext = createContext(null);

export const useSocket =  () => {
  const socket = useContext(SocketContext)
  return socket.defaultSocket;
}

export const useChatSocket = () => {
  return useContext(SocketContext).chatContext;
}

const ENDPOINT = "http://localhost:6001";
export const SocketProvider = (props) => {
  const defaultSocket = useMemo(() => io(ENDPOINT), [])
  const chatSocket = useMemo(() => io(`${ENDPOINT}/chat`), [])

  const context = { defaultSocket, chatContext };
  
  console.log('socketyyy', defaultSocket, "===========", chatSocket);
  return (
    <>
      <SocketContext.Provider value={context}>
        {props.children}
      </SocketContext.Provider>
    </>
  )
}
