import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowBack } from "react-icons/md"
import { FaPen } from "react-icons/fa"

import './Profile.css'
import studentCover from '../../images/student_cover.png'
import profilePic from '../../images/pro_pic.png'
import Modal from '../../components/profile-modal/Modal'

// sections
import Listing from './listing/Listing'
import About from './about/About'
import Draft from './draft/Draft'
import Sold from './sold/Sold'

const Profile = () => {
    const [togglestate, SetTogglestate] = useState(1);
    const [show, setShow] = useState(false);

    const closeModalHandler = () => setShow(false);

    const toggleTab = (index) => {
        SetTogglestate(index)
    }

  return (
    <div className="profile-container">
        <div className="profile-mother-container">
            <div className="profile-arrow">
                <Link to="/home">
                    <MdArrowBack size={30} color={'black'} />
                </Link>
            </div>
            <div className="profile-picture-cointainer">
                {/* fetch the cover image from the database*/}
                <img className="profile-cover-image" src={studentCover} alt="" />
                {/* fetch the profile pic from  the database and*/}
                <img className="profile-picture" src={profilePic} alt="" />
                {/** fetch the name from the database */}
                <p className="profile-name">Thabiso Hlatshayo</p>
                {show ? <div onClick={closeModalHandler} className="profile-modal-drop"></div> : null}
                <button onClick={() => setShow(true)} className="profile-modal">
                    <FaPen size={30} />
                </button>
                <Modal show={show} close={closeModalHandler} />
            </div>
            <hr />
            <div className="profile-info">
                <div>
                    <div
                        className={togglestate === 1 ? "tab-active" : "tabs"}
                        onClick={() => toggleTab(1)}>
                        Your listings
                    </div>
                    <div
                        className={togglestate === 2 ? "tab-active" : "tabs"}
                        onClick={() => toggleTab(2)}>
                        Drafts
                    </div>
                    <div className={togglestate === 3 ? "tab-active" : "tabs"}
                        onClick={() => toggleTab(3)}>
                        About
                    </div>
                    <div className={togglestate === 4 ? "tab-active" : "tabs"}
                        onClick={() => toggleTab(4)}>
                        Sold items
                    </div>
                </div>
                <div>
                    <div className={togglestate === 1 ? "content  active-content" : "content"}>
                        <Listing />
                    </div>
                    <div className={togglestate === 2 ? "content  active-content" : "content"}>
                        <Draft />
                    </div>
                    <div className={togglestate === 3 ? "content  active-content" : "content"}>
                        <About />
                    </div>
                    <div className={togglestate === 4 ? "content  active-content" : "content"}>
                        <Sold />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile