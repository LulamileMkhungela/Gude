import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFillBagCheckFill, BsCreditCard2BackFill, BsPersonCircle } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { MdLocationPin, MdNotifications, MdLogout } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

import './Settings.css'
import Switch from '../../../../components/Switch/Switch'

const Settings = () => {
    const [isToggled, setIsToggled] = useState(false)

  return (
    <div className="settings-container">
        <div className="settings-pri-container">
            <div className="icon-naming">
                <BsFillBagCheckFill size={25} />
                <p>My orders</p>
            </div>
            <div>
                <Link className="arrow-icon" to="#">
                    <BiChevronRight size={30}  />
                </Link>
            </div>
        </div>
        <div className="settings-pri-container">
            <div className="icon-naming">
                <BsCreditCard2BackFill size={25} />
                <p>My cards & wallets</p>
            </div>
            <div>
                <Link className="arrow-icon" to="#">
                    <BiChevronRight size={30}  />
                </Link>
            </div>
        </div>
        <div className="settings-pri-container">
            <div className="icon-naming">
                <MdLocationPin size={25} />
                <p>Address</p>
            </div>
            <div>
                <Link className="arrow-icon" to="#">
                    <BiChevronRight size={30}  />
                </Link>
            </div>
        </div>
        <div className="settings-pri-container">
            <div className="icon-naming">
                <MdNotifications size={25} />
                <p>Notification</p>
            </div>
            <div>
                <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
            </div>
        </div>
        <div className="settings-pri-container">
            <div className="icon-naming">
                <FaHeart size={25} />
                <p>WishLish</p>
            </div>
            <div>
                <Link className="arrow-icon" to="#">
                    <BiChevronRight size={30}  />
                </Link>
            </div>
        </div>
        <div className="settings-pri-container">
            <div className="icon-naming">
                <BsPersonCircle size={25} />
                <p>Market Profile</p>
            </div>
            <div>
                <Link className="arrow-icon" to="#">
                    <BiChevronRight size={30}  />
                </Link>
            </div>
        </div>
        <div className="settings-pri-container">
            <div className="icon-naming">
                <MdLogout size={25} />
                <p>Logout</p>
            </div>
            <div>
                <button className="setting-logout-btn">
                    <BiChevronRight size={30}  />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Settings