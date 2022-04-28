import React from 'react'
import { Link } from 'react-router-dom'
import { HiPencil } from "react-icons/hi";

import './MobileListing.css'
import propic from '../../../../../images/default_img.png'

const MobileListing = () => {
  return (
    <div className="mobile-listing-container">
      <div className="mobile-top-container">
        <h5>Electronics</h5>
        <button>see more</button>
      </div>
      <div className="mobile-listing">
        <div className="mobile-due">
          <h1>Product Name</h1>
          <div>
            <Link  to="/add">
              <HiPencil className="mobile-pen-icon" />
            </Link>
          </div>
        </div>
        <p>9 available / new</p>
        <p>SKU number: 09403049305t4863</p>
        <p>Location: Johannessburg</p>
        <div className="mobile-listing-due">
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

export default MobileListing