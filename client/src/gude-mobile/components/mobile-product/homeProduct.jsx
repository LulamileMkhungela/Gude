import React from 'react';

import './homeProduct.scss';
import img from '../../images/hp.jpg';
const HomeProduct = () => {

    return(
        <div className={'home-product'}>
            <div className={'home-product-img'}>
                <img src={img} alt={''} />
            </div>
            <span className={'product-name'}>Product Name</span>
            <div className={'product-hl-1'}>
                <span className={''}>9 Available</span>
                <span className={'price'}>R399</span>
            </div>
            <div className={'product-hl-2'}>
                <p className={''}>Johannesburg</p>
                <p className={''}>Date</p>
            </div>
            <div className={'row'}>
                <div className={'col-xs-6'}>
                    <button className={'btn btn-default cart-btn'}>CART</button>
                </div>
                <div className={'col-xs-6'}>
                    <button className={'btn btn-default wishlist'}>WISHLIST</button>
                </div>
            </div>

        </div>
    )

}

export default HomeProduct;