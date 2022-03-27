import React from 'react'
import { 
    MdPerson, 
    MdLocationOn, 
    MdMenuBook, 
    MdPhonelinkRing 
} from "react-icons/md";

import './Modal.css'

const Modal = ({ show, close }) => {
  return (
    <div 
        className="profile-modal-wrapper"
        style={{
            transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
        }}
    >
        <div className="profile-modal-header">
            <p className="profile-profile-editing">Your Gude profile editing</p>
            <span onClick={close} className="profile-modal-close-btn">x</span>
        </div>
        <div className="profile-modal-content">
            <div className="profile-modal-body">
                <h4 className="profile-modal-h4">Update your profile</h4>
                 <div className="profile-modal-form-folder">
                     <form action="#">
                        <div className="profile-form-content">
                           <div className="profile-holder">
                                <div className="profile-input-boxes">
                                    <div className="input-box">
                                        <MdPerson size={30} className="profile-icons" />
                                        <input type="text" placeholder="enter your first name" />
                                    </div>
                                    <div className="input-box">
                                        <MdPerson size={30} className="profile-icons" />
                                        <input type="text" placeholder="enter your second name" />
                                    </div>
                                    <div className="input-box">
                                        <MdLocationOn size={30} className="profile-icons" />
                                        <input type="text" placeholder="enter your location" />
                                    </div>
                                    <div className="input-box">
                                        <MdMenuBook size={30} className="profile-icons" />
                                        <input type="text" placeholder="enter your tertiary institution" />
                                    </div>
                                    <div className="input-box">
                                        <MdPhonelinkRing size={30} className="profile-icons" />
                                        <input type="text" placeholder="enter your mobile number" />
                                    </div>
                                </div>
                           </div>
                        </div>
                     </form>
                 </div>
            </div>
            <div className="profile-modal-footer">
                <button onClick={close} className="profile-save-btn">Update information</button>
            </div>
        </div>
    </div>
  )
}

export default Modal;

{/**
name
surname
location
tellphone
school

*/}