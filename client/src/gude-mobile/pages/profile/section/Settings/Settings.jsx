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
            <div>
                <Link className="icon-naming" to="#">
                    <BsFillBagCheckFill size={25} />
                    <p>My orders</p>
                </Link>
            </div>
            <div>
                <Link className="arrow-icon" to="#">
                    <BiChevronRight size={30}  />
                </Link>
            </div>
        </div>
        <div className="settings-pri-container">
            <div>
                <Link className="icon-naming" to="#">
                    <BsCreditCard2BackFill size={25} />
                    <p>My cards & wallets</p>
                </Link>
            </div>
            <div>
                <Link className="arrow-icon" to="#">
                    <BiChevronRight size={30}  />
                </Link>
            </div>
        </div>
        <div className="settings-pri-container">
            <div>
                <Link className="icon-naming" to="#">
                    <MdLocationPin size={25} />
                    <p>Address</p>
                </Link>
            </div>
            <div>
                <Link className="arrow-icon" to="#">
                    <BiChevronRight size={30}  />
                </Link>
            </div>
        </div>
        <div className="settings-pri-container">
            <div>
                <Link className="icon-naming" to="#">
                    <MdNotifications size={25} />
                    <p>Notification</p>
                </Link>
            </div>
            <div>
                <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
            </div>
        </div>
        <div className="settings-pri-container">
            <div>
                <Link className="icon-naming" to="#">
                    <FaHeart size={25} />
                    <p>WishLish</p>
                </Link>
            </div>
            <div>
                <Link className="arrow-icon" to="#">
                    <BiChevronRight size={30}  />
                </Link>
            </div>
        </div>
        <div className="settings-pri-container">
            <div>
                <Link className="icon-naming" to="#">
                    <BsPersonCircle size={25} />
                    <p>Market Profile</p>
                </Link>
            </div>
            <div>
                <Link className="arrow-icon" to="#">
                    <BiChevronRight size={30}  />
                </Link>
            </div>
        </div>
        <div className="settings-pri-container">
            <div>
                <Link className="icon-naming" to="#">
                    <MdLogout size={25} />
                    <p>Logout</p>
                </Link>
            </div>
            <div>
                <Link className="arrow-icon" to="#">
                    <BiChevronRight size={30}  />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Settings