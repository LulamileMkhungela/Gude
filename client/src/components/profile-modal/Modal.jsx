import React from 'react'

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
                <h4 className="profile-modal-h4">User profile</h4>
                 <div className="profile-modal-form-folder">
                     <form action="#">
                        <div className="profile-input-boxes">
                            <div className="input-box">
                                <input type="text" placeholder="enter your first name" />
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="enter your second name" />
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="enter your first name" />
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="enter your first name" />
                            </div>
                        </div>
                     </form>
                 </div>
            </div>
            <div className="profile-modal-footer">
                <button onClick={close} className="profile-save-btn">Save</button>
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