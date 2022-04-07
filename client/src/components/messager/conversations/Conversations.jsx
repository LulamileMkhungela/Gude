import React from 'react'

import './Conversations.css'
import default_img from '../../../images/default_img.png'

function Conversations() {
  return (
    <div className="conversations">
        <img src={default_img} alt="profile image" className="conversation-image"/>
        <span className="conversation-name">you name</span>
    </div>
  )
}

export default Conversations