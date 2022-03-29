import React from 'react'

import './Cart_Modal.css'

function Cart_Modal({  showModal, closeModal}) {
  return (
    <div 
      className="cart-modal-wrapper"
      style={{
        opacity: showModal ? '1' : '0',
      }}
    >
      <div className="cart-modal-header">
        <p>Payment</p>
        <span className="cart-close-modal-btn">x</span>
      </div>
      <div className="cart-modal-content">
        <div className="cart-modal-body">
          <h4>Modal</h4>
          <p>Thabiso</p>
        </div>
        <div className="cart-modal-footer">
          <button className="cart-continue-btn">Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Cart_Modal
