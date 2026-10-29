import React from "react";
import './singleMsg.scss';
import img from '../../../images/pro_pic.png';
import {withRouter} from "react-router-dom";
const SingleMsg = ({history}) => {
    return(
        <div className={'single-msg'}>
            <div className={'msg-bubble'} onClick={() => history.push('/chat')}>
                <div className={'row'}>
                    <div className={'col-xs-2'}>
                        <img src={img} alt={''} />
                    </div>
                    <div className={'col-xs-8'}>
                        <span className={'name-date'}>Kamzen . 2 Hour ago</span><br />
                        <span className={'last-msg'}>Last Message....</span>
                    </div>
                    <div className={'col-xs-2 msg-qty'}>
                        <span className={'bd'}>2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SingleMsg);