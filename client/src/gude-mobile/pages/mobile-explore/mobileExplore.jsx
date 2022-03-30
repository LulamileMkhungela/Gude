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
            <div className={'list-header bd'}>
                <span>Electronics</span>
                <i className="material-icons more-icon bd">chevron_right</i>
            </div>

            <div className={'home-listing bd'}>
                <ul>
                    <li className={'bd'} onClick={() => history.push('/home/fjsdskfdsdgj')}>
                        <HomeProduct />
                    </li>

                    <li className={'bd'}>
                        <HomeProduct />
                    </li>

                    <li className={'bd'}>
                        <HomeProduct />
                    </li>

                    <li className={'bd'}>
                        <HomeProduct />
                    </li>
                </ul>
            </div>

            <div className={'list-header bd'}>
                <span>Electronics</span>
                <i className="material-icons more-icon bd">chevron_right</i>
            </div>

            <div className={'home-listing bd'}>
                <ul>
                    <li className={'bd'}>
                        <HomeProduct />
                    </li>

                    <li className={'bd'}>
                        <HomeProduct />
                    </li>

                    <li className={'bd'}>
                        <HomeProduct />
                    </li>

                    <li className={'bd'}>
                        <HomeProduct />
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default withRouter(MobileExplore);