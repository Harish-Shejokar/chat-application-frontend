import React from 'react'
import "./messageBox.css"

const MessageBox = ({user, text, customClass}) => {
  return (
    <div className={"leftBox"}>
       <span>{user}</span>
       {" "}
       <span>{text}</span>
    </div>
  )
}

export default MessageBox
