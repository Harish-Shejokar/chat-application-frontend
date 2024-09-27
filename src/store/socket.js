import { createContext, useContext, useMemo } from "react"
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket =  () => {
  const socket = useContext(SocketContext)
  return socket
}

const ENDPOINT = "http://localhost:6001";
export const SocketProvider = (props) => {
  const socket = useMemo(() => io(ENDPOINT), [])
  console.log('socketyyy', socket)
  return (
    <>
      <SocketContext.Provider value={socket}>
        {props.children}
      </SocketContext.Provider>

    </>
  )
}
