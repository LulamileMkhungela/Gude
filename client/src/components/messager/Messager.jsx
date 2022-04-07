import React from 'react'

import './Messager.css'
import Conversations from './conversations/Conversations'
import Message from './message/Message'
import ChatOnline from './chat-online/ChatOnline'

function Messager() {
  return (
    <div className="messager">
        <div className="messager-chat-menu">
            <div className="messager-chat-menu-wrapper">
                <input type="text" placeholder="search for messages" className="messager-chat-input"/>
                <Conversations />
                <Conversations />
                <Conversations />
                <Conversations />
                <Conversations />
            </div>
        </div>
        <div className="messager-chat-box">
            <div className="messager-chat-box-wrapper">
                <div className="messager-chat-box-top">
                    <Message />
                    <Message own={true}/>
                    <Message />
                    <Message />
                    <Message own={true}/>
                    <Message />
                    <Message own={true}/>
                    <Message />
                    <Message own={true}/>
                </div>
                <div className="messager-chat-box-bottom">
                    <textarea className="messager-chat-msg-input" placeholder="write something..."></textarea>
                    <button className="messager-submit-btn">send</button>
                </div>
            </div>
        </div>
        <div className="messager-chat-online">
            <div className="messager-chat-online-wrapper">
                <ChatOnline />
                <ChatOnline />
                <ChatOnline />
                <ChatOnline />
            </div>
        </div>
    </div>
  )
}

export default Messager