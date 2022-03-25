import React, {useEffect, useState} from "react";
import DetailProductMsg from "./detailProductMsg";
import img from '../../images/default_img.png';
import './detailProductMsgView.scss';

import {io} from 'socket.io-client';
import {useSelector} from "react-redux";

const DetailProductMsgView = () => {
    const [socket,setSocket] = useState(null)
    const userId = useSelector(state => state.userLoggedInData.userInfo.id)
    useEffect(() => {
        setSocket(io('ws://localhost:8900'))
    },[])
    useEffect(() => {
        socket?.on('msg',msg=> {
            console.log(msg)
        })
    },[socket])

    useEffect(() => {
        if (userId !== undefined){
            console.log(userId)
            socket?.current.emit('addUser', userId)
            socket?.current.on('getUsers', users => {
                console.log(users)
            })
        }
    },[userId])

    return(
        <div className={'detail-product-msg-view'}>
            <DetailProductMsg />
            <DetailProductMsg />
            <DetailProductMsg />
            <DetailProductMsg />
            <DetailProductMsg />
            <DetailProductMsg />
            <DetailProductMsg />
            <div className={'row'}>
                <div className={'col-lg-1 input-img'}>
                    <img src={img} alt={''} className={''} />
                </div>
                <div className={'col-lg-10'}>
                    <input type={'text'} placeholder={'Write what you want to know'} className={'form-control bd'}/>
                </div>
                <div className={'col-lg-1 icon'}>
                    <i className={'fa fa-paper-plane'}> </i>
                </div>
            </div>
        </div>
    )
}

export default DetailProductMsgView;