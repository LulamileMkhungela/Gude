import React from 'react'

import './Message.css'
import default_img from '../../../images/default_img.png'

function Message({ own }) {
  return (
    <div className={own ? "msg-message own": "msg-message"}>
        <div className="msg-message-top">
            <img src={default_img} alt="profile image" className="msg-message-image"/>
            <p className="msg-message-text">Hello this is a message</p>
        </div>
        <div className="msg-message-bottom">1 hour ago</div>
    </div>
  )
}

export default Message