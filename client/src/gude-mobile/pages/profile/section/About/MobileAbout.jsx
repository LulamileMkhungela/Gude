import React from 'react'
import { MdWork, MdHome, MdLocationOn } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

import './MobileAbout.css'

const MobileAbout = () => {
  return (
    <div className="mobile-about-container">
      <div className="mobile-about-intro">
        <h1>Introduction</h1>
      </div>
      <div className="mobile-about-due">
        <div className="mobile-icon-design">
          <MdWork className="mobile-icon" />
        </div>
        <div className="mobile-paragraph-design">
          <p>Data here</p>
        </div>
      </div>
      <div className="mobile-about-due">
        <div className="mobile-icon-design">
          <FaGraduationCap className="mobile-icon" />
        </div>
        <div className="mobile-paragraph-design">
          <p>Data here</p>
        </div>
      </div>
      <div className="mobile-about-due">
        <div className="mobile-icon-design">
          <FaGraduationCap className="mobile-icon" />
        </div>
        <div className="mobile-paragraph-design">
          <p>Data here</p>
        </div>
      </div>
      <div className="mobile-about-due">
        <div className="mobile-icon-design">
          <MdHome className="mobile-icon" />
        </div>
        <div className="mobile-paragraph-design">
          <p>Data here</p>
        </div>
      </div>
      <div className="mobile-about-due">
        <div className="mobile-icon-design">
          <MdLocationOn className="mobile-icon" />
        </div>
        <div className="mobile-paragraph-design">
          <p>Data here</p>
        </div>
      </div>
    </div>
  )
}

export default MobileAbout