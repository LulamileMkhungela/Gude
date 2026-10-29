import React from "react";

import './mobileProductPromo.scss';
import img from '../../../images/img.png';

const MobileProductPromo = () => {
    return(
        <div className={'mobile-product-promo bd'}>
            <div className={'mobile-product-promo-img'}>
                <img src={img} alt={''}/>
            </div>
        </div>
    )
}

export default MobileProductPromo;