import React from 'react'

import './Sold.css'
import ImageSlider from '../../../components/image-slider/ImageSlider'
import SliderData from '../../../components/image-slider/SliderData'
import SoldItems from '../../../components/profile-sold-items/SoldItems'

function Sold() {
  return (
    <div className="sold-container">
      <div className="sold-parent-container">
        <div className="sold-child-container">
          <div className="sold-text">
            <p className="sold-text-wrapper">Sold</p>
          </div>
          <ImageSlider slides={SliderData} />
        </div>
        <div className="sold-2ndChild-container">
          <h3 className="sold-list-items">Sold Items</h3>
            <SoldItems />
        </div>
      </div>
    </div>
  )
}

export default Sold
