import React from "react";

import logoImg from '../../images/logo.png';

import './sideNav.scss';
import {Link, NavLink, withRouter} from "react-router-dom";

const SideNav = ({history}) => {
    return(
        <div className={'side-nav'}>
            <div className={'logo-img'} onClick={()=>history.push('/home')}>
                <img src={logoImg} alt={''}/>
            </div>
            <ul className={'list-group'}>
                <li className={'list-group-item'} onClick={()=>history.push('/electronics')}>
                    <Link to={'/electronics'}>
                        <i className="material-icons devices">devices</i>
                        <span className={'electronic-text'}>Electronics</span>
                    </Link>
                </li>
                <li className={'list-group-item'} onClick={()=>history.push('/outdoors')}>
                    <Link to={'/outdoors'}>
                        <i className={'fas fa-campground'}> </i>
                        Outdoors
                    </Link>
                </li>
                <li className={'list-group-item'}>
                    <Link to={''}>
                        <i className={'fab fa-xbox'}> </i>
                        Gaming
                    </Link>
                </li>
                <li className={'list-group-item'}>
                    <Link to={''}>
                        <i className={'fab fa-freebsd'}> </i>
                        Freebies
                    </Link>
                </li>
                <li className={'list-group-item'}>
                    <Link to={''}>
                        <i className={'fa fa-tachometer'}> </i>
                        Appliances
                    </Link>
                </li>
                <li className={'list-group-item'}>
                    <Link to={''}>
                        <i className={'fa fa-book'}> </i>
                        Stationery
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default withRouter(SideNav)