import React from "react";

import './mobileExplore.scss';
import MobileProductPromo from "../../components/mobile-product/mobileProductPromo";
import HMenu from "../../components/h-menu/hMenu";
import HomeProduct from "../../components/mobile-product/homeProduct";
import {withRouter} from "react-router-dom";

const MobileExplore = ({history}) => {

    

    return (
        <div className={'mobile-explore'}>
            <MobileProductPromo/>
            <HMenu/>
            <div className={'product-list-header'}>
                <span className={''}>Electronics</span>
                <i className="material-icons">chevron_right</i>
            </div>

            <div className={'home-listing'}>
                <ul>
                    <li className={''} onClick={() => history.push('/home/fjsdskfdsdgj')}>
                        <HomeProduct />
                    </li>

                    <li className={''}>
                        <HomeProduct />
                    </li>

                    <li className={''}>
                        <HomeProduct />
                    </li>

                    <li className={''}>
                        <HomeProduct />
                    </li>
                </ul>
            </div>

            <div className={'product-list-header'}>
                <span className={''}>Electronics</span>
                <i className="material-icons">chevron_right</i>
            </div>

            <div className={'home-listing'}>
                <ul>
                    <li className={''}>
                        <HomeProduct />
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default withRouter(MobileExplore);