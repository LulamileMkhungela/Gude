import React from "react";
import './mobileMsg.scss';
const MobileMsg = () => {
    return(
        <div className={'mobile-msg bd'}>
            <div className={'row msg-input'}>
                <div className={'col-xs-1 bd'}>
                    <i className="material-icons">add_circle_outline</i>
                </div>
                <div className={'col-xs-10 bd'}>
                    <input type={'text'} placeholder={'Type Message..'}/>
                </div>
                <div className={'col-xs-1 bd'}>
                    <i className="material-icons">send</i>
                </div>
            </div>
        </div>
    )
}

export default MobileMsg;