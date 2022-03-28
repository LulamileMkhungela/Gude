import React from 'react'

import './Draft.css'
import img from '../../../images/img.png'
import profilePic from '../../../images/pro_pic.png'

function Draft() {
  return (
    <div className="listing-container">
    <div className="listing-holder-container">
      <div className="listing-1st-child">
        <img src={img} alt="" className="listing-image" />
      </div>
      <div className="listing-2nd-child">
        {/** fetch the product name from the database */}
        <h5 className="listing-h5">Product name</h5>
        {/** fetch the status of a product from the database */}
        <p className="listing-status">9 avaiable<span>New</span></p>
        {/** fetch SKU number from the database */}
        <p className="listing-sku">SKU number: 09403049305t4863</p>
        {/** fetch the location from the database */}
        <p className="listing-location">Location: Johannessburg</p>
        {/** fetc the image, name and surname in the database */}
        <div className="listinig-profile">
          <img src={profilePic} alt="" className="listing-profile-image" />
          <p className="listing-fornames">Thabiso Hlatshwayo</p>
        </div>
        <hr /> 
        <p className="listing-description">Description</p>
        <hr />
        {/** information about products */}
        <p className="listing-information">Information about products</p>
      </div>
    </div>
  </div>
  )
}

export default Draft
