import React from "react";
import Product from "../products/product";
import './cartListing.scss';
import {withRouter} from "react-router-dom";
const CartListing = ({history}) => {
    return(
        <div className={'mobile-cart-listing'}>
            <Product />
            <Product />
            <Product />
            <span className={'add-another bd'} onClick={() => history.push(('/home'))}>+ Add another item</span>
            <div className={'sub-tottal'}>
                <span>Sub Total</span><span>R10000</span>
                <span>Delivery Fee</span><span>R10</span>
            </div>

            <div className={'total'}>
                <span>Total</span><span>R70000</span>
            </div>

            <div className={'cart-listing-btn'}>
                <input type={'button'} className={'move'} value={'Move To Wishlist'} />
                <input type={'button'} className={'check'} value={'Checkout'} />
            </div>

        </div>
    )
}

export default withRouter(CartListing);