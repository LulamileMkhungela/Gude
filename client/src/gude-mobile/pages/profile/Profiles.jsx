import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from "react-icons/fa";
import { MdSettings } from "react-icons/md";

import './Profile.css'
import img from '../../../images/default_img.png'

//  Mobile modal screen
import MobileModal from '../../components/mobile-modal/MobileModal'

// Profile screens
import MobileListing from './section/Listing/MobileListing'
import MobileDraft from './section/Draft/MobileDraft'
import MobileAbout from './section/About/MobileAbout'
import MobileSold from './section/Sold/MobileSold'
import Settings from './section/Settings/Settings'

const Profiles = () => {
  const [toggle, setToggle] = useState(0)
  const [modalShow, setModalShow] = useState(false)

  const closeMobileModal = () => setModalShow(false)

  return (
    <div>
      <div className="profiles-top">
        <button className="profiles-left-arrow">
          <Link to='/home'>
            <FaChevronLeft color={'white'}/>
          </Link>
        </button>
        <div className="profiles-flex">
          <div className="profile-name-image">
            <img src={img} alt="" />
            <p>Thabiso</p>
          </div>
          <div className="profies-btn-container">
            <button onClick={() => setModalShow(true)}>Edit</button>
          </div>
        </div>
        {modalShow ? <div onClick={closeMobileModal} className="profiles-back-drop"></div>: null}
        <MobileModal modalShow={modalShow} closeMobileModal={closeMobileModal}/>
      </div>
      <div className="profile-inline-btn">
        <div className="profile-line">
          <div 
            className={toggle === 0 ? "profile-spacing-active" : "profile-spacing"}
            onClick={() => setToggle(0)}
            ><MdSettings size={20} /></div>
          <div 
            style={{marginLeft: 20}} 
            className={toggle === 1 ? "profile-spacing-active" : "profile-spacing"}
            onClick={() =>setToggle(1)}
          >Listings</div>
          <div 
            style={{marginLeft: 20}} 
            className={toggle === 2 ? "profile-spacing-active" : "profile-spacing"}
            onClick={() =>setToggle(2)}
          >Draft</div>
          <div 
            style={{marginLeft: 20}} 
            className={toggle === 3 ? "profile-spacing-active" : "profile-spacing"}
            onClick={() =>setToggle(3)}
          >About</div>
          <div 
            style={{marginLeft: 20}} 
            className={toggle === 4 ? "profile-spacing-active" : "profile-spacing"}
            onClick={() =>setToggle(4)}
          >Sold</div>
        </div>
      </div>
      <div className="profilse-line"></div>
      <div className="profiles-screens">
        {toggle === 0 && <Settings />}
        {toggle === 1 && <MobileListing />}
        {toggle === 2 && <MobileDraft />}  
        {toggle === 3 && <MobileAbout />}
        {toggle === 4 && <MobileSold />}
      </div>
    </div>
  )
}

export default Profiles