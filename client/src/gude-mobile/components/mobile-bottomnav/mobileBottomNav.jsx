import React from "react";

import img from '../../../images/default_img.png';
import './mobileBottomNav.scss';

const MobileBottomNav = () => {
    return(
        <div className={'mobile-bottom-nav'}>
            <div className={'row'}>
                <div className={'col-xs-2 bd'}>
                    <i className={'fas fa-home'}> </i>
                    <p className={'home-text'}>Home</p>
                </div>
                <div className={'col-xs-2 bd'}></div>
                <div className={'col-xs-4 bd'}></div>
                <div className={'col-xs-2 bd'}></div>
                <div className={'col-xs-2 bd'}>
                    <div className={'bottom-pro-img'}>
                        <img src={img} alt={''} className={'bd'}/>
                        <p>Profile</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileBottomNav;