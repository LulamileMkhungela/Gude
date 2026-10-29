import React from "react";

import './detailProductMsg.scss';

import img from '../../images/default_img.png';

const DetailProductMsg = () => {
    return(
        <div className={'detail-product-msg'}>
            <div className="media">
                <div className="media-left">
                    {/*<img src={img} className="media-object" alt={''} style="width:60px" />*/}
                    <img src={img} alt={''} style={{width : '60px'}}/>
                </div>
                <div className="media-body">
                    <h4 className="">John Doe</h4>
                    <p>Lorem ipsum...</p>
                </div>
                <div className="media-right">
                    <p>Timegxgfxgfxgfgx</p>
                </div>
            </div>
        </div>
    )
}
export default DetailProductMsg