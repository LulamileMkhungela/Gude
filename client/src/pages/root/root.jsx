import React from "react";

import './root.scss';

import TopNav from "../../components/top-nav/topNav";
import SideNav from "../../components/side-nav/sideNav";


const Root = ({children}) => {

    return(
        <div className={'root'}>
            <TopNav />
            <SideNav />
            <div className={'explore-content'}>{children}</div>
        </div>
    )

}
export default Root;