import React from 'react'
import "./messageBox.css"

const MessageBox = ({ user, text,singleTick, customClass }) => {
  customClass = customClass === "right" ? "rightInnerBox": "leftInnerBox";
  return (
    <div className={customClass}>
      <div >
        <span className=''>{user}</span>
        {" : "}
        <span>{text}</span>
        {singleTick && <span>✔</span>}
      </div>
    </div>
  )
}

export default MessageBox
