import React from 'react'
import { TiTick } from "react-icons/ti";

import './Address.css'

function Address() {
  return (
    <div className="address-container">
      <div className="address-text-icon">
        <button className="address-btn" disabled><TiTick className="address-icon"/></button>
        <p className="address-text">Billing address is the same as delivery address.</p>
      </div>
      <div className="address-form">
        <form action="#">
          <div className="address-elememt-container">
            <p className="address-label">Phone number* <span>for delivery related quiries</span></p>
            <input className="address-input" type="text" />
          </div>
          <div className="address-elememt-container">
            <p className="address-label">Street 1</p>
            <input className="address-input" type="text" />
          </div>
          <div className="address-elememt-container">
            <p className="address-label">Street 2</p>
            <input className="address-input" type="text" />
          </div>
          <div className="address-elememt-container">
            <p className="address-label">City</p>
            <input className="address-input" type="text" />
          </div>
          <div className="address-div">
            <div className="address-combine">
              <p className="address-s">State</p>
              <input type="text" className="address-state-country" />
            </div>
            <div className="address-combine">
              <p className="address-s">Country</p>
              <input type="text" className="address-state-country" />
            </div>
          </div>
          <div className="address-b">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Address