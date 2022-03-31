import React from 'react';

import './homeProduct.scss';
import img from '../../../images/pruduct_img1.png'
const HomeProduct = () => {

    return(
        <div className={'home-product'}>
            <div className={'home-product-img'}>
                <img src={img} alt={''} />
            </div>

            <div className={'row'}>
                <div className={'col-xs-6'}>
                    <button className={'btn btn-default'}>CART</button>
                </div>
                <div className={'col-xs-6'}>
                    <button className={'btn btn-default'}>WISHLIST</button>
                </div>
            </div>

        </div>
    )

}

export default HomeProduct;