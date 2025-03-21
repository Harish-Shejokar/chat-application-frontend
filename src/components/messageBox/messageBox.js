import React from 'react'
import "./messageBox.css"

const MessageBox = ({ user, text, customClass }) => {
  return (
    <div className={customClass}>
      <div className=''>
        <span>{user}</span>
        {" "}
        <span>{text}</span>
      </div>
    </div>
  )
}

export default MessageBox
