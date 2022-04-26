import React, {useEffect, useState} from 'react'
import { 
  MdOutlineWork, 
  MdHome, 
  MdLocationOn 
} from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

import './About.css'
import {useSelector} from "react-redux";
import axios from "axios";
import get from '../../../get';
function About() {
const accType = useSelector(state => state.userLoggedInData.userInfo.acc_type);
const userInfo = useSelector(state => state.userLoggedInData.userInfo);

const [studentInfo,setStudentInfo] = useState({});
const [userStudentInfo,setUserStudentInfo] = useState({})

useEffect(() => {

  if(accType==='student') {
    ( async () => {

      console.log(accType)
      await axios({
        
        url : 'http://localhost:8080/auth/infor',
        method : 'GET',
        headers : {Authorization :  localStorage.getItem('jwt')}
    
      }).then(resp => {
        setStudentInfo(resp.data.student_info)
        setUserStudentInfo(resp.data.user_info)
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
                  <p>{userStudentInfo.firstname + " " + userStudentInfo.lastname}</p>
              </div>
              <div className="profile-input-box">
                <FaGraduationCap size={30} className='about-icon'/>
                {
                  accType == 'student' ? <p>{'0' + studentInfo.contact}</p> : ''
                }
              </div>
              <div className="profile-input-box">
                <FaGraduationCap size={30} className='about-icon'/>
                {
                  accType === 'student' ? <p>{studentInfo.tertiary_name}</p> : ''
                }
              </div>
              <div className="profile-input-box">
                <MdHome size={30} className='about-icon'/>
                <p>something here</p>
              </div>
              <div className="profile-input-box">
                <MdLocationOn size={30} className='about-icon'/>
                {
                  accType === 'student' ? <p>{studentInfo.location}</p> : ''
                }
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
