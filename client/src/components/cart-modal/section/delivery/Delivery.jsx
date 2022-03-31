import React, { useState } from 'react'

import './Delivery.css'

function Delivery() {
   // const [deliver, setDeliver] = useState("one")

    /*const DeliveryHandler = (event) => {
    *    setDeliver(event.target.value)
    }*/
    
  return (
    <div className="delivery-container">
      <div className="delivery-body-holder">
        <h5 className="delivery-head">Standard Delivery</h5>
        <div className="delivery-2nd-container">
            <p className="container-text-holder">Order will be delivered between 3 - 5 business days</p>
            <label className="radio">
              <input className="delivery-radio" type="radio" value="one"  />
              <div className="delivery-circle"></div>
            </label>
        </div>
      </div>
      <div className="delivery-body-holder">
        <h5 className="delivery-head">Next Day Delivery</h5>
        <div className="delivery-2nd-container">
            <p className="container-text-holder">Place your order before 6pm and your items will be delivered the next day</p>
            <label className="radio">
              <input className="delivery-radio" type="radio" value="two" />
              <div className="delivery-circle"></div>
            </label>
        </div>
      </div>
      <div className="delivery-body-holder">
        <h5 className="delivery-head">Nominated Delivery</h5>
        <div className="delivery-2nd-container">
            <p className="container-text-holder">Pick a particular day from the calendar and order will be delivered on selected date</p>
            <label className="radio">
              <input className="delivery-radio" type="radio" value="three" />
              <div className="delivery-circle"></div>
            </label>
        </div>
      </div>
    </div>
  )
}

export default Delivery
