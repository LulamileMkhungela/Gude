import React, {useState} from 'react';

import './carts.scss';
import CartProduct from "../../components/cart-products/cartProduct";
import {withRouter} from "react-router-dom";

const Carts = ({history}) => {

    const [cartLink,setCartLink] = useState(true)
    const [wishLink,setWishLink] = useState(false)

    return (
        <div className={'mobile-cart'}>
            <div className={'menu'}>
                <div className={cartLink ? 'active-cart' : ''}>
                    <span className={''} onClick={() => {
                        setCartLink(true)
                        setWishLink(false)
                    }}>Cartlist</span>
                </div>
                <div className={wishLink ? 'active-cart' : ''}>
                    <span className={''} onClick={() => {
                        setCartLink(false)
                        setWishLink(true)
                    }}>Wishlist</span>
                </div>
            </div>
            <CartProduct />
            <CartProduct />
            <span className={'add-another bd'} onClick={() => history.push(('/home'))}>+ Add another item</span>
            <div className={'sub-tottal'}>
                <span>Sub Total</span><span>R10000</span>
                <span>Delivery Fee</span><span>R10</span>
            </div>

            <div className={'total'}>
                <span>Total</span><span>R70000</span>
            </div>

        </div>
    )
}

export default withRouter(Carts);