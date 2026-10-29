import React from 'react'

import './Promotion.css'
import img from '../../images/img.png'

function Promotion() {
  return (
    <div className="promotion-container">
      <div className="promotion-secondary-container">
        <div className="promo-image">
          <img className="promo-image-image" src={img} alt="" />
        </div>
        <div className="promo-info">
          <div className="promo-your-ad">
            <h2>Promote your ad</h2>
          </div>
          <div className="promo-group">
            <div className="promo-btn">
              <h1>R30.99</h1>
              <p>Your Ad will run for 3days with targeted users within your area</p>
            </div>
            <div className="promo-btn">
              <h1>R38.99</h1>
              <p>Your Ad will run for 3days with targeted users within your district</p>
            </div>
            <div className="promo-btn">
              <h1>R44.99</h1>
              <p>Your Ad will run for 3days with targeted users provincially</p>
            </div>
            <div className="promo-btn">
              <h1>R874.99</h1>
              <p>Your Ad will run for 3days with targeted users nationwide</p>
            </div>
            <div className="promo-btn-btn">
              <button>Promote now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promotion
