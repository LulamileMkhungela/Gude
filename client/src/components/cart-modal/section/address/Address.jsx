import React from 'react'
import axios from 'axios'

import './Address.css'

function Address(props) {

  const {
    phoneNumber,
    street1,
    street2,
    city,
    state,
    country
  } = props.buyerInfor

  const onInputChange = (e) => {
    props.setBuyInfo({ ...props.buyerInfor,[e.target.name]: e.target.value})
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.post('',props.buyerInfor)
  }

  return (
    <div className="address-container">
      <div className="address-text-icon">
        <p className="address-text">Billing address is the same as delivery address.</p>
      </div>
      <div className="address-form">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="address-elememt-container">
            <p className="address-label">Phone number* <span>for delivery related quiries</span></p>
            <input className="address-input" type="text" name="phoneNumber" value={phoneNumber} onChange={onInputChange}/>
          </div>
          <div className="address-elememt-container">
            <p className="address-label">Street 1</p>
            <input className="address-input" type="text" name="street1" value={street1} onChange={onInputChange}/>
          </div>
          <div className="address-elememt-container">
            <p className="address-label">Street 2</p>
            <input className="address-input" type="text" name="street2" value={street2} onChange={onInputChange}/>
          </div>
          <div className="address-elememt-container">
            <p className="address-label">City</p>
            <input className="address-input" type="text" name="city" value={city} onChange={onInputChange}/>
          </div>
          <div className="address-div">
            <div className="address-combine">
              <p className="address-s">State</p>
              <input type="text" className="address-state-country" name="state" value={state} onChange={onInputChange}/>
            </div>
            <div className="address-combine">
              <p className="address-s">Country</p>
              <input type="text" className="address-state-country" name="country" value={country} onChange={onInputChange}/>
            </div>
          </div>
          <div className="address-btn">
            <button className="address-save-btn">save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Address