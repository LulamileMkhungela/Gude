import React from 'react'

import './MobileDraft.css'
import propic from '../../../../../images/default_img.png'

const MobileDraft = () => {
  return (
    <div className="mobile-draft-container">
      <div className="draft-hidden"></div>
      <div className="mobile-draft-due">
          <h1>Product Name</h1>
        <p>9 available / new</p>
        <p>SKU number: 09403049305t4863</p>
        <p>Location: Johannessburg</p>
        <div className="mobile-draft">
          <img src={propic} alt="" />
          <p>Thabiso Hlatshwayo</p>
        </div>
        <hr />
        <p>Description</p>
        <hr />
      </div>
    </div>
  )
}

export default MobileDraft