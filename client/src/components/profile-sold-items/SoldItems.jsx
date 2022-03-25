import React from 'react'

import SoldData from './SoldData'
import './SoldItems.css'

function SoldItems() {
  return (
    <section>
        {SoldData.map((item, index) => {
            return (
                <div key={index} className="sold-item-container">
                    <p className="sold-items-child">{item.name}</p>
                </div>
            )
        })}
    </section>
  )
}

export default SoldItems