import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPen } from "react-icons/fa"
import { BsThreeDots, BsGiftFill } from "react-icons/bs"
import { TiTick } from "react-icons/ti"
import { IoMdShareAlt } from "react-icons/io";

import './MessageData.css'

function MessageData() {
    const [data, setData] = useState([
        {
            name: "HP Laptop",
            avail: 9,
            state: "old",
            sku: "hf7328327y7ygfu83",
            price: 8500,
            location: "Midrand",
            views: 8,
            listed: "12/04/2021",
            desc: "HP laptop with 1TB....bla bla bla"
        },
    ])
    
  return (
    <div>
        {data.map((info, index) => {
            return (
                <div key={index} className="msg-container">
                    <div className="msg-header-icon">
                        <h2 className="msg-header">{info.name}</h2>
                        <Link to="/add">
                            <FaPen className="msg-icon"/>
                        </Link>
                    </div>
                    <p className="msg-avail">{info.avail} avaiable / {info.state}</p>
                    <div className="msg-sku-price-element">
                        <p className="msg-sku">SKU number: {info.sku}</p>
                        <p className="msg-price">R{info.price}</p>
                    </div>
                    <p className="msg-avail">Locations: {info.location}</p>
                    <div className="msg-views-listed">
                        <p className="msg-views">{info.views} views</p>
                        <p className="msg-listed">listed on: {info.listed}</p>
                    </div>
                    <div className="msg-line">
                        <hr />
                        <p>Description</p>
                        <hr />
                    </div>
                    <p>{info.desc}</p>
                    <div className="msg-btn-row">
                        <button className="msg-btn-primary"><TiTick size={20}/> Mark as sold</button>
                        <Link to="/promotion">
                            <button className="msg-btn-primary"><BsGiftFill size={20}/> Promote</button>
                        </Link>
                        <button className="msg-btn-primary"><IoMdShareAlt size={20}/> Share</button>
                        <button className="msg-btn-options"><BsThreeDots size={20}/></button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default MessageData