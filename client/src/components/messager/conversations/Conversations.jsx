import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './Conversations.css'

function Conversations({ conversation, currentUser }) {
  const [user, setUser] = useState(null)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("http://localhost:8080/api/users?userId=" + friendId)
        setUser(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getUser()
  },[currentUser, conversation])

  return (
    <div className="conversations">
      <img 
        src={user?.profileImg ?  user.profileImg : PF + "/profile/default_img.png"} 
        alt="" 
        className="conversation-image"
      />
      <span className="conversation-name">{user?.firstname} {user?.lastname}</span>
    </div>  
  )
}

export default Conversations