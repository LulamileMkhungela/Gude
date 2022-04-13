import React from 'react'
import { format } from "timeago.js";

import './Message.css'
import default_img from '../../../images/default_img.png'

function Message({ message, own }) {
  return (
    <div className={own ? "msg-message own": "msg-message"}>
        <div className="msg-message-top">
            <p className="msg-message-text">{message.text}</p>
        </div>
        <div className="msg-message-bottom">{format(message.createdAt)}</div>
    </div>
  )
}

export default Message