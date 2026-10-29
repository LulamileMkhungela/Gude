import React from "react";

import './mobileTopNav.scss';

const MobileTopNav = () => {
    return (
        <div className={'mobile-top-nav'}>

            <div className={'row-menu'}>
                <div className={'side-menu'}>
                    <i className="material-icons">menu</i>
                </div>
                <div className={'search-input'}>
                    <div className={'col-xs-10'}>
                        <input type={'search'} className={'form-control'} placeholder={'Search On Gude'}/>
                    </div>
                    <div className={'col-xs-2'}>
                        <i className={'fa fa-search'}> </i>
                    </div>
                </div>
                <div className={'notif-icon'}>
                    <i className={'fa fa-bell-o'}> </i>
                </div>
            </div>
        </div>
    )
}

export default MobileTopNav;