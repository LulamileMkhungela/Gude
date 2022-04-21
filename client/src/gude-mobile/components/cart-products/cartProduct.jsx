import React from "react";

import './cartProduct.scss';
import img from '../../images/hp.jpg';

const CartProduct = () => {
    return(
        <div className={'cart-product'}>
            {/*<input type={'checkbox'} className={'bd'}/>*/}
            <div className={'col'}>
                <div className={''}>
                    <img src={img} alt={''} />
                </div>
                <div className={'mobile-product-info'}>
                    <span>Product Name</span><br />
                    <div className={'mobile-price'}>
                        <span>Price</span>
                        <span>Date</span>
                    </div>
                    <br />
                    <br />
                    <div className={'col-loc'}>
                        <span>Location</span>
                        <div className={'op'}>
                            <span className={'min'}>-</span>
                            <span className={'num'}>1</span>
                            <span className={'max'}>+</span>
                        </div>
                        <i className={'fa fa-trash trash'}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct;