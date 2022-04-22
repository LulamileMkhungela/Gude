import React, { useState } from 'react'
import { FaPen } from "react-icons/fa"
import { useSelector } from 'react-redux'

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

    const [listing,setListing] = useState(true)
    const [about,setAbout] = useState(false)
    const [draft,setDraft] = useState(false)
    const [soldItems,setSoldItems] = useState(false)

    const accType = useSelector(state => state.userLoggedInData.userInfo.acc_type);
    const userInfo = useSelector(state => state.userLoggedInData.userInfo)

    const closeModalHandler = () => setShow(false);

    const showModalHandler = () => {
        setShow(true);
        SetTogglestate(1);
    }

    const toggleTab = (index) => {
        SetTogglestate(index)
    }

  return (
    <div className="profile-container">
        <div className="profile-mother-container">
            <div className="profile-picture-cointainer">
                {/* fetch the cover image from the database*/}
                <img className="profile-cover-image" src={studentCover} alt="" />
                {/* fetch the profile pic from  the database and*/}
                <img className="profile-picture" src={profilePic} alt="" />
                {/** fetch the name from the database */}
                <p className="profile-name">{ userInfo.firstname + ' ' + userInfo.lastname }</p>
                {show ? <div onClick={closeModalHandler} className="profile-modal-drop"></div> : null}
                <button onClick={showModalHandler} className="profile-modal">
                    <FaPen size={30} />
                </button>
                <Modal show={show} close={closeModalHandler} />
            </div>
            <hr />
            <div className="profile-info">
                <div>
                
                    <div
                        className={togglestate === 1 ? "tab-active" : "tabs"}
                        onClick={() => {
                            setAbout(false)
                            setListing(true)
                            setDraft(false)
                            setSoldItems(false)
                            toggleTab(1)
                        }}>
                        Your listings
                    </div>
                <div
                        className={togglestate === 2 ? "tab-active" : "tabs"}
                        onClick={() => {
                            setAbout(false)
                            setListing(false)
                            setDraft(true)
                            setSoldItems(false)
                            toggleTab(2)
                        }}>
                        Drafts
                    </div>
                    <div className={togglestate === 3 ? "tab-active" : "tabs"}
                        onClick={() => {
                            setAbout(true)
                            setListing(false)
                            setDraft(false)
                            setSoldItems(false)
                            toggleTab(3)
                        }}>
                        About
                    </div>
                    <div className={togglestate === 4 ? "tab-active" : "tabs"}
                        onClick={() => {
                            setAbout(false)
                            setListing(false)
                            setDraft(false)
                            setSoldItems(true)
                            toggleTab(4)
                        }}>
                        Sold items
                    </div>
                </div>
                <div>

                    {
                        listing ? <Listing /> : ''
                    }
                    {/* <div className={togglestate === 2 ? "content  active-content" : "content"}>
                        <Draft />
                    </div> */}
                    {
                        draft   ?   <div className={togglestate === 3 ? "content  active-content" : "content"}>
                                        <Draft />
                                    </div>
                                : ''
                    }
                    {/* <div className={togglestate === 3 ? "content  active-content" : "content"}>
                        <About />
                    </div> */}
                    {
                        about ? <About /> : ''
                    }
                    {/* <div className={togglestate === 4 ? "content  active-content" : "content"}>
                        <Sold />
                    </div> */}
                    {
                        soldItems ? <Sold /> : ''
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile