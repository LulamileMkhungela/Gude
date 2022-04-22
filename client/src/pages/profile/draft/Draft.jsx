import React from 'react'

import './Draft.css'
import img from '../../../images/img.png'
import profilePic from '../../../images/pro_pic.png'

function Draft() {
  return (
    <div className="draft-container">
      <div className="draft-holder-container">
        <div className="draft-1st-child">
          <img src={img} alt="" className="draft-image" />
        </div>
        <div className="draft-2nd-child">
          {/** fetch the product name from the database */}
          <h5 className="draft-h5">Product name</h5>
          {/** fetch the status of a product from the database */}
          <p className="draft-status">9 avaiable<span>New</span></p>
          {/** fetch SKU number from the database */}
          <p className="draft-sku">SKU number: 09403049305t4863</p>
          {/** fetch the location from the database */}
          <p className="draft-location">Location: Johannessburg</p>
          {/** fetc the image, name and surname in the database */}
          <div className="draft-profile">
            <img src={profilePic} alt="" className="draft-profile-image" />
            <p className="draft-fornames">Thabiso Hlatshwayo</p>
          </div>
          <hr /> 
          <p className="draft-description">Description</p>
          <hr />
          {/** information about products */}
          <p className="draft-information">Information about products</p>
        </div>
    </div>
  </div>
  )
}

export default Draft
