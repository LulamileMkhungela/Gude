import React from "react";

import './home.scss';
import MobileTopNav from "../../components/mobile-topnav/mobileTopNav";
import MobileBottomNav from "../../components/mobile-bottomnav/mobileBottomNav";

const Home = () => {
    return(
        <div className={'mobile-home'}>
            <MobileTopNav />
            <MobileBottomNav />
        </div>
    )
}

export default Home;