import React from "react";

import promoImg from '../../images/promo_img.png';

import './promoProduct.scss';

const PromoProduct = () => {
    return(
        <div className={'col-lg-9 promo-product'}>
            <img src={promoImg} alt={''}/>
        </div>
    )
}
export default PromoProduct;