import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from "react-icons/fa";

import './Profile.css'
import img from '../../../images/default_img.png'

import MobileListing from './section/Listing/MobileListing'
import MobileDraft from './section/Draft/MobileDraft'
import MobileAbout from './section/About/MobileAbout'
import MobileSold from './section/Sold/MobileSold'

const Profiles = () => {
  const [toggle, setToggle] = useState(1)

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
            <button>Edit</button>
          </div>
        </div>
      </div>
      <div className="profile-inline-btn">
        <div className="profile-line">
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
        <hr />
      </div>
      <div className="profiles-screens">
        {toggle === 1 && <MobileListing />}
        {toggle === 2 && <MobileDraft />}  
        {toggle === 3 && <MobileAbout />}
        {toggle === 4 && <MobileSold />}
      </div>
    </div>
  )
}

export default Profiles