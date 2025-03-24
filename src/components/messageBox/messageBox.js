import React from 'react'
import "./messageBox.css"

const MessageBox = ({ user, text, customClass }) => {
  customClass = customClass === "right" ? "rightInnerBox": "leftInnerBox";
  return (
    <div className={customClass}>
      <div >
        <span className=''>{user}</span>
        {" : "}
        <span>{text}</span>
      </div>
    </div>
  )
}

export default MessageBox
