import React from 'react'
import { BsSearch } from "react-icons/bs"

import './MessageSearch.css'

function MessageSearch() {
  return (
    <div className="msg-search-container">
      <div className="msg-search-2nd-container">
        <BsSearch className="msg-search-icon" size={35} color={'black'} />
        <input type="text" placeholder="search for messages"/>
      </div>
    </div>
  )
}

export default MessageSearch