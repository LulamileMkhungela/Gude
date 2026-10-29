import React from "react";

import './chats.scss';

const Chats = () => {
    return(
        <div className={'chats'}>
            <div className={'chats-top bd'}></div>
            <div className={'chats-body'}></div>
            <div className={'chats-btm bd'}>
                <div className={'row'}>
                    {/*<div className={'col-xs-1 bd'}>*/}
                    {/*    <i className="material-icons">add_circle_outline</i>*/}
                    {/*</div>*/}
                    {/*<div className={'col-xs-10 bd'}>*/}
                    {/*    <input type={'text'} placeholder={'Type Message..'}/>*/}
                    {/*</div>*/}
                    {/*<div className={'col-xs-1 bd'}>*/}
                    {/*    <i className="material-icons">send</i>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default Chats;