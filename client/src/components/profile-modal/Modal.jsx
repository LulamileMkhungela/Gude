import React from 'react'

import './Modal.css'

const Modal = () => {
  return (
    <div className="profile-modal-wrapper">
        <div className="profile-modal-header">
            <p className="profile-profile-editing">Your Gude profile editing</p>
            <span className="profile-modal-close-btn">x</span>
        </div>
        <div className="profile-modal-content">
            <div className="profile-modal-body">
                <h4 className="profile-modal-h4">User profile</h4>
                 <p>edit this</p>
            </div>
            <div className="profile-modal-footer">
                <button className="profile-save-btn">Save</button>
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