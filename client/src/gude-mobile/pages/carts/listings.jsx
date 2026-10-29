import React, {useState} from 'react';

import './listings.scss';
import {withRouter} from "react-router-dom";
import CartListing from "../../components/cart-lisitng/cartListing";
import WishListing from "../../components/wish-listing/wishListing";

const Listings = ({history}) => {

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

            {
                cartLink ? <CartListing /> : <WishListing />
            }

        </div>
    )
}

export default withRouter(Listings);