import React from 'react'

import './Messages.css'
import MessageSlider from '../../components/message-slider/MessageSlider'
import MessageSliderData from '../../components/message-slider/MessageSliderData'
import MessageData from '../../components/message-information/MessageData'

function Messages() {
  return (
    <div className="messages-container">
      <div className="messages-product-container">
        <div className="messages-image-container">
          <MessageSlider MsgSlides={MessageSliderData} />
        </div>
        <div className="messages-data-container">
          <MessageData />
        </div>
      </div>
    </div>
  )
}

export default Messages