import React, {useEffect} from 'react'
import { 
  MdOutlineWork, 
  MdHome, 
  MdLocationOn 
} from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

import './About.css'
import {useSelector} from "react-redux";
import axios from "axios";

function About() {
const accType = useSelector(state => state.userLoggedInData.userInfo.acc_type);

useEffect(() => {

  if(accType) {
    ( async () => {
      console.log(accType)
      await axios({
        
        url : 'http://localhost:8080/auth/infor',
        method : 'GET',
    
      }).then(resp => {
        console.log(resp)
      })
    })()
  }
  
},[accType])

  return (
    <div className="about-container">
        <div className="about-form-content">
          <div className="about-form">
            <div className="about-title">Introduction</div>
            <div className="about-input-boxes">
              <div className="profile-input-box">
                <MdOutlineWork size={30} className='about-icon'/>
                <p>something here</p>
              </div>
              <div className="profile-input-box">
                <FaGraduationCap size={30} className='about-icon'/>
                <p>something here</p>
              </div>
              <div className="profile-input-box">
                <FaGraduationCap size={30} className='about-icon'/>
                <p>something here</p>
              </div>
              <div className="profile-input-box">
                <MdHome size={30} className='about-icon'/>
                <p>something here</p>
              </div>
              <div className="profile-input-box">
                <MdLocationOn size={30} className='about-icon'/>
                <p>something here</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
