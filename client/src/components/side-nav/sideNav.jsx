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
                    <i className="material-icons devices">devices</i>
                    <Link to={'/electronics'}>Electronics</Link>
                </li>
                <li className={'list-group-item'} onClick={()=>history.push('/outdoors')}>
                    <i className={'fas fa-campground'}> </i>
                    <Link to={'/outdoors'}>Outdoors</Link>
                </li>
                <li className={'list-group-item'}>
                    <i className={'fab fa-xbox'}> </i>
                    <Link to={''}>Gaming</Link>
                </li>
                <li className={'list-group-item'}>
                    <i className={'fab fa-freebsd'}> </i>
                    <Link to={''}>Freebies</Link>
                </li>
                <li className={'list-group-item'}>
                    <i className={'fa fa-tachometer'}> </i>
                    <Link to={''}>Appliances</Link>
                </li>
                <li className={'list-group-item'}>
                    <i className={'fa fa-book'}> </i>
                    <Link to={''}>Stationery</Link>
                </li>
            </ul>

        </div>
    )
}

export default withRouter(SideNav)