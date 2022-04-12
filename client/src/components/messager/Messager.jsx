import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { io } from 'socket.io-client'

import './Messager.css'
import Conversations from './conversations/Conversations'
import Message from './message/Message'

function Messager() {
    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const [arrivalMessage, setArrivalMessage] = useState(null)
    
    const socket = useRef()
    const scrollRef = useRef()
    const user = useSelector(state => state.userLoggedInData.userInfo.id)

    useEffect(() => {
        socket.current = io("ws://localhost:8900") 
        socket.current.on("getMessage", data => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            })
        })
    }, [])

    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && 
        setMessages((prev) => [...prev, arrivalMessage.sender])
    }, [arrivalMessage, currentChat])
    
    useEffect(() => {
        socket.current.emit("addUser", user) //user._id
        socket.current.on("getUsers", (users) => {
            console.log(users)
        })
    }, [user])

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/conversations/" + user)
                setConversations(res.data)
            } catch(err) {
                console.log(err);
            }
        }
       getConversations()
    },[user])

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/messages/" + currentChat?._id)
                setMessages(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getMessages()
    },[currentChat])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const message = {
            sender: user,
            text: newMessage,
            conversationId: currentChat._id
        }

        const receiverId = currentChat.members.find((member) => member !== user)

        socket.current.emit("sendMessage", {
            senderId: user,
            receiverId,
            text: newMessage
        })

        try {
            const res = await axios.post("http://localhost:8080/api/messages", message)
            setMessages([...messages, res.data])
            setNewMessage("")
        } catch (err) {
            console.log(err)
        }
    }

    

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    },[messages])

  return (
    <div className="messager">
        <div className="messager-chat-menu">
            <div className="messager-chat-menu-wrapper">
                <input type="text" placeholder="search for messages" className="messager-chat-input"/>
                {conversations.map((c, index) => {
                    return (
                        <div key={index} onClick={() => setCurrentChat(c)}>
                            <Conversations 
                                conversation={c} 
                                currentUser={user} 
                            />    
                        </div>
                    )
                })} 
            </div>
        </div>
        <div className="messager-chat-box">
            <div className="messager-chat-box-wrapper">
                {currentChat ? 
                    (
                        <div>
                            <div className="messager-chat-box-top">
                            {messages.map((m, index) => {
                                return (
                                    <div key={index} ref={scrollRef}>
                                        <Message message={m} own={m.sender === user} />    
                                    </div>
                                )
                            })}  
                            </div>
                            <div className="messager-chat-box-bottom">
                                <textarea 
                                    className="messager-chat-msg-input" 
                                    placeholder="write something..."
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    value={newMessage}
                                ></textarea>
                                <button className="messager-submit-btn" onClick={handleSubmit} >send</button>
                            </div>
                        </div>
                    ) : (
                        <span className="messages-no-conversation">Open a conversation to start a chat</span>
                     )}
            </div>
        </div>
    </div>
  )
}

export default Messager