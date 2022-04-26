import React, {useState} from "react";

import img from '../../../images/default_img.png';
import './mobileBottomNav.scss';

import ordersIcon from '../../images/orders-icon.svg';
import {withRouter} from "react-router-dom";

const MobileBottomNav = ({history}) => {

    const [home, setHome] = useState(true)
    const [cart, setCart] = useState(false)
    const [add, setAdd] = useState(false)
    const [order, setOrder] = useState(false)
    const [profile, setProfile] = useState(false)

    return (
        <div className={'mobile-bottom-nav bd'}>
            <div className={`home ${home ? 'link-active' : ''}`}
                 onClick={() => {
                     setHome(true)
                     setCart(false)
                     setAdd(false)
                     setOrder(false)
                     setProfile(false)
                     history.push('home')
                 }}>
                <i className={'fas fa-home'}> </i>
                <p className={'home-text'}>Home</p>
            </div>
            <div className={`btm-cart ${cart ? 'link-active' : ''}`}
                 onClick={() => {
                     setHome(false)
                     setCart(true)
                     setAdd(false)
                     setOrder(false)
                     setProfile(false)
                     history.push('/cart')
                 }}
            >
                <i className="material-icons">add_shopping_cart</i>
                <p>Cart</p>
            </div>
            <div className={`add ${add ? 'link-active' : ''}`}
                 onClick={() => {
                     setHome(false)
                     setCart(false)
                     setAdd(true)
                     setOrder(false)
                     setProfile(false)
                 }}
            >
                <i className={'fa fa-plus-circle'}> </i>
                <p>Sell</p>
            </div>
            <div className={`order ${order ? 'link-active' : ''}`}
                 onClick={() => {
                     setHome(false)
                     setCart(false)
                     setAdd(false)
                     setOrder(true)
                     setProfile(false)
                 }}
            >
                <img src={ordersIcon} alt={''}/>
                <p>Orders</p>
            </div>
            <div className={`profile ${profile ? 'link-active' : ''}`}
                 onClick={() => {
                     setHome(false)
                     setCart(false)
                     setAdd(false)
                     setOrder(false)
                     setProfile(true)
                     history.push('/profile')
                 }}
            >
                <img src={img} alt={''} className={''}/>
                <p>Profile</p>
            </div>
        </div>
    )
}

export default withRouter(MobileBottomNav);