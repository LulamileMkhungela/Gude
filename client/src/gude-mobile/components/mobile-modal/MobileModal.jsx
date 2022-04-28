import React from 'react'
import { 
    MdPerson, 
    MdLocationOn, 
    MdMenuBook, 
    MdPhonelinkRing 
} from "react-icons/md";

import './MobileModal.css'

const MobileModal = ({ modalShow, closeMobileModal }) => {
  return (
    <div 
        className="mobile-modal-wrapper"
        style={{
            transform: modalShow ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: modalShow ? '1' : '0',
        }}
    >
        <div className="mobile-modal-header">
            <p>Edit profile</p>
            <span className="mobile-modal-close-btn" onClick={closeMobileModal}>X</span>
        </div>
        <div className="mobile-modal-content">
            <div className="mobile-modal-body">
                <h4>Your Gude profile editing</h4>
                <form>
                    <div className="profiles-form-content">
                        <div className="profiles-holder">
                            <div className="profiles-input-boxes">
                                <div className="profiles-input-box">
                                    <MdPerson size={30} className="profiles-icons" />
                                    <input type="text" placeholder="enter your first name" />
                                </div>
                                <div className="profiles-input-box">
                                    <MdPerson size={30} className="profiles-icons" />
                                    <input type="text" placeholder="enter your second name" />
                                </div>
                                <div className="profiles-input-box">
                                    <MdLocationOn size={30} className="profiles-icons" />
                                    <input type="text" placeholder="enter your location" />
                                </div>
                                <div className="profiles-input-box">
                                    <MdMenuBook size={30} className="profiles-icons" />
                                    <input type="text" placeholder="enter your tertiary institution" />
                                </div>
                                <div className="profiles-input-box">
                                    <MdPhonelinkRing size={30} className="profiles-icons" />
                                    <input type="text" placeholder="enter your mobile number" />
                                </div>
                            </div>
                            <div className="profiles-btn">
                                <button className="profiles-update">Update information</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="profiles-hidden"></div>
    </div>
  )
}

export default MobileModal 