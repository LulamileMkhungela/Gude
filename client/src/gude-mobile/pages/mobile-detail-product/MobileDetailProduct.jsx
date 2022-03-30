import React from "react";
import './mobileDetailProduct.scss';
import img from '../../../images/thinkpad.jpg';
 const MobileDetailProduct = () => {
     return(
         <div className={'mobile-product-detail'}>
             <div className={'mobile-product-detail-back bd'}>
                 <i className="material-icons">arrow_back</i>
             </div>
             <div className={'mobile-product-detail-img bd'}>
                 <img src={img} alt={''} />
             </div>
             <div className={'detail-product-pro-img'}>
                 <img src={img} alt={''}/>
             </div>
             <div className={'detail-info bd'}>
                 <div className={'location-time'}>
                     <span>Ga-Rankuwa . 2 Hour ago</span>
                 </div>
             </div>
         </div>
     )
 }

 export default MobileDetailProduct;
