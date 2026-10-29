import React from "react";

import './hMenu.scss';

const HMenu = () => {
    return(
        <div className={'h-menu'}>
            <ul className={''}>
                <li>All</li>
                <li>Electronics</li>
                <li>Outdoor</li>
                <li>Health & Beauty</li>
                <li>Gaming</li>
                <li>Furniture</li>
                <li>Phones</li>
                <li>Books</li>
            </ul>
        </div>
    )
}

export default HMenu;