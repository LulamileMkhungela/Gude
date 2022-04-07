import React from 'react'

import './ChatOnline.css'
import default_img from '../../../images/default_img.png'

function ChatOnline() {
  return (
    <div className="chat-online">
        <div className="chat-online-friend">
            <div className="chat-online-image-container">
                <img className="chat-online-image" src={default_img} alt="profile image" />
                <div className="chat-online-badge"></div>
            </div>
            <span className="chat-online-name">your name</span>
        </div>
    </div>
  )
}

export default ChatOnline
