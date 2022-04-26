import React from "react";

import './message.scss';
import SingleMsg from "./singleMsg";

const Message = () => {

    return(
        <div className={'mobile-message'}>
            <div className={'row message-top'}>
                <div className={'col-xs-1'}>
                    <i className="material-icons">arrow_back</i>
                </div>
                <div className={'col-xs-10'}>
                    <p>Messages</p>
                </div>
                <div className={'col-xs-1'}>
                    <i className="material-icons">search</i>
                </div>
            </div>

            <SingleMsg />
            <SingleMsg />
            <SingleMsg />
            <SingleMsg />
        </div>
    )
}

export default Message;