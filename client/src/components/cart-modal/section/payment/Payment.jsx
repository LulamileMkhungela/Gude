import React from 'react'
import { Link } from 'react-router-dom'
import { CgPaypal } from "react-icons/cg";

import './Payment.css'

function Payment() {
  return (
    <div className="payment-container">
      <div className="payment-btn">
        <Link to={'#'}>
          <button className="payment-link-btn">
            <p className="payment-name">Cash</p>
            <CgPaypal className="paymentt-icon" />
          </button>
        </Link>
        <Link to={'#'}>
          <button className="payment-link-btn">
            <p className="payment-name">Payfast</p>
            <CgPaypal className="paymentt-icon" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Payment
