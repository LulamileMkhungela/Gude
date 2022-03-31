import React, { useState } from 'react'

import './Cart_Modal.css'
import Delivery from './section/delivery/Delivery'
import Address from './section/address/Address'
import Payment from './section/payment/Payment'

function Cart_Modal({  showModal, closeX}) {
  const [page, setPage] = useState('delivery')
  
  const OnChangeValueHandler = (event) => {
    setPage(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div 
      className="cart-modal-wrapper"
      style={{
        transform: showModal ? 'translateY(0vh)' : 'translateY(-200vh)',
        opacity: showModal ? '1' : '0'
      }}
    >
      <div className="cart-modal-header">
        <p>Payment</p>
        <span onClick={closeX} className="cart-close-modal-btn">x</span>
      </div>
      <div className="cart-modal-content">
        <div className="cart-modal-body">
          <div className="cart-modal-radio-btn">
            <div className="cart-radio-btn">
              <label className="radio">
                <input className="cart-input" type="radio" value="delivery" checked={page === "delivery"} onChange={OnChangeValueHandler} />
                <div className="cart-circle"></div>
              </label>
              <br />
              <p className="cart-label">Delivery</p>
            </div>
            <div className="cart-radio-btn">
              <label className="radio">
                <input className="cart-input" type="radio" value="address" checked={page === "address"} onChange={OnChangeValueHandler} />
                <div className="cart-circle"></div>
              </label>
              <br />
              <p className="cart-label">Address</p>
            </div>
            <div className="cart-radio-btn">
              <label className="radio">
                <input className="cart-input" type="radio" value="payment" checked={page === "payment"} onChange={OnChangeValueHandler} />
                <div className="cart-circle"></div>
              </label>
              <br />
              <p className="cart-label">Payment</p>
            </div>
          </div>
          <div className="cart-modal-body-content">
            {page === "delivery" && Delivery()}
            {page === "address" && Address()}
            {page === "payment" && Payment()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart_Modal
