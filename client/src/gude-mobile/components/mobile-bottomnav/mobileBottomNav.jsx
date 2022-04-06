import React, {useState} from "react";

import img from '../../../images/default_img.png';
import './mobileBottomNav.scss';

import ordersIcon from '../../images/orders-icon.svg';

const MobileBottomNav = () => {

    const [home, setHome] = useState(true)
    const [cart, setCart] = useState(false)
    const [add, setAdd] = useState(false)
    const [order, setOrder] = useState(false)
    const [profile, setProfile] = useState(false)

    return (
        <div className={'mobile-bottom-nav bd'}>
            <div className={`home ${home ? 'active' : ''}`}
                 onClick={() => {
                     setHome(true)
                     setCart(false)
                     setAdd(false)
                     setOrder(false)
                     setProfile(false)
                 }}>
                <i className={'fas fa-home'}> </i>
                <p className={'home-text'}>Home</p>
            </div>
            <div className={`btm-cart ${cart ? 'active' : ''}`}
                 onClick={() => {
                     setHome(false)
                     setCart(true)
                     setAdd(false)
                     setOrder(false)
                     setProfile(false)
                 }}
            >
                <i className="material-icons">add_shopping_cart</i>
                <p>Cart</p>
            </div>
            <div className={`add ${add ? 'active' : ''}`}
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
            <div className={`order ${order ? 'active' : ''}`}
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
            <div className={`profile ${profile ? 'active' : ''}`}
                 onClick={() => {
                     setHome(false)
                     setCart(false)
                     setAdd(false)
                     setOrder(false)
                     setProfile(true)
                 }}
            >
                <img src={img} alt={''} className={''}/>
                <p>Profile</p>
            </div>
        </div>
    )
}

export default MobileBottomNav;